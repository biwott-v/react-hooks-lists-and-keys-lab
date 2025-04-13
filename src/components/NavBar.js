import React from "react";
function Link(props){
  return <a href={props.a}>{props.link}</a>
}

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(link=><Link a={"#"+link} key={links.indexOf(link)} link={link}/>)}</nav>;
}

export default NavBar;
