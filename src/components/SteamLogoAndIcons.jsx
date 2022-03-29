import React from 'react'
import logo_steam from '../assets/logo_steam.svg';
import usericon from "../assets/usericon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const SteamLogoAndIcons = () => {


    function alertClicked() {
        alert('Sumaste un Item a tu carrito');
      }



  return (
    <div style={{display: "flex", }}>
        <img src={logo_steam} alt="Logo Steam" style={{ height: 50 }} />
        <li style={{display: "flex", alignContent: "flex-end"}}>
            <ul style={{color: "whitesmoke"}}><FontAwesomeIcon icon={faMagnifyingGlass} /></ul>
            <ul style={{color: "whitesmoke"}}> <FontAwesomeIcon icon={faUser} /> </ul>
            <ul style={{color: "whitesmoke"}}><FontAwesomeIcon icon={faCartShopping} action onClick={alertClicked}/></ul>
            {/* <button style={{backgroundColor: "#07065e" }}> <FontAwesomeIcon icon={faCartShopping} /></button> */}
        </li>
    </div>
  )
}

export default SteamLogoAndIcons