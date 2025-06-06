
const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];
const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800 p-7 rounded-2xl shadow-lg flex flex-col gap-6 md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
                    Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.

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

                    <img
                    src="../images/logo.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="ml-auto md:w-[40px] md:h-[40px]"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About; 
