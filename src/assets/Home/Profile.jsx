import Typical from "react-typical";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I&apos;m <span className="highlight-text">Pouya</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="secondary-text">
              {" "}
              <h1>
                <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Developer 🪄",
                  1000,
                  "Building with React 🚀",
                  1000,
                  "Always learning, always coding 🌱",
                  1000,
                  "IKIU Student | Code & Creativity 🎓",
                  1000,
                ]} />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front-end and back-end operations.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
