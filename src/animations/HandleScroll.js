import { useState, useEffect } from "react";

const isWindowAvailable = typeof window !== "undefined"

const getPosition = () => isWindowAvailable ? window.pageYOffset : ""

const WindowScrollPosition = () =>{
   
    const [scrollPosition, setScrollPosition] = useState (getPosition())

    useEffect(() => {
        if(!isWindowAvailable) { return false }

        const handleScroll = () => { setScrollPosition (getPosition())}
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
        
    }, [])

    return scrollPosition
}


export default WindowScrollPosition