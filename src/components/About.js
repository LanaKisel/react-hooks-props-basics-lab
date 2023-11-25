import React from "react";
import Links from "./Links";



function About(props) {
  //const {user} = props; // Destructuring the user prop from props object
  // const { bio } = user;

  // function Bio() {
  //   if (bio && bio.length>1) {
  //     return <p>{bio}</p>
  //   } else return null }
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length >=1 ? <p>{props.bio}</p> : null}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;