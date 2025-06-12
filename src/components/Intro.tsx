function Intro() {
    return (
        <section className="w-full bg-[#100c1c] text-purple-400">
          <div className="flex items-center justify-center flex-col text-center min-h-[60vh] pt-20 pb-6 px-4">
            <h1 className="text-4xl md:text-7xl font-bold font-mono mb-3"> &lt;Amanda Longhenry/&gt;</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
              I have a{' '}
              <a
                href="https://www.linkedin.com/in/amanda-longhenry/"
                target="_blank"
                className="text-pink-300 hover:underline underline-offset-2 decoration-2"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>{' '}
              and a{' '}
              <a
                href="https://github.com/manalonghenry"
                target="_blank"
                className="text-pink-300 hover:underline underline-offset-2 decoration-2"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </p>
          </div>
        </section>
      );   
  }
  
  export default Intro;