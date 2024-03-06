import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/Theme/ThemeProvider'
import StoreProvider from '@/components/StoreProvider/StoreProvider'
import Header from '@/components/Header/Header'

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
        <html lang='en' suppressHydrationWarning>
            <body className={`${inter.className} bg-background`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                    themes={['light', 'dark']}
                >
                    <StoreProvider>
                        <Header />
                        {children}
                    </StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
