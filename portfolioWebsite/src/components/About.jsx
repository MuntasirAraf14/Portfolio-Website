
const aboutItems = [
  {
    label: 'Project done',
    number: 15
  },
  {
    label: 'Years of experience',
    number: 2
  }
];
const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800 p-7 rounded-2xl shadow-lg flex flex-col gap-6 md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
                    Hello! I&apos;m Araf, a recent Computer Science graduate, passionate about building user-centric web applications. I have hands-on experience with Full-stack development, UI/UX design, and mobile application development. I&apos;m always eager to learn new technologies and I'm eager to apply my skills to solve real-world problems.

                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                    {aboutItems.map(({ label, number }, key) => (
                        <div className="" key={key}>
                            <div className="flex items-center md:mb-2">
                               
                               <span className="text-2xl font-bold md:text-4xl">{number}</span>
                               <span className="text-zinc-400 font-extrabold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-300">{label}</p>
                        </div>
                    ))}

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About; 
