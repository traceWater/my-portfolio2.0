import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Dale{' '}
              <span role="img" aria-label="lightning">
                
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                
              </span>{' '}
              I develope front-end software specializing in React.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                
              </span>{' '}
              I work with  JavaScript, React and Node-js, amonge other langages.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                🎸
                </span>{' '}
                I like
              </p>
              <Typewriter
                options={{
                  strings: [
                    'VR technologies',
                    'solving problems',
                    'teamwork',
                    'playing guitar',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              Since 2017, I have endevered to advance in coding
              technologies. I have worked with brillant minds{' '}
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                good people
              </Link>
               , we never forget{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects- 
              </Link>
                that link our lives.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  // d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Fresno, Oakland, San Francisco</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
