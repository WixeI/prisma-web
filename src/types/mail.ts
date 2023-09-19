import { z } from "zod";

export const mailDataSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
    .max(50, { message: "O nome não pode ter mais que 50 caracteres" }),
  email: z
    .string()
    .min(2, { message: "O email deve ter pelo menos 2 caracteres" })
    .email({ message: "O endereço de e-mail não é válido." }),
  topic: z.enum(["general", "digitalSolutions", "digitalPresence", "hotsites"]),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export type MailData = z.infer<typeof mailDataSchema>;
