function About() {
    return (
      <section
        id="about"
        className="scroll-mt-24 bg-[#0f0529] text-purple-300 px-6 md:px-12 lg:px-24 py-20 pb-100"
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* LEFT: Paragraph text */}
          <div className="md:flex-1 text-left md:ml-12">
            <h2 className="text-5xl font-mono font-bold mb-10">about me</h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl text-white">
              I'm a passionate software engineer who loves building elegant, human-focused applications.
              I have experience with full-stack development, enjoy working on both team and solo projects,
              and thrive when turning ideas into reality through code. In my free time, I enjoy learning
              new frameworks, exploring creative tech, and contributing to open-source.
            </p>
          </div>
  
          {/* RIGHT: secondary image */}
          <div className="w-52 h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
            <img
              src="dist\\assets\\horse.webp"
              alt="Amanda coding or another photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default About;