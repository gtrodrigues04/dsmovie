import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'


export default function Navbar() {
  return (<header>
    <nav className="container">
      <div className="dsmovie-nav-content">
        <h1>DSMovie</h1>
        <a href="http://github.com/gtrodrigues04">
          <div className='dsmovie-contact-container'>
            <GithubIcon />
            <p className='dsmovie-contact-link'>/gtrodrigues04</p>
          </div>
        </a>
      </div>
    </nav>
  </header>
  );
}