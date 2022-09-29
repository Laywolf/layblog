import { useState, useEffect } from 'react'

interface Position {
  pageX: number
  pageY: number
}
const useMousePosition = (): Position => {
  const [position, setPosition] = useState<Position>({
    pageX: 0,
    pageY: 0,
  })

  const updatePosition = (event: MouseEvent): void => {
    const { pageX, pageY } = event

    setPosition({
      pageX,
      pageY,
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
