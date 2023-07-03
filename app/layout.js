import './globals.css'


export const metadata = {
  title: 'Admin Sotufab',
  description: 'Add products you want',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>{children}</body>
    </html>
  )
}
