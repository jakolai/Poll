import React from "react";
import "./Footer.css"



function Footer()
{
    return(
    
       <>
       <footer>
        <p>&copy; {new Date().getFullYear()} Poll. All rights reserved.</p>
       </footer>
       </>
    )
}

export default Footer;