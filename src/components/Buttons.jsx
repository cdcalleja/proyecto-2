import * as React from 'react'
import { Button, ButtonGroup, makeStyles } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const Buttons = () => {

  function alertClicked() {
    alert('Sumaste un Item a tu carrito');
  }

  const useStyles = makeStyles ({
    buttonStyles: {
      color: "green"
    }
  })

  const classes = useStyles();

  return (
    <ButtonGroup className={classes.buttonStyles} variant="contained" aria-label="outlined primary button group">
      <Button ><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
      <Button><FontAwesomeIcon icon={faUser} /></Button>
      <Button><FontAwesomeIcon icon={faCartShopping} action onClick={alertClicked}/></Button>
    </ButtonGroup>
  )
}

export default Buttons