import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      {/* Display GitHub link */}
      <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
      https://github.com/liza
      </a>
      {/* Display LinkedIn link */}
      <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
      https://www.linkedin.com/in/liza/
      </a>
    </div>
  );
}

export default Links;