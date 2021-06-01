import React from "react";

import "./ApplicationNote.css";

const ApplicationNote = () => {
  return (
    <div className="application-note">
      This application was built by{" "}
      <a
        href="https://marlee-gerard.herokuapp.com"
        target="_blank"
        rel="noreferrer"
      >
        <span className="app-creator-name">Marlee Gerard</span>
      </a>
    </div>
  );
};

export default ApplicationNote;
