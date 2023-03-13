import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <main>
    <div>
      <div>Logo</div>
      <div>
        <div>Sign Up</div>
        Sign In
      </div>
    </div>

    <div>
      <h1>The <span><span>All</span>-<span>In</span>-<span>One</span></span> Tool</h1>
      <h2>A Content Management System From timCo</h2>
    </div>
    
  </main>
}
