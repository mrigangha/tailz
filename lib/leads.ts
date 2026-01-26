"use server";
import { sql } from "@/lib/db";

export type ServiceType =
  | "FUNCTIONSERVICE"
  | "BOARDING"
  | "WALKING"
  | "DAYCARE"
  | "PETSITTING";

export interface LeadData {
  email: string;
  name: string;
  phone: string;
  service: ServiceType;
}

export interface Lead extends LeadData {
  id: number;
  created_at: Date;
  completed?: boolean;
}

/**
 * Add a new lead to the database
 * @param leadData - The lead information to insert
 * @returns The created lead with id and timestamp
 * @throws Error if email already exists or validation fails
 */
export async function addLead(leadData: LeadData): Promise<Lead> {
  const { email, name, phone, service } = leadData;
  const result = await sql`
      INSERT INTO "Lead" (email, name, phone, service)
      VALUES (${email}, ${name}, ${phone}, ${service})
      RETURNING *
    `;
  return result[0] as Lead;
}

/**
 * Add multiple leads to the database
 * @param leads - Array of lead data to insert
 * @returns Array of created leads
 */
export async function addLeads(leads: LeadData[]): Promise<Lead[]> {
  const results: Lead[] = [];
  const errors: Array<{ lead: LeadData; error: string }> = [];

  for (const lead of leads) {
    try {
      const result = await addLead(lead);
      results.push(result);
    } catch (error: any) {
      errors.push({ lead, error: error.message || "Unknown error" });
    }
  }

  if (errors.length > 0) {
    console.error("Some leads failed to insert:", errors);
  }

  return results;
}

/**
 * Get all leads from the database
 * @returns Array of leads
 */
export async function getLeadsByTime(): Promise<Lead[]> {
  const results = await sql`
     SELECT * FROM "Lead" ORDER BY created_at DESC
   `;
  return (results as Lead[]) || [];
}

/**
 * Mark a lead as completed
 * @param id - The lead ID to update
 */
export async function setCompleted(id: number): Promise<void> {
  await sql`
    UPDATE "Lead"
    SET completed = ${true}
    WHERE id = ${id}
  `;
}

/**
 * Delete a lead from the database
 * @param id - The lead ID to delete
 */
export async function DeleteLead(id: number): Promise<void> {
  await sql`
    DELETE FROM "Lead"
    WHERE id = ${id}
  `;
}
