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
import Signup from './Signup';

  

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
       
        <Box onClick={onOpen} className="hover">Sign in</Box>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="xs"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign in</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} fontSize="14px">
              <Button width="100%" bg={"#4a66a0"} color="white" mb={5}>Log in with Facebook</Button>
              <Button  width="100%" bg={"white"} boxShadow="base" mb={3}>Log in with Google</Button>
              <Box  textAlign={"center"} mb={3}>OR</Box>
              <FormControl>
                {/* <FormLabel>Email</FormLabel> */}
                <Input ref={initialRef} placeholder='Enter Email'  onChange={(e)=>setRegisterEmail(e.target.value)}  />
              </FormControl>
  
              <FormControl mt={4}>
                {/* <FormLabel>Password</FormLabel> */}
                <Input placeholder='Enter password'   onChange={(e)=>setRegisterPassword(e.target.value)}  />
              </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button bgColor='#f27669' color="white" w="100%" onClick={handleSubmit}>
                LOG IN
              </Button>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
            <Box textAlign="center" fontSize="13px" display="flex" alignItems={"center"} gap="5px" justifyContent={"center"}>Don't have an account? <Signup /></Box>
            <br />
          </ModalContent>
            
        </Modal>
          
      </>
    )
  }

export default Signin
