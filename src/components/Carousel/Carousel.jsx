import "./Carousel.css";
import "./CarouselJS";
import carouselImg1 from "../../assets/images/carusel/img-1.jpg";
import carouselImg2 from "../../assets/images/carusel/img-2.jpg";
import carouselImg3 from "../../assets/images/carusel/img-3.jpg";
import carouselImg4 from "../../assets/images/carusel/img-4.jpg";
import carouselImg5 from "../../assets/images/carusel/img-5.jpg";
import carouselImg6 from "../../assets/images/carusel/img-6.jpg";

const Carousel = () => {
  return (
    <>
      {/* Carousel */}
      <div id="carousel">
        <h2 className="carousel-title">
          Kurs spikerlari hatto murakkab mavzularni ham tushunarli qilib
          tushuntirib beradilar.
        </h2>
        <div className="slider">
          <div className="wrapper">
            <i id="left" className="bx bx-chevron-left"></i>
            <ul className="carousel">
              <li className="card">
                <div className="img">
                  <img src={carouselImg1} alt="img" draggable="false" />
                </div>
                <h2>Toshpo'latov Alimardon</h2>
                <span>Frontend Dasturchi</span>
              </li>
              <li className="card">
                <div className="img">
                  <img src={carouselImg2} alt="img" draggable="false" />
                </div>
                <h2>Blanche Pearson</h2>
                <span>Sales Manager</span>
              </li>
              <li className="card">
                <div className="img">
                  <img src={carouselImg3} alt="img" draggable="false" />
                </div>
                <h2>Baxodir Ramazonov</h2>
                <span>Backend Dasturchi</span>
              </li>
              <li className="card">
                <div className="img">
                  <img src={carouselImg4} alt="img" draggable="false" />
                </div>
                <h2>Blanche Pearson</h2>
                <span>Sales Manager</span>
              </li>
              <li className="card">
                <div className="img">
                  <img src={carouselImg5} alt="img" draggable="false" />
                </div>
                <h2>Blanche Pearson</h2>
                <span>Sales Manager</span>
              </li>
              <li className="card">
                <div className="img">
                  <img src={carouselImg6} alt="img" draggable="false" />
                </div>
                <h2>Blanche Pearson</h2>
                <span>Sales Manager</span>
              </li>
            </ul>
            <i id="right" className="bx bx-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
