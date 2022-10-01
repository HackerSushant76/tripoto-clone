import React from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase-config"
import { useContext } from "react";
import {useState} from "react"
import {Navigate} from "react-router-dom"
import { ShowContext } from '../Context/ShowContext'
import {Link} from "react-router-dom"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Button,
    FormLabel,
    useDisclosure,
    Input,
    Box,
  } from '@chakra-ui/react'

  

function Signin() {
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [registerEmail,setRegisterEmail]=useState("")
    const [registerPassword,setRegisterPassword]=useState("")
      
    const {isAuth,setIsAuth}=useContext(ShowContext)

    const handleSubmit=()=>{
      signInWithEmailAndPassword(auth,registerEmail,registerPassword)
      .then((res)=>{
       setIsAuth(true)
       alert("LogIn Successful !")
      }).then((error)=>{
        console.log(error)
      }) 
    }
    console.log(isAuth)
   
    return (
      <>
         

        
        <Box onClick={onOpen}>Sign in</Box>
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign in</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='Enter Email'  onChange={(e)=>setRegisterEmail(e.target.value)}  />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Enter password'   onChange={(e)=>setRegisterPassword(e.target.value)}  />
              </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
       
        </Modal>
          
      </>
    )
  }

export default Signin
