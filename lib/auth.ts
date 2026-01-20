"use server";

export async function createUser(
  name: string,
  email: string,
  password: string,
  role: string,
) {
  console.log("Creating user:", name, email, password, role);
}
