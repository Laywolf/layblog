import { useState, useEffect } from 'react'

interface Position {
  clientX: number
  clientY: number
}
const useMousePosition = (): Position => {
  const [position, setPosition] = useState<Position>({
    clientX: 0,
    clientY: 0,
  })

  const updatePosition = (event: MouseEvent): void => {
    const { clientX, clientY } = event

    setPosition({
      clientX,
      clientY,
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, false)
    document.addEventListener('mouseenter', updatePosition, false)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', updatePosition)
    }
  }, [])

  return position
}

export default useMousePosition
