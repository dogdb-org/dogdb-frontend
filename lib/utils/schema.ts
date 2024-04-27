import { z } from 'zod'

export const PasswordResetSchema = z
    .object({
        currentPassword: z
            .string()
            .min(1, { message: 'Current password is required' }),
        newPassword: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters long' })
            .refine((password) => /[a-z]/.test(password), {
                message: 'Password must contain at least one lowercase letter',
            })
            .refine((password) => /[A-Z]/.test(password), {
                message: 'Password must contain at least one uppercase letter',
            })
            .refine((password) => /[0-9]/.test(password), {
                message: 'Password must contain at least one number',
            }),
        passwordConfirm: z
            .string()
            .min(1, { message: 'Password confirmation is required' }),
    })
    .refine((data) => data.passwordConfirm === data.newPassword, {
        message: 'Passwords must match',
        path: ['passwordConfirm'],
    })
