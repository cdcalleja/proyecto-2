import * as React from 'react'
import { Button, ButtonGroup} from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';




const Buttons = () => {

  function alertClicked() {
    alert('Sumaste un Item a tu carrito');
  };


  return (
    <ButtonGroup  variant="contained" aria-label="outlined primary button group">
          <Button style={{backgroundColor: "#07065e", border: "1px solid white", borderRadius: 25, marginLeft: 50}}><FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
          <Button style={{backgroundColor: "#07065e", border: "1px solid white", borderRadius: 25, marginLeft: 50}}><FontAwesomeIcon icon={faUser} /></Button>
          <Button style={{backgroundColor: "#07065e", border: "1px solid white", borderRadius: 25, marginLeft: 50}} ><FontAwesomeIcon icon={faCartShopping} action onClick={alertClicked}/></Button>
        </ButtonGroup>
  )
}

export default Buttons