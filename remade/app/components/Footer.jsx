import Link from "next/link"

export default function Footer() {
    return <section>
        <div>
           <div>
            <div>Content Management System</div>
                <div>
                   <div>By timCo</div>
                   <div>timHoy05@gmail.com</div>
                </div>
            </div>
            <div>
                <Link href="#">Home</Link>
                <Link href="#">Sign Up</Link>
                <Link href="#">Sign In</Link>
                <Link href="#">Support</Link>
            </div> 
        </div>

        <div>
            All Rights Reserved timCoⓒ
        </div>
        
    </section>
}