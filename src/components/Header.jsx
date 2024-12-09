import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header({setSubmitValue}) {

const [inputValue,setInputValue]=useState("")
// console.log(inputValue);

const handleSubmit=()=>{
    setSubmitValue(inputValue)
    
}

  return (
    <div>
            <Navbar expand="lg" className="bg-dark ">
            <Container className=' d-flex justify-content-between'>
                <Navbar.Brand href="#home" className='fw-bold fs-3 text-light shadow me-5'><i class="fa-solid fa-image me-2"></i> SEARCH FOR IMAGES</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                    <div className='d-flex justify-content-center align-items-center input'style={{height:"80px"}}>
                           <input onChange={e=>setInputValue(e.target.value)} className='rounded ' style={{width:"100%",height:"50px"}}type="text" placeholder='  Search' />  
                           <button onClick={handleSubmit} className='btn btn-primary ' style={{height:"46px"}}><i class="fa-solid fa-magnifying-glass "></i></button> 
                                                         
                    </div>
                

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </div>
  )
}

export default Header
