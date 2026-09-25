import { useEffect, useRef, useState } from 'react'

/**
 * Devuelve [ref, visible]. "visible" pasa a true cuando el elemento
 * entra en pantalla; se usa para animaciones suaves de aparición.
 */
export function useReveal(options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, visible]
}
