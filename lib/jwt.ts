import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";

export interface JWTPayload {
  userId: string;
  email: string;
}
export function signToken(payload: JWTPayload) {
  return {
    refresh_token: jwt.sign(payload, JWT_SECRET, {
      expiresIn: "7d", // Token expires in 7 days
    }),
    access_token: jwt.sign(payload, JWT_SECRET, {
      expiresIn: "1h", // Changed "1hr" to "1h"
    }),
  };
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (error) {
    return null;
  }
}
