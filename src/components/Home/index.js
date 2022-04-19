import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'D','a', 'n', 'i', 'e', 'l', 'e','!']
  const jobArray = [
    'A',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Hi,</span>
            <span className={`${letterClass} _12`}>&nbsp;</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2 id="text"></h2>
          <script src="app.js"></script>
        </div>
        <Logo/>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
