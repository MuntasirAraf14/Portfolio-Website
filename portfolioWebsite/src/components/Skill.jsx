
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/react_native.jpg',
    label: 'React Native',
    desc: 'Mobile App'
  },
  {
    imgSrc: '/images/Python.svg.png',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/vscode.jpg',
    label: 'VS Code',
    desc: 'Code Editor'
  },
    
];  
const Skill = () => {
  return (
      <section className="section">
        <div className="container">
            <h2 className="headline-2 xl reveal-up">
                Essentials Tools I Use
            </h2>
            <p className="text-zinc-400 text-center mt-3 mb-8 p-8 text-2xl max-w-[80ch] mx-auto">Here are some of the essential tools I use in my development workflow. Each tool plays a crucial role in different aspects of the development process, from design to deployment.</p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {skillItem.map(({ imgSrc, label, desc }, key) => (
                   <SkillCard
                      imgSrc={imgSrc}
                      label={label}
                      desc={desc}
                      key={key}
                      classes="reveal-up"
                   />
                ))}
            </div>
        </div>
      </section>
  )
}

export default Skill