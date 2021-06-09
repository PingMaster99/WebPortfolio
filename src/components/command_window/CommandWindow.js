import React, { useState, useEffect, useRef } from 'react'
import './CommandWindow.css'

// Reference for window translate (answer by codewithfeeling) https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable

const CommandWindow = ({
  id, title, image = null, text,
}) => {
  const [pressed, setPressed] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [zIndex, setIndex] = useState(3)
  const [hasIndex, setHasIndex] = useState(false)
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
      ref.current.style.zIndex = zIndex
    }
  }, [position])

  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      })

      if (!hasIndex) {
        const openWindows = document.querySelectorAll('.command-window')
        const indexes = [0]

        openWindows.forEach((window) => {
          indexes.push(parseInt(window.style.zIndex, 10))

          const maxIndex = Math.max(...indexes)
          setIndex(maxIndex + 1)
        })

        setHasIndex(true)
      }
    }
  }

  const onMouseLeave = () => {
    setHasIndex(false)
    setPressed(false)
  }

  function destroyWindow() {
    ref.current.remove()
  }

  if (image !== null) {
    return (

      <div id={id} className="command-window" onMouseLeave={onMouseLeave} onMouseDown={() => setPressed(true)} onMouseMove={onMouseMove} ref={ref} onMouseUp={() => setPressed(false)}>
        <div className="command-header">
          <h2 className="command-title">
            C:/
            {title}
          </h2>
          <button type="button" className="command-close" onClick={destroyWindow}>&times;</button>
        </div>
        <div className="command-content">
          <img alt="Command window ascii art" src={image} />
          <p className="command-text">
            {text}
          </p>
        </div>
      </div>
    )
  }
  return (

    <div id={id} className="command-window" onMouseLeave={onMouseLeave} onMouseDown={() => setPressed(true)} onMouseMove={onMouseMove} ref={ref} onMouseUp={() => setPressed(false)}>
      <div className="command-header">
        <h2 className="command-title">
          C:/
          {title}
        </h2>
        <button type="button" className="command-close" onClick={destroyWindow}>&times;</button>
      </div>
      <div className="command-content">
        <p className="command-text">
          {text}
        </p>
      </div>
    </div>
  )
}

export default CommandWindow
