"use client"
import "./styles.scss"
import { ChevronUpIcon } from 'lucide-react'
import { LegacyRef, useEffect, useRef } from 'react'

const ScrollUp = () => {
    const ref = useRef<HTMLButtonElement>()
    useEffect(() => {
        const scrollUp = document.querySelector('.scroll-up')
        const onScroll = () => {
            if (window.scrollY > 400) {
                scrollUp?.classList.add('show')
            } else {
                scrollUp?.classList.remove('show')
            }
        }

        window.addEventListener('scroll', onScroll)
        window.addEventListener('load', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('load', onScroll)
        }
    }, [])

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <button onClick={onClick} ref={ref as LegacyRef<HTMLButtonElement>} type="button" className="scroll-up">
            <ChevronUpIcon />
        </button>
    )
}

export default ScrollUp