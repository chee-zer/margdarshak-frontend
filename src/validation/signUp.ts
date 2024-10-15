import * as z from "zod"

export const phoneRegex = /^\+?[1-9]\d{1,14}$/

export const formSchema = z.object({
    phone: z.union([z.string().regex(phoneRegex, "Invalid phone number"), z.literal("")]),
    email: z.union([z.string().email("Invalid email address"), z.literal("")]),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword)
        ctx.addIssue({
            code: "custom",
            message: "Passwords must match!",
            path: ["confirmPassword"],
        });
    if (data.phone === "" && data.email === "") {
        ctx.addIssue({
            code: 'custom',
            message: "Enter Phone Number or Email",
            path: ["phone"]
        });
        ctx.addIssue({
            code: 'custom',
            message: "Enter Phone Number or Email",
            path: ["email"]
        });
    }
});