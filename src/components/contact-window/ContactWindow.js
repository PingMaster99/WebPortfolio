import React, { useState, useEffect, useRef } from 'react'
import './ContactWindow.css'

// Reference for window translate (answer by codewithfeeling) https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable

const ContactWindow = ({
  id, title, text,
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

  function sendMail() {
    window.location.href = 'mailto:pabloruizonline@gmail.com'
  }

  return (

    <div id={id} className="command-window contact" onMouseLeave={onMouseLeave} onMouseDown={() => setPressed(true)} onMouseMove={onMouseMove} ref={ref} onMouseUp={() => setPressed(false)}>
      <div className="command-header contact-header">
        <h2 className="command-title">
          C:/
          {title}
        </h2>
        <button type="button" className="command-close" onClick={destroyWindow}>&times;</button>
      </div>
      <div className="command-content">
        <button type="button" className="contact-button" onClick={sendMail}>Press me!</button>
        <p className="contact-text">
          {text}
        </p>
      </div>
    </div>
  )
}

export default ContactWindow
