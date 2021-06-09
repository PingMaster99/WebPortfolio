import React from 'react'
import './App.css'
import MainTitle from '../main-title'
import CommandWindow from '../command_window'
import rocket from '../../assets/rocketLeague.png'
import volleyball from '../../assets/volleyball.png'
import chess from '../../assets/chess.gif'
import ContactWindow from '../contact-window'

// Special thanks to https://www.ascii-art-generator.org/

// Matrix inspiration from: https://codepen.io/yaclive/pen/EayLYO
window.scrollTo(0, 1)
function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  columns = canvas.width / fontSize
  drops = []
  for (let i = 0; i < columns; i += 1) {
    drops[i] = 1
  }
}

window.addEventListener('resize', resizeCanvas)

let canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let binary = '0100100001100101011011000110110001101111001011000010000001110111011001010110110001100011011011110110110101100101001000000111010001101111001000000110110101111001001000000111000001101111011100100111010001100110011011110110110001101001011011110010000100100001'
binary = binary.split('')

let fontSize = 10; let
  columns = canvas.width / fontSize

// Setting up the drops
let drops = []
for (let i = 0; i < columns; i += 1) {
  drops[i] = 1
}

// Setting up the draw function
function draw() {
  context.fillStyle = 'rgba(0, 0, 0, .1)'
  context.fillRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < drops.length; i += 1) {
    const text = binary[Math.floor(Math.random() * binary.length)]
    context.fillStyle = '#00E602'
    context.fillText(text, i * fontSize, drops[i] * fontSize)
    drops[i] += 1
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0
    }
  }
}

// Loop the animation
setInterval(draw, 33)

window.addEventListener('scroll', revealCommands)

function revealCommands() {
  const reveals = document.querySelectorAll('.command-window')
  for (let i = 0; i < reveals.length; i += 1) {
    const windowHeight = window.innerHeight
    const revealThreshold = reveals[i].getBoundingClientRect().top
    const revealPoint = 150

    if (revealThreshold < windowHeight - revealPoint) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

const App = () => (
  <div className="app">
    <MainTitle text="Pablo Ruiz" />
    <h4>Scroll down to start this adventure!</h4>
    <div className="command-window-container">
      <CommandWindow id="hello-world" title="Hello World!" text="Greetings, internet traveler. Welcome to my portfolio!" />
      <CommandWindow id="command-windows" title="Command Windows" text="You can drag command windows around and close them with the X button." />
      <CommandWindow id="rocket" title="This is Rocket League!" text="Remember: never break rule 1." image={rocket} />
      <CommandWindow id="experience" title="Technologies I've Used" text={'* CSS\n* Node\n* Yarn\n* Java\n * React\n* EsLint\n* Python\n* Webpack\n * MongoDB\n* Express\n* Firebase\n* Javascript\n* TensorFlow\n* PostgreSQL\n\nAnd many more...'} />
      <CommandWindow id="liked-things" title="Things I Like" text={'You\'ll find a lot of easter eggs about things I like on this website, hope you enjoy them!'} />
      <CommandWindow id="chess" title="Italian Opening" text="1. e4?" image={chess} />
      <CommandWindow id="projects" title="Some projects I've Made" text={'* AI game player\n* Tutoring app\n* Online attendance app\n* Labrynth with CSS animations\n* JS chat\n* Online calculator\n* Enter the TBA video game\n* Raytracing image compositions\n* Music app'} />
      <CommandWindow id="skills" title="Other Skills" text="I also know a thing or two about digital illustration, social media marketing and growth, 3D modelling, and CAD design :)" />
      <CommandWindow id="volleyball" title="Volleyball is Fun" text="Rolling thunder!!! (shouthout to all of you who have seen Haikyuu ;))" image={volleyball} />
      <ContactWindow id="collab" title="Let's Do Something Together!" text="You can also contact me at pabloruizonline@gmail.com" />
    </div>
  </div>
)

export default App
