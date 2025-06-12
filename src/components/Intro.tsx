import { TypeAnimation } from 'react-type-animation';

function Intro() {
    return (
        <section className="text-purple-300 pt-20 pb-10 px-4 min-h-[60vh] flex flex-col items-center justify-center bg-[#100c1c]">
          <TypeAnimation
            sequence={[
              '<Amanda Longhenry />',
              1000,
            ]}
            wrapper="h1"
            speed={60}
            className="text-4xl md:text-7xl font-bold font-mono mb-3"
            repeat={0}
          />
    
          <p className="text-base md:text-xl font-medium mb-3">
            Software Engineer
          </p>
    
          <p className="text-sm max-w-xl mb-6 font-bold">
            I have a{' '}
            <a
              href="https://www.linkedin.com/in/amanda-longhenry/"
              target="_blank"
              className="text-pink-200 hover:underline underline-offset-2 decoration-2"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>{' '}
            and a{' '}
            <a
              href="https://github.com/manalonghenry"
              target="_blank"
              className="text-pink-200 hover:underline underline-offset-2 decoration-2"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </p>
        </section>
      );  
  }
  
  export default Intro;