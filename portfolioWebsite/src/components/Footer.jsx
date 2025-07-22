
import PropTypes from "prop-types";
import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/MuntasirAraf14'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-muntasir-azad-8496ba279/'
  },
 
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1Lpwqu9CNX/?mibextid=wwXIfr'
  },

];

const Footer = () => {
  return (
     <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2 ">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                        Always open to new opportunities and connections!
                    </h2>
                        
                </div>


                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 text-2xl font-bold">
                            Sitemap
                        </p>
                        <ul>
                            {sitemap.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 hover:text-white transition-colors duration-150 ease-in-out">
                                        {label}
                                    </a>    
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 text-2xl font-bold">
                            Socials
                        </p>
                        <ul>
                            {socials.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 hover:text-white transition-colors duration-150 ease-in-out">
                                        {label}
                                    </a>    
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
            <div className="py-3">
            <div className="mb-8 flex items-center justify-between pt-10 border-t border-zinc-800 ">
              
                <a href="/" className="">
                    <img src="/images/unnamed_1.jpg" width={40} height={40} alt="Logo" className="" />
                </a>

                <p className="text-sm text-zinc-400">
                    &copy; {new Date().getFullYear()} MdMuntasirAzad. All rights reserved.
                </p>
            </div>
            </div>
        </div>
     </footer>
  )
}

export default Footer