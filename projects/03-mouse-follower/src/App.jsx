import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

 // We leave the circle hidden by default
  const circle = enabled ? 'circle show-circle' : 'circle'
      
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    console.log(circle)

    //cleaneup of component
    // --> when the component is disassembled
    // --> when dependencies change, before executing the effect again
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  return (
    <main>
      <div className={circle}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
