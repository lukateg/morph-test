import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Header = ({ inputs }) => {
  const [percentage, setPercentage] = useState(0);

  const percentages = (inputs) => {
    let counter = 0;
    const values = Object.values(inputs);
    values.forEach((value) => {
      if (value.valid) {
        counter += 1;
      }
    });
    setPercentage(counter * 25);
  };

  useEffect(() => {
    percentages(inputs);
  }, [inputs]);

  return (
    <div className="header">
      <div className="wrapper">
        <div className="percentages">
          <CircularProgressbar
            styles={buildStyles({
              textSize: "25px",
              pathTransitionDuration: 0.8,
              pathColor: `#fff`,
              textColor: "#fff",
              trailColor: `#3e98c7`,
              backgroundColor: `#d6d6d6`,
            })}
            value={percentage}
            text={`${percentage}%`}
          />
        </div>
        <div className="heading">
          <p>
            <span>New York State</span>
            <br /> Request for Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
