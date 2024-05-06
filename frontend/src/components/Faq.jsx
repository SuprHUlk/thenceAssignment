import "../css/faq.css";

import union from "../assets/union.png";

const Faq = () => {
  return (
    <>
      <div className="container-1">
        <div className="left">
          <div className="text-3">
            <p>What's on your mind</p>
            <h1>Ask Questions</h1>
          </div>
          <img className="union-img" src={union} alt="" />
        </div>
        <div className="right">
          <div className="questions">
            <div className="faq">
              <p className="question">Do you offer freelancers?</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
              </svg>
            </div>
            <hr />
            <div className="faq">
              <p className="question">
                What's the guarantee that I will be satisfied <br /> with the
                hired talent?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
              </svg>
            </div>
            <hr />
            <div className="faq faq-spl">
              <div className="question-spl">
                <p className="question">Can I hire multiple talents at once?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="2"
                  viewBox="0 0 14 2"
                  fill="none"
                >
                  <path d="M0 0V2H14V0H0Z" fill="black" />
                </svg>
              </div>

              <p className="answer">
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </p>
            </div>
            <hr />
            <div className="faq">
              <p className="question">
                Why should I not go to an agency directly?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
              </svg>
            </div>
            <hr />
            <div className="faq">
              <p className="question">
                Who can help me pick a right skillset and duration for me?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
