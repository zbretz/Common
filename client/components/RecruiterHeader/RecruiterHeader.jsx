import "./RecruiterHeader.css";
import React from "react";
import { menuItems } from "./MenuItems.jsx";

const RecruiterHeader = () => {
  return (
    <header className="recruiter">
      <h1 className="recruiter__title">CA Recruiter</h1>

      <form>
        <input
          type="text"
          className="recruiter__search"
          id="recruiter-search"
          placeholder="Search"
          name="s"
        />
        <button type="submit">Search</button>
      </form>

      <ul className="recruiter__list">
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className="recruiter__list-items" href={item.link}>
                {item.section}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default RecruiterHeader;
