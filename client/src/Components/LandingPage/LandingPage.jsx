import React from "react";
import landigStyle from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import sound from "./img/ladrido.mp3";

function LandingPage() {

  const playSound = () =>{
    const audio = new Audio(sound)
    audio.play()
    setInterval(()=>{
        audio.pause()
    },1300)
  }

  return (
    <div className={landigStyle.container}>
      <h1>Dog's App</h1>
      <Link to='/home' onClick={playSound} className={landigStyle.Link}>
        <button>¡Guau Guau!</button>
      </Link>
      <div className={landigStyle.backgroundLeft}></div>
      <div className={landigStyle.backgroundRight}></div>
      <img src="./" alt="" />
    </div>
  );
}

export default LandingPage;