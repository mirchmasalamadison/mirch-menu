import { Inter, Roboto,Abril_Fatface,Poppins } from 'next/font/google'
import './globals.css'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--pop',
  weight: ['100', '200','300', '400', '500', '700', '900'],
  style:['normal','italic']
});

const inter = Inter({ subsets: ['latin'] })

const abril = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
})


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})
 

export const metadata = {
  title: 'Mirch Masala',
  description: 'Award winning Indian restaurant located in Madison, WI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
