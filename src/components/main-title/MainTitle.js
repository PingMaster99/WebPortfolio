import React, { useRef, useEffect } from 'react'
import './MainTitle.css'

const MainTitle = ({ text }) => {
  useEffect(() => {
    typeWriter()
  })

  const ref = useRef()
  let i = 0
  const speed = 80

  function typeWriter() {
    if (!text) {
      return
    }
    if (i < text.length) {
      ref.current.innerHTML += text.charAt(i)
      i += 1
      setTimeout(typeWriter, speed)
    }
  }

  return (
    <div className="main-title">
      <h1 className="title" ref={ref}> </h1>
    </div>
  )
}

export default MainTitle
