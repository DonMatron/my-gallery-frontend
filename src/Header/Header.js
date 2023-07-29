import InstagramIcon from '../Images/instagram.png';
import TelegramIcon from '../Images/telegram.png';
import './Header.css';

function Header() {
  return (
    <div className="container-fluid">
      <div className="Header row">

        <div className='d-flex justify-content-center col my-auto'>
          Danylo Prudkyi
        </div>

        <div className='col-auto my-auto'>
          <a href='https://www.instagram.com/danyloprudkyi/' target="_blank">
            <img src={InstagramIcon} className="Icon" alt="InstagramIcon" />
          </a>
          <a href='https://t.me/DanyloPrudkyiGallery' target="_blank">
            <img src={TelegramIcon} className="Icon" alt="TelegramIcon" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Header;