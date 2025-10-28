import React from "react";
import "./Home.css";

window.addEventListener("scroll", e => {
  let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop; 
  let newPos = scrollTop + "px";
  document.documentElement.style.setProperty('--scrollPos', newPos);
});

function Home()
{

    return (
        <>
        <main>
            <div className="hero">
                <h1 aria-label>
                    <span>Poll</span>
                </h1>
                 </div>
                
                <div className="main">
                    

                </div>

           
        </main>

        </>
    )
}

export default Home