import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-screen h-16 bg-slate-700 flex sticky z-100 px-4 items-center flex-row-reverse">
      <a
        href="https://github.com/sleepyhaha"
        className="ml-7 opacity-70 hover:opacity-100 hover:scale-125 ease-in duration-150"
      >
        <FontAwesomeIcon icon={faGithub} size="2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/song-sam/"
        className="ml-7 opacity-70 hover:opacity-100 hover:scale-125 ease-in duration-150"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </a>
      <a href="https://stackoverflow.com/users/22735040/sam">
        <FontAwesomeIcon
          icon={faStackOverflow}
          size="2xl"
          className="opacity-70 hover:opacity-100 hover:scale-125 ease-in duration-150"
        />
      </a>
    </footer>
  );
}
