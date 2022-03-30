import * as React from 'react'
import { Button, ButtonGroup, makeStyles } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles ({
  buttonStyles: {
    backgroundColor: "green"
  }
});

function alertClicked() {
      alert('Sumaste un Item a tu carrito');
    };

export default function Buttons () {
  const classes = useStyles();

  return (
        <ButtonGroup  variant="contained" aria-label="outlined primary button group">
          <Button className={classes.buttonStyles}><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
          <Button><FontAwesomeIcon icon={faUser} /></Button>
          <Button><FontAwesomeIcon icon={faCartShopping} action onClick={alertClicked}/></Button>
        </ButtonGroup>
      )
    
};
