import * as z from 'zod'

export const UserValidation = z.object(
    {
        profile_photo: z.string().url().nonempty(),
        name:z.string().min(3, {message:'Please choose name with minimum 3 characters'}).max(30),
        username:z.string().min(3, {message:'Please choose username with minimum 3 characters'}).max(30),
        bio: z.string().min(3).max(1000)
    }
)