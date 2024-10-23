import Img from "../assets/profile.jpg";
export default function Home() {
  return (
    <div>
      <div className="profile-card">
        <div className="Imag-left">
          <div className="profile">
            <img src={Img} />
          </div>
          <div className="name-badge">
            <p>Sai Sajja</p>
          </div>
        </div>
        <div className="Imag-righh">
          <div className="home-content1">
            <p>sai sajja</p>
          </div>
          <div className="home-content2">
            <p>- Frontend Developer</p>
          </div>
          <div className="home-content3">
            <p>
              "Experienced React and Frontend Developer focused on creating
              responsive and interactive web applications."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
