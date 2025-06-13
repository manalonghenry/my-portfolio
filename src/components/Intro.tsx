import { TypeAnimation } from 'react-type-animation';

function Intro() {
  return (
    <section className="bg-[#0f0529] text-purple-300 px-6 py-20 mb-55 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Animated name and job title */}
        <div className="text-center md:text-left md:min-w-[14rem] md:flex-1">
          {/* First Name */}
          <TypeAnimation
            sequence={['<Amanda', 1000]}
            wrapper="h1"
            speed={50}
            className="text-4xl md:text-7xl font-bold font-mono leading-tight"
            cursor={false}
            repeat={0}
          />

          {/* Last Name */}
          <TypeAnimation
            sequence={[1200, 'Longhenry/>']}
            wrapper="h1"
            speed={60}
            className="text-5xl md:text-7xl font-bold font-mono leading-tight"
            repeat={0}
          />

          <p className="text-base md:text-2xl font-medium mt-4 text-white">
            Software Engineer
          </p>
          {/* Bio below*/}
          <p className="text-m max-w-xl mt-4 font-bold">
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
        </div>

        {/* Static profile image */}
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img
            src="dist\\assets\\highland-cow.png"
            alt="Amanda Longhenry"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
  
  export default Intro;