'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import UseProfile from '@/assets/image/user-profile.png'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PasswordResetSchema } from '@/lib/utils/schema'
import { toast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { CameraIcon } from 'lucide-react'

type UserDataType = {
    userName: string
    email: string
}

function page() {
    const [isEditing, setIsEditing] = React.useState<boolean>(false)
    const [isEditingUsername, setIsEditingUsername] =
        React.useState<boolean>(false)
    const [isEditingUserEmail, setIsEditingUserEmail] =
        React.useState<boolean>(false)
    const [isClient, setIsClient] = React.useState<boolean>(false)

    const [userData, setUserData] = React.useState<UserDataType>({
        userName: '@leonardodiCaprio',
        email: 'leonardodiCaprio@gmail.com',
    })

    const form = useForm<z.infer<typeof PasswordResetSchema>>({
        resolver: zodResolver(PasswordResetSchema),
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            passwordConfirm: '',
        },
    })

    const handleUserNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prev) => ({
            ...prev,
            userName: evt.target.value,
        }))
    }

    const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prev) => ({
            ...prev,
            email: evt.target.value,
        }))
    }

    const onSubmit = async () => {
        form.reset()
        toast({
            title: 'Password Reset',
            description: 'Password reset successfully',
        })
    }

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <main className='mx-8 my-8 md:mx-40 md:my-12'>
            <div className=' text-bod flex flex-col items-center justify-between gap-8 md:flex-row'>
                <div className=' flex flex-row items-center gap-4'>
                    <div key='1' className='relative h-[100px] w-[100px]'>
                        <Avatar className='h-full w-full rounded-full'>
                            <AvatarImage
                                alt='User Avatar'
                                src={UseProfile.src}
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Button
                            className='absolute bottom-0 right-0 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-white bg-white p-1 transition-colors dark:border-gray-950'
                            size='icon'
                            variant='outline'
                        >
                            <CameraIcon className='h-4 w-4 text-gray-500 dark:text-gray-400' />
                            <span className='sr-only'>Upload Avatar</span>
                        </Button>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-bold md:text-3xl'>
                            Leonardo DiCaprio
                        </h1>
                        <p className=' text-sm'>@leonardodiCaprio</p>
                    </div>
                </div>

                <div className=' flex gap-4'>
                    <Button
                        variant='outline'
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {isEditing ? 'Save profile' : 'Edit Profile'}
                    </Button>
                    <Button>My Dogs</Button>
                </div>
            </div>

            <div className=' mt-12 flex flex-col gap-8'>
                <h1 className=' text-3xl font-semibold'>Account</h1>
                <div className=' flex items-center justify-between'>
                    <div className=' h-12'>
                        <h4 className=' font-semibold'>Username</h4>
                        {isEditingUsername ? (
                            <Input
                                className=' mt-2'
                                type='text'
                                value={userData.userName}
                                onChange={handleUserNameChange}
                            />
                        ) : (
                            <p className=' text-sm'>{userData.userName}</p>
                        )}
                    </div>
                    <Button
                        className=' w-[85px]'
                        disabled={!isEditing}
                        onClick={() => setIsEditingUsername(!isEditingUsername)}
                        variant='outline'
                    >
                        {isEditingUsername ? 'Save' : 'Change'}
                    </Button>
                </div>

                <div className=' flex items-center justify-between'>
                    <div className=' h-12'>
                        <h4 className=' font-semibold '>Email Adress</h4>
                        {isEditingUserEmail ? (
                            <Input
                                className='mt-2'
                                type='text'
                                value={userData.email}
                                onChange={handleEmailChange}
                            />
                        ) : (
                            <p className=' text-sm'>{userData.email}</p>
                        )}
                    </div>
                    <Button
                        className=' w-[85px]'
                        disabled={!isEditing}
                        variant='outline'
                        onClick={() =>
                            setIsEditingUserEmail(!isEditingUserEmail)
                        }
                    >
                        {isEditingUserEmail ? 'Save' : ' Change'}
                    </Button>
                </div>

                <div className=' flex items-center justify-between'>
                    <div>
                        <h4 className=' font-semibold'>Password</h4>
                        <p className=' text-sm'>************</p>
                    </div>

                    <Dialog>
                        <DialogTrigger>
                            <Button
                                className=' w-[85px]'
                                disabled={!isEditing}
                                variant='outline'
                            >
                                Reset
                            </Button>
                        </DialogTrigger>
                        <DialogContent className=' rounded-lg'>
                            <DialogHeader>
                                <DialogTitle className=' mb-4'>
                                    Reset your password
                                </DialogTitle>
                            </DialogHeader>

                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className=' flex flex-col gap-8'
                                >
                                    <FormField
                                        control={form.control}
                                        name='currentPassword'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type='password'
                                                        placeholder='Current Password'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='newPassword'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type='password'
                                                        placeholder='New Password'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='passwordConfirm'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type='password'
                                                        placeholder='Confirm Password'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type='submit'>Submit</Button>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className=' mx-auto mt-8 flex items-center justify-center'>
                <Button className=' hover:text-red-400' variant='outline'>
                    Log out
                </Button>
            </div>
        </main>
    )
}

export default page
