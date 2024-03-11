import { z } from "zod";

export const registerTech = z.object({
    title: z.string(),
    status: z.string()

});