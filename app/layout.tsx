import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/Theme/ThemeProvider'
import StoreProvider from '@/components/StoreProvider/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'DogDB',
    description: 'Next.js DogDB app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-background`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                    themes={['light', 'dark']}
                >
                    <StoreProvider>{children}</StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
