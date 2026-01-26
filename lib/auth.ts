"use server";
import bcrypt from "bcryptjs";
import { sql } from "@/lib/db";
import { verifyToken, signToken, JWTPayload } from "@/lib/jwt";
import { getLeadsByTime, DeleteLead, setCompleted } from "./leads";

// Create the User table
//
//

export async function createDBUser() {
  // First create the enum type if it doesn't exist
  await sql`
    DO $$ BEGIN
      CREATE TYPE "RoleType" AS ENUM ('ADMIN', 'EMPLOYEE');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;
  `;

  // Then create the table
  await sql`
    CREATE TABLE IF NOT EXISTS "User" (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      password TEXT NOT NULL,
      role "RoleType" NOT NULL DEFAULT 'EMPLOYEE',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

// Insert a new user (signup)
export async function createUser(
  email: string,
  name: string,
  password: string,
  role = "EMPLOYEE",
) {
  try {
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await sql`
      INSERT INTO "User" (email, name, password, role)
      VALUES (${email}, ${name}, ${hashedPassword}, ${role}::\"RoleType\")
      RETURNING id, email, name, role, created_at
    `;

    return {
      success: true,
      user: result,
    };
  } catch (error: any) {
    // Handle unique constraint violation (duplicate email)
    if (error.code === "23505") {
      return {
        success: false,
        error: "Email already exists",
      };
    }

    return {
      success: false,
      error: error.message || "An error occurred",
    };
  }
}

// Get user by email
export async function getUserByEmail(email: string) {
  try {
    const result = await sql`
      SELECT id, email, name, role, created_at
      FROM "User"
      WHERE name = ${email}
    `;

    if (result.length === 0) {
      return {
        success: false,
        error: "User not found",
      };
    }

    return {
      success: true,
      user: result,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "An error occurred",
    };
  }
}

export async function getUserById(id: number) {
  try {
    const result = await sql`
      SELECT id, email, name, role, created_at
      FROM "User"
      WHERE id = ${id}
    `;
    console.log(result);

    if (result.length === 0) {
      return {
        success: false,
        error: "User not found",
      };
    }

    return {
      success: true,
      user: result,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "An error occurred",
    };
  }
}

export async function login(email: string, password: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await sql`
      SELECT id, email,password, name, role, created_at
      FROM "User"
      WHERE name = ${email}
    `;
    const isPasswordValid = await bcrypt.compare(password, result[0].password);

    if (result.length === 0) {
      return {
        success: false,
        error: "User not found",
      };
    }
    const jwtObject = signToken({
      userId: result[0].id,
      email: result[0].name,
    });

    if (isPasswordValid) {
      return {
        success: true,
        user: result[0],
        token: jwtObject.access_token,
      };
    }
    return {
      success: false,
      error: "Invalid password",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "An error occurred",
    };
  }
}

export async function getCurrentUser(access: string) {
  const payload = verifyToken(access);
  if (payload == null) {
    return { success: false, message: "Please login" };
  } else {
    const data = await getUserByEmail(payload.email);
    if (data.success == false) {
      return { success: false, message: "No user found." };
    }
    return { ...data };
  }
}

export async function getLeads(token: string) {
  const user = await getCurrentUser(token);
  if (user.success == false) {
    return { success: false, message: "No user found." };
  }
  const leads = await getLeadsByTime();
  return { success: true, leads };
}

export async function deleteLead(token: string, id: number) {
  const user = await getCurrentUser(token);
  if (user.success == false) {
    return { success: false, message: "No user found." };
  }
  await DeleteLead(id);
  return { success: true };
}

export async function setStatus(token: string, id: number) {
  const user = await getCurrentUser(token);
  if (user.success == false) {
    return { success: false, message: "No user found." };
  }
  await setCompleted(id);
  return { success: true };
}
