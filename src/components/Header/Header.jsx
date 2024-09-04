import "./Header.css";
import headerImage from "../../assets/images/header/header.webp";
import "./HeaderJS";

const Header = () => {
  return (
    <>
      {/* Header */}
      <div id="header">
        {/* Header content */}
        <div className="header-content">
          <div className="header-desc">
            <span>IT sohasiga eng oson yol</span>
            <h1>Frontend dasturchi kasbi</h1>
            <a href="#contacts" className="btn">
              Chegirmani bron qilish
            </a>
          </div>
          <div className="header-img">
            <img src={headerImage} />
          </div>
        </div>
        {/* Header info */}
        <div className="header-info">
          <div className="header-item">
            <h3>Yangi boshlovchilar uchun mos</h3>
            <p>Dasturlash tajribasisiz</p>
          </div>
          <div className="header-item">
            <h3>Yordam</h3>
            <p>Ishga joylashishda</p>
          </div>
          <div className="header-item">
            <h3>11 tagacha loyiha</h3>
            <p>GitHubdagi portifolioda</p>
          </div>
          <div className="header-item">
            <h3>-40%</h3>
            <p>Chegirma amal qiladi</p>
            <span id="countdown">2kun 17:05:01</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
