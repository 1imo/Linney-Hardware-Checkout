"use client"
import DesktopNav from "@/components/DesktopNav"
import classes from "../../page.module.css"
import Image from "next/image"

export default function ProductPage({ params }) {
    
    const { id } = params
    console.log(window.innerHeight)
    return <main className={classes.page}>
    <div className={classes.feature}>
        CMS
    </div>
    <section style={window.innerHeight < 900 ? {flexDirection: "column"} : {flexDirection: "row"}}>
        <DesktopNav />
            <section className={classes.productPage} style={window.innerHeight < 900 ? { margin: "0 40px", width: "calc(100vw - 80px)", height: `calc(${window.innerHeight}px - 120px)` } : { margin: "40px calc(100vw / 24) 40px", height: "calc(100vh - 80px)" }}>

           
            <div className={classes.productPageText} style={window.innerHeight < 900 ? {columnGap: 20, padding: "20px 20px 0"} : {columnGap: 40, padding: "40px 20px 20px"}}>
                    <div>
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed eleifend urna,
                            in pulvinar justo. Nulla mollis, nibh sed maximus volutpat, metus magna pulvinar enim,
                            sit amet vehicula sapien dui sit amet ex. Nunc sollicitudin mi sit amet urna iaculis euismod.
                            Sed vitae iaculis urna. Nulla a lobortis orci. Integer dignissim felis at orci tempor sagittis.
                        </p>
                    </div>
                    <div>
                        <h2>Options</h2>
                        <div className={classes.productPageCTA}>
                            <div>
                                <select name="Qty" id="" value="Qty">
                                    <option value="1">Qty</option>
                                </select>
                                <button>Add To Basket</button>
                            </div>
                            <button>Checkout Now</button>
                        </div>
                    </div>
                </div>
                <div className={classes.productPageImage}>
                    <img src={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwZGFya3xlbnwwfHwwfHw%3D&w=1000&q=80"} />
                    <div>
                        <h1>MacBook Pro M1</h1>
                        <div>
                            <img src="/star-full.svg"/>
                            <img src="/star-full.svg"/>
                            <img src="/star-full.svg"/>
                            <img src="/star-full.svg"/>
                            <img src="/star-empty.svg"/>
                        </div>
                    </div>
                </div>
                

            </section>
        </section>
        </main>
}