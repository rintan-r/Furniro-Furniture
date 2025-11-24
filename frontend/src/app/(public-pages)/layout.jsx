import '@/styles/globals.css'
import Providers from '@/providers/Providers'
import MainLayout from '@/components/layout/MainLayout'

export const metadata = {
  title: 'Furniro - Furniture E-commerce',
  description:
    'Furniro is a furniture e-commerce website built with Next.js and Redux Toolkit.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}
