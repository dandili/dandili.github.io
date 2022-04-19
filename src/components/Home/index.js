import { useEffect, useState } from 'react'
import Loader from "react-loaders";
import { Typewriter } from 'react-simple-typewriter'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import * as THREE from 'three';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'D','a', 'n', 'i', 'e', 'l', 'e','!']

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
            A
            <span style={{ color: '#4d88f3', fontSize: '56px'}}>
              <Typewriter
                loop={50}
                cursor
                cursorStyle='_'
                delaySpeed={2000}
                words={[' Web Developer', ' Software Developer', ' Problem Solver']}>
              </Typewriter>
            </span>
          </h1>
        </div>
        <Logo/>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
