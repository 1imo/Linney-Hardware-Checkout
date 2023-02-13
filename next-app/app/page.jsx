"use client"

import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from './page.module.css'

const poppins = Poppins({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section>
        <div>
          hi
        </div>
      </section>
    </main>
  )
}
