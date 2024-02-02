import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const bio = "I made this!"
  const githubLink = "https://github.com/liza";
  const linkedinLink = "https://www.linkedin.com/in/liza/";

  return (
    <div>
      <NavBar user={user} />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={bio} links={{ github: githubLink, linkedin: linkedinLink }} />
    </div>
  );
}

export default App;