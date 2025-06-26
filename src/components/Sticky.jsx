import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from 'react-bootstrap';

const Sticky = () => {
  return (
    <Button className='d-flex align-items-center justify-content-center p-3' as='a' target='_blank' href='https://api.whatsapp.com/send?phone=919074010119' variant="primary" id='fixed'>
        <FontAwesomeIcon icon={faWhatsapp}/>
    </Button>
  )
}

export default Sticky