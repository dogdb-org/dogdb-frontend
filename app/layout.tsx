import type { Metadata } from 'next'
import { Inter, League_Spartan, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/Theme/ThemeProvider'
import StoreProvider from '@/components/StoreProvider/StoreProvider'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const league_spartan = League_Spartan({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-league-spartan',
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-plus-jakarta-sans',
})

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
        <html
            lang='en'
            suppressHydrationWarning
            className={`${inter.variable} ${league_spartan.variable} ${plus_jakarta_sans.variable}`}
        >
            <body className='overflow-y-scroll'>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                    themes={['light', 'dark']}
                >
                    <StoreProvider>
                        <Header />
                        <Hero />
                        {children}
                    </StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
