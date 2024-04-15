import './globals.css'
import { robotoFont, squarePegFont, quicksandFont } from '@/utils/fonts';
import Navigation from '../components/navigation/navigationMobile/navigationMobile';
import { BasketContextProvider } from '@/context/basket';

export const metadata = {
  title: 'FOODERA',
  description: 'Homepage for foodera.dk',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${quicksandFont.className} ${robotoFont.variable}`}>
      <BasketContextProvider>{children}</BasketContextProvider>
      </body>

    </html>
  )
}
