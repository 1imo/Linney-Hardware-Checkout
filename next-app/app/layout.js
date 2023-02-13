import './globals.css'

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <SessionProvider session={session}>
        <body>{children}</body>
      </SessionProvider>
    </html>
  )
}
