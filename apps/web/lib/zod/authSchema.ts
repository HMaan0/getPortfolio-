//move this to packages
import { z } from "zod";

export const credentialsSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
});

export type CredentialsSchema = z.infer<typeof credentialsSchema>;