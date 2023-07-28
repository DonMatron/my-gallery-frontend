import InstagramIcon from '../Images/instagram.png';
import TelegramIcon from '../Images/telegram.png';
import './Header.css';

function Header() {
  return (
    <div className="container-liquid">
      <div className="Header row">

        <div className='d-flex justify-content-center col my-auto'>
          Danylo Prudkyi
        </div>

        <div className='col-auto my-auto'>
          <img src={InstagramIcon} className="Icon" alt="InstagramIcon" />
          <img src={TelegramIcon} className="Icon" alt="TelegramIcon" />
        </div>

      </div>
    </div>
  );
}

export default Header;