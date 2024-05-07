import "../css/Congratulations.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Congratulations = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      navigate("/");
    }
  }, [seconds, navigate]);

  return (
    <>
      <div className="container-5">
        <div className="body-1">
          <svg
            className="tick-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <circle cx="40.5" cy="40.5" r="28" fill="white" />
            <path
              d="M40.0014 73.3219C21.5919 73.3219 6.66809 58.3979 6.66809 39.9886C6.66809 21.5791 21.5919 6.65527 40.0014 6.65527C58.4107 6.65527 73.3347 21.5791 73.3347 39.9886C73.3347 58.3979 58.4107 73.3219 40.0014 73.3219ZM36.6768 53.3219L60.2471 29.7517L55.5331 25.0377L36.6768 43.8939L27.2488 34.4656L22.5347 39.1799L36.6768 53.3219Z"
              fill="#28B246"
            />
          </svg>
          <p
            style={{
              color: "#2DA950",
              fontFamily: "Covered By Your Grace",
              fontWeight: "400",
              fontSize: "36px",
              margin: 0,
            }}
          >
            Success Submitted
          </p>
          <h1
            style={{
              margin: 0,
              marginBottom: "1rem",
              fontSize: "56px",
              fontWeight: 600,
            }}
          >
            Congratulations
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "27px",
              fontWeight: 500,
              color: "#727272",
              textAlign: "center",
            }}
          >
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
        <div className="footer">
          <p>
            Redirecting you to Homepage in{" "}
            <b style={{ color: "black" }}>{seconds} Seconds</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Congratulations;
