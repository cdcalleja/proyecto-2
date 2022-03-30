import * as React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';



const Buttons = () => {

  // function alertClicked() {
  //   alert('Sumaste un Item a tu carrito');
  // };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const newLocal = 50;
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button style={{ backgroundColor: "#07065e", border: "1px solid white", borderRadius: 25, marginLeft: newLocal}}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      <Button style={{ backgroundColor: "#07065e", border: "1px solid white", borderRadius: 25, marginLeft: 50 }}>
        <FontAwesomeIcon icon={faUser} />
        </Button>
      <Button style={{ backgroundColor: "#07065e", border: "1px solid white", borderRadius: 25, marginLeft: 50 }} onClick={handleOpen}>
        <FontAwesomeIcon icon={faCartShopping}/>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Desea confirmar su compra?
          </Typography>
          <br />
          <Button onClick={handleClose} style= {{marginLeft: 50}}> Si </Button>
          <Button onClick={handleClose} style= {{marginLeft: 70}}> No </Button>
        </Box>
      </Modal>
        </Button>
    </ButtonGroup>
  )
}

export default Buttons