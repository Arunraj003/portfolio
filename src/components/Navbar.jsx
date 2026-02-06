import logo from '../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href="https://www.linkedin.com/in/arunraj003/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://github.com/Arunraj003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar