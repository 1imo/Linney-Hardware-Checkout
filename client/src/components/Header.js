import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UserContext from '../str/UserContext';
import classes from './Header.module.css';

function Header() {
    const navigate = useNavigate();
    const UserCtx = useContext(UserContext);
    const location = useLocation();

    const [page, setPage] = useState(1);
    // let page = 1
    const pages = ["/dashboard", "/org", "/browse", "/support", "/about"];
    console.log(location)

    

    const changePage = (switchPage) => {
        console.log(switchPage + "sp")
        setPage(switchPage)
        console.log(page + "PN")
        // page = switchPage
        navigate(pages[switchPage - 1])
    }
    // console.log(UserCtx.user.uid)

    let open = 0

    let code = []

    window.addEventListener("keypress", (e) => {
        code.push(e.key)
        if (code.join("") == "pass") {
            code = []
            
            // This was done as a dare, suggested when
            //asking friends for further functionality they'd
            //want to see in this project

            
            
            if (!open) {
                
                document.querySelector(`.secret`).style.zIndex = 1000;
                open = 1
            } else {
                
                if(open) {
                    
                document.querySelector(`.secret`).style.zIndex = -1000;
                open = 0
            }
            }
            

            
        }
    })

    let menuEngaged = false;

    const showMenu = () => {
        if (!menuEngaged) {

        }
    }


    return <div className={classes.header}>
        <div className={classes.left}>
            <div onClick={() => changePage(1)}>
                <img src={"home.svg"} alt="home" />
                {location.pathname == "/dashboard" ? <div className={classes.line}>&nbsp;</div> : <div><div className={classes.firstText}>Home</div><div className={classes.lineTwo}>&nbsp;</div></div>}
            </div>
            <div onClick={() => changePage(2)}>
                <img src={"building.svg"} alt="organisation" />
                {location.pathname == "/org" ? <div className={classes.line}>&nbsp;</div> : <div><div className={classes.firstText}>Org</div><div className={classes.lineTwo}>&nbsp;</div></div>}
            </div>
            <div onClick={() => changePage(3)}>
                <img src={"library.svg"} alt="browse" />
                {page == 3 ? <div className={classes.line}>&nbsp;</div> : <div><div className={classes.firstText}>Browse</div><div className={classes.lineTwo}>&nbsp;</div></div>}
            </div>
            <div onClick={() => changePage(4)}>
                <img src={"message-square.svg"} alt="support" />
                {page == 4 ? <div className={classes.line}>&nbsp;</div> : <div><div className={classes.firstText}>Support</div><div className={classes.lineTwo}>&nbsp;</div></div>}
            </div>
            <div onClick={() => changePage(5)}>
                <img src={"info.svg"} alt="info" />
                {page == 5 ? <div className={classes.line}>&nbsp;</div> : <div><div className={classes.firstText}>Info</div><div className={classes.lineTwo}>&nbsp;</div></div>}
            </div>
        </div>
        <div className={classes.right}>
            <div>
                <div className={classes.rightLeft}>
                    <div className={classes.rightLeftUserName}>
                        {UserCtx.user.displayName}
                    </div>
                    <div className={classes.rightLeftCompanyName}>
                        {UserCtx.userDetails ? UserCtx.userDetails.company : null}
                    </div>
                </div>
                <div className={classes.profilePhoto} onClick={() => showMenu}>
                    <img className="joke" src={`https://api.dicebear.com/5.x/identicon/svg?seed=${UserCtx.user.uid}`} alt="Profile" />
                    <img className="secret" src={"https://cdn2.f-cdn.com/contestentries/1380951/30276984/5b5c865553c89_thumb900.jpg"} style={{zIndex: -10}} />
                </div>
            </div>
        </div>
    </div>
}

export default Header;