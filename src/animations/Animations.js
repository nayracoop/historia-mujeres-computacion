import { useEffect, useRef } from "react";

export const useElementInertialParallax = (callback, parallaxElement, k = 0.05) => {
  
    const parallaxElementY = useRef(0)
    const parallaxElementNextY = useRef(0)
    const timer = useRef(null)

    function update() {
        if(parallaxElement && parallaxElement.current) {
        const { top, bottom } = parallaxElement.current.getBoundingClientRect()
        const elementHeight = bottom - top
        const visibleAreaHeight = window.innerHeight + elementHeight
        parallaxElementNextY.current = Math.min(1, Math.max(0, (visibleAreaHeight - bottom) / visibleAreaHeight))
        parallaxElementY.current += (parallaxElementNextY.current - parallaxElementY.current) * k
        callback(1 - parallaxElementY.current)
        }
        timer.current = requestAnimationFrame(update)
    }

    useEffect(() => {
        if(!parallaxElementY.current) parallaxElementY.current = 0
        timer.current = requestAnimationFrame(update)
        return () => cancelAnimationFrame(timer.current)
    }, [parallaxElement])
}
