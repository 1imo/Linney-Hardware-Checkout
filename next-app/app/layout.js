"use client"
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { signOut } from 'next-auth/react'


export default function RootLayout({ children, session }) {

  if (document) {
    document.addEventListener("keydown", (e) => {
    if (e.key == "s") {
      signOut()
    }
  })
  }

  

  
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
