import { neon } from "@neondatabase/serverless";
//run once
console.log(
  "DATABASE_URL:",
  process.env.DATABASE_URL ? "✓ Loaded" : "✗ Missing",
);

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}
const sql = neon(process.env.DATABASE_URL!);
//run once when to create a db initially
export async function createDBLead() {
  // First create the enum type
  await sql`CREATE TYPE "ServiceType" AS ENUM ('FUNCTIONSERVICE', 'BOARDING', 'WALKING', 'DAYCARE', 'PETSITTING');`;

  // Then create the table
  await sql`
    CREATE TABLE IF NOT EXISTS "Lead" (
      id SERIAL PRIMARY KEY,
      email TEXT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      service "ServiceType" NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}
export async function createDBUser() {
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
export { sql };
