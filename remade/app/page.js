import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <main>
    <section>
      <div>
        <div>timCo</div>
        <div>
          <div>Sign Up</div>
          <div>Sign In</div>
        </div>
      </div>

      <div>
        <iframe title="Discobolus Low Poly Stylized"
          frameborder="0" allowfullscreen mozallowfullscreen="true"
          webkitallowfullscreen="true" allow="autoplay; fullscreen; 
          xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport
          execution-while-not-rendered web-share
          src="https://sketchfab.com/models/0fbcb0b00e5946d3a9a57169d34030de/embed">
        </iframe>
        </div>
          

    </section>
    <Footer />
  </main>
}
