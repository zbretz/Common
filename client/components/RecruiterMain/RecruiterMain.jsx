import "./RecruiterMain.css";
import React from "react";
// import dummyPic from "../../src/assets/dummy-profile-pic.jpeg";

const RecruiterMain = () => {
  let candidates = [
    {
      // photo: dummyPic,
      name: "Jerick Iquin ",
      experience: "7 years",
      school: "University of Vancouver",
      desiredPosition: "Full stack engineer",
      linkedin: "https://www.linkedin.com/in/jek-iq/",
    },
    {
      // photo: dummyPic,
      name: "Jinhoo Bong",
      experience: "3 years",
      school: "University of LA",
      desiredPosition: "Full stack engineer",
      linkedin: "https://www.linkedin.com/in/jin-bo/",
    },
    {
      // photo: dummyPic,
      name: "Lenora Esquenazi",
      experience: "5 years",
      school: "University of Berkeley",
      desiredPosition: "Full stack engineer",
      linkedin: "https://www.linkedin.com/in/len-esq/",
    },
    {
      // photo: dummyPic,
      name: "Zach Bretz",
      experience: "6 years",
      school: "University of Utah",
      desiredPosition: "Full stack engineer",
      linkedin: "https://www.linkedin.com/in/zac-br/",
    },
    {
      // photo: dummyPic,
      name: "Jose Solis ",
      experience: "2 years",
      school: "University of Virginia",
      desiredPosition: "Full stack engineer",
      linkedin: "https://www.linkedin.com/in/jos-so/",
    },
  ];

  return (
    <div className="recruiterMain">
      <div className="recruiterMain__filter">Filter Area</div>
      <div className="recruiterMain__candidates">
        {candidates.map((candidate, index) => {
          return (
            <div className="candidates-list">
              <div className="candidates-pic-container">
                <img src="../../src/assets/dummy-profile-pic.jpeg"></img>
              </div>
              <div className="candidates-info-container" key={index}>
                <p>Name: {candidate.name}</p>
                <p>Experience: {candidate.experience}</p>
                <p>School: {candidate.school}</p>
                <p>Position: {candidate.desiredPosition}</p>
                <p>LinkedIn: {candidate.linkedin}</p>
              </div>
              <div>
                <button className="candidates-btn" type="submit">
                  {" "}
                  Add{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecruiterMain;
