"use client"
import { useRef } from 'react'


export default function Register() {
    const userName = useRef()
    const pass = useRef()


    return <main>
        <div>
            <input type="text" placeholder="Username:" ref={userName} />
            <input type="password" placeholder="Password:" ref={pass} />
            <button>Register</button>
        </div>
    </main>
}