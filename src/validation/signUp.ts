import * as z from "zod"

export const phoneRegex = /^\+?[1-9]\d{1,14}$/

export const formSchema = z.object({
    phone: z.string().regex(phoneRegex, "Invalid phone number"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match!",
    path: ["confirmPassword"],
});
