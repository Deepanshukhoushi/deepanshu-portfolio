import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – CSE (Artificial Intelligence)</h4>
                <h5>Technocrats Institute of Technology, Bhopal</h5>
              </div>
              <h4>2022 - 2026</h4>
            </div>
            <p>
              Exploring full stack
              development and generative AI technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>OCI Generative AI Professional</h4>
                <h5>Oracle Cloud Infrastructure</h5>
              </div>
              <h4>2025</h4>
            </div>
            <p>
              Certified Generative AI Professional (September 2025) &
              TCS iON Career Edge – Young Professional (July 2025).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Training</h4>
                <h5>BridgeLabz Java Full Stack Program</h5>
              </div>
              <h4>Dec 2025 - NOW</h4>
            </div>
            <p>
              Undergoing rigorous training in full stack development, focusing on Angular,
              Spring Boot, and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;