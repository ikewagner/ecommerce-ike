import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="py-4 flex justify-center font-primary items-center">
      Criado com <FontAwesomeIcon icon={faHeart} className="w-5 text-red-600 mx-1" /> por{' '}
      <a
        href="https://www.linkedin.com/in/henrique-wagner-061515137/"
        target="_blank"
        rel="noreferrer"
        className="text-palette-primary font-bold px-1"
      >
        Henrique Wagner
        </a>
    </footer>
  )
}

export default Footer