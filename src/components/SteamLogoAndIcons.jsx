import React from 'react'
import logo_steam from '../assets/logo_steam.svg';
import Buttons from "../components/Buttons";

const SteamLogoAndIcons = () => {
  

  return (
    <div style={{display: "flex", }}>
        <img src={logo_steam} alt="Logo Steam" style={{ height: 50 }} />
            <Buttons></Buttons>
    </div>
  )
}

export default SteamLogoAndIcons