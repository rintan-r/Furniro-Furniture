import '@/src/styles/globals.css'
import Providers from '@/src/providers/Providers'
import MainLayout from '@/src/components/layout/MainLayout'

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
