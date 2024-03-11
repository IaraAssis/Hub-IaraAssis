import { z } from "zod";

export const registerForm = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
    bio: z.string().nonempty("A bio é obrigatório"),
    contact: z.string().nonempty("O contato é obrigatório"),
    course_module: z.string("O modulo é obrigatório"),
    password: z
        .string()
        .nonempty("A senha é obrigatória")
        .min(8, "São necessários pelo menos oito caracteres")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
        .regex(/[0-9]+/, "É necessário pelo menos um número")
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/,
            "É necessário pelo menos um caracter especial."),
        confirmPassword: z.string().nonempty("Confirmar a senha é obrigatória"),

}).refine(({password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"]
});

