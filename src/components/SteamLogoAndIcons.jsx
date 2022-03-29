import React from 'react'
import logo_steam from '../assets/logo_steam.svg';
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
        <ul style={{display: "flex", alignContent: "flex-end"}}>
            <li style={{color: "whitesmoke"}}><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <li style={{color: "whitesmoke"}}> <FontAwesomeIcon icon={faUser} /> </li>
            <li style={{color: "whitesmoke"}}><FontAwesomeIcon icon={faCartShopping} action onClick={alertClicked}/></li>
            {/* <button style={{backgroundColor: "#07065e" }}> <FontAwesomeIcon icon={faCartShopping} /></button> */}
        </ul>
    </div>
  )
}

export default SteamLogoAndIcons