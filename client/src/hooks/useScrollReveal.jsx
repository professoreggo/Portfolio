import { useEffect, useRef } from 'react'

function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal--visible')
          // Once revealed, stop observing — no need to re-trigger
          observer.unobserve(element)
        }
      },
      {
        threshold: options.threshold || 0.25 ,
        rootMargin: options.rootMargin || '0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

export default useScrollReveal