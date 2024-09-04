import "./About.css";
import aboutImage from "../../assets/images/about/about.webp";

const About = () => {
  return (
    <>
      {/* About */}
      <div className="container">
        <div id="about">
          <div className="about-info">
            <h2>
              Frontend dasturchilar har kuni foydalanadigan saytlarni
              yaratadilar.
            </h2>
            <p>
              Onlayn xizmatlar har bir biznesga kerak, shuning uchun frontend
              dasturchilar mehnat bozorida yuqori baholanadi. Ularning vazifasi
              — dolzarb yechimlarni joriy qilish, raqobatchilardan oldinda
              bo'lish, IT mahsulotlarni qulay va jozibador qilish. Frontend
              dasturchilar saytlar va ilovalar uchun grafik interfeyslarni
              yaratadilar, shaxsiy bo'lmagan kodni chiroyli dizaynga
              aylantiradilar. Toshkentdagi frontend kurslari sizga ushbu kasbni
              o'rganishga va masofadan ishlash imkoniyatini qo'lga kiritishga
              yordam beradi.
            </p>
          </div>
          <div className="about-img">
            <img src={aboutImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
