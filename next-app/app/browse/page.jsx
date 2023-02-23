"use client"

import DesktopNav from "@/components/DesktopNav"
import classes from "../page.module.css"
import { useState, useRef } from "react"
import DiscoverItemCrd from "@/components/DiscoverItemCrd"

export default function Browse() {

    const searchTerm = useRef()

    const content = [
        <div onMouseEnter={() => setSearchComponent(content[1])}><img src="/search-white.svg" /> Search</div>,
        <input type="text" placeholder={"GGG"} ref={searchTerm} onMouseLeave={() => searchTerm.current.value ? null : setSearchComponent(content[0])}/>
    ]

    const [searchComponent, setSearchComponent] = useState(content[0])
    return <main className={classes.page}>
    <div className={classes.feature}>
        CMS
    </div>
    <section style={window.innerHeight < 900 ? {flexDirection: "column"} : {flexDirection: "row"}}>
        <DesktopNav />
            <section className={classes.discoverPage} style={window.innerHeight < 900 ? { margin: "0 40px", width: "calc(100vw - 80px)", height: `calc(${window.innerHeight}px - 120px)` } : { margin: "40px calc(100vw / 24) 40px", height: "calc(100vh - 80px)" }}>
                
                    <div className={classes.searchBar}>
                        <div className={classes.search}>
                            {searchComponent}
                        </div>
                    <div className={classes.filter}>
                        <img src="/filter.svg" />
                            Filters
                        </div>
                    </div>
                
                <div className={classes.content}>
                    <h2>Discover</h2>
                    <div>
                        <DiscoverItemCrd />
                        <DiscoverItemCrd />
                        <DiscoverItemCrd />
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                        <DiscoverItemCrd /> 
                    </div>
                    
                </div>
            </section>
        </section>
        </main>
}