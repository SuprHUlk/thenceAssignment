import "../css/form.css";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formValues, setFormValues] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [showP, setShowP] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate = useNavigate();

  const [btnStyle, setBtnStyle] = useState({
    width: "100%",
    borderRadius: "2rem",
    color: "white",
    padding: "1.2rem 0rem",
    border: "2px solid #eaeaea",
    background: "#C9C9C9",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (formValues.username && formValues.email) {
      setIsDisabled(false);
      setBtnStyle((prevState) => ({
        ...prevState,
        background: "black",
        color: "white",
      }));
    } else {
      setIsDisabled(true);
      setBtnStyle((prevState) => ({
        ...prevState,
        background: "#C9C9C9",
        color: "white",
      }));
    }
  }, [formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRegex.test(formValues.email)) {
      setShowP(false);
      navigate("/success");
    } else {
      setShowP(true);
    }
  };

  return (
    <>
      <div className="container-4">
        <div className="heading" style={{ marginBottom: "4rem" }}>
          <p style={{ fontSize: "xx-large" }}>Registration Form</p>
          <h1 style={{ fontSize: "56px" }}>Start your success</h1>
          <h1 style={{ fontSize: "56px" }}>Journey here!</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <input
              placeholder="Enter your name"
              type="text"
              className="input"
              name="username"
              onChange={handleChange}
            />
            <div className="email">
              <input
                style={{ marginBottom: "1rem" }}
                placeholder="Enter your email"
                type="text"
                className="input"
                name="email"
                onChange={handleChange}
              />
              {showP && (
                <p
                  style={{
                    fontFamily: "Manrope",
                    color: "red",
                    margin: 0,
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <path
                        d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z"
                        fill="#FF0808"
                      />
                    </svg>
                  </span>
                  Enter a valid email address
                </p>
              )}
            </div>
            <Button
              style={btnStyle}
              type="submit"
              variant="contained"
              disabled={isDisabled}
              disableElevation
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
