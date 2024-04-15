import { Roboto, Square_Peg, Quicksand } from 'next/font/google'

export const robotoFont = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export const quicksandFont = Quicksand({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-quicksand',
});