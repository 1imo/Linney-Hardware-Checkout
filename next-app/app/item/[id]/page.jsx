"use client"
import DesktopNav from "@/components/DesktopNav"
import classes from "../../page.module.css"
import Image from "next/image"

export default function ProductPage({ params }) {
    
    const {id} = params
    return <main className={classes.page}>
    <div className={classes.feature}>
        CMS
    </div>
    <section>
        <DesktopNav />
            <section className={classes.productPage}>
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
                <div className={classes.productPageText}>
                    <div>
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed eleifend urna,
                            in pulvinar justo. Nulla mollis, nibh sed maximus volutpat, metus magna pulvinar enim,
                            sit amet vehicula sapien dui sit amet ex. Nunc sollicitudin mi sit amet urna iaculis euismod.
                            Sed vitae iaculis urna. Nulla a lobortis orci. Integer dignissim felis at orci tempor sagittis.</p>
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

            </section>
        </section>
        </main>
}