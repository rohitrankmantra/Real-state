import { useEffect, useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, margin: "-100px", ...options })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return { ref, controls, inView }
}
