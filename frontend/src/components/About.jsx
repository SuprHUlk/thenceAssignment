import "../css/about.css";

import girlScream from "../assets/girl-scream.png";
import sparkle from "../assets/sparkle.png";
import rocket from "../assets/rocket.png";
import grid from "../assets/grid.png";
import radio from "../assets/radio.png";

import Button from "@mui/material/Button";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="part-1">
          <div className="heading">
            <p>Success Stories</p>
            <h1>Every success journey</h1>
            <h1>we've encountered.</h1>
          </div>
          <div className="main">
            <div className="girl-scream-div">
              <img className="girl-scream-img" src={girlScream} alt="" />
              <div className="card-1">
                <h1>
                  $0.5 <span>MILLION</span>
                </h1>
                <p>
                  Reduce client expenses by saving on hiring and employee costs.
                </p>
              </div>
              <div className="card-2-wrapper">
                <div className="card-2">
                  <img className="sparkle-img" src={sparkle} alt="" />
                  <h1>40%</h1>
                  <p>
                    Achieved reduction in project execution time by optimising
                    team availablity
                  </p>
                </div>
              </div>
              <div className="pill">
                <img src={rocket} alt="" />
                <div className="text">
                  <h1>10 DAYS</h1>
                  <p>Staff deployment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-div">
            <img className="grid-img" src={grid} alt="" />
          </div>
          <div className="right-side">
            <h1>
              Enhance fortune 50 company's insights teams research capabilities
            </h1>
            <img className="radio-img" src={radio} alt="" />
            <Button
              style={{
                position: "absolute",
                bottom: "-110%",
                borderRadius: "3rem",
                backgroundColor: "black",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
              }}
              variant="contained"
              disableElevation
            >
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
