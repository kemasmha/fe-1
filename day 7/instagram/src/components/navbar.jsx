import { Flex,Image, Input,Icon, Avatar, Center, Menu, MenuList,MenuItem, MenuButton, Divider, Text } from "@chakra-ui/react"
import InstagramLogo from "../assets/Instagram_logo.svg.png"

import { AiOutlineHeart,AiOutlineCompass,AiFillHome } from "react-icons/ai";
import { FiPlusSquare} from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import {  useNavigate } from "react-router-dom";



export default function Navbar() {
    let navigate = useNavigate();
    return (
        <> 
         <Flex height={"60px"} 
         borderBottom={"2px solid #E2E8F0"}
         backgroundColor="white" justifyContent="center" color="black" alignItems={"center"}
          w="full" zIndex={1} position={"fixed"}>
            <Flex maxW={"970px"} w="5xl" justifyContent="space-between" px={"10"} >
  <Image src={InstagramLogo} maxH={"40px"} h={"40px"} w={"110px"} maxW={"110px"}
                 sx={{
                    _hover: {
                      cursor: "pointer",
                    },
                  }}
                  onClick={
                    () => {
                        navigate("/")
                        window.location.reload(true);
                    }
                  }></Image>
       
        <Flex gap={3}  maxH={"40px"}  flexDir="row" wrap={"wrap"} alignContent="center">
            <Icon boxSize={"7"} as={AiFillHome}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
          onClick={
            () => {
                navigate("/")
                window.location.reload(true);
            }
          }
          ></Icon>
            <Icon boxSize={"7"} as={RiMessengerLine}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }}></Icon>

            <Icon boxSize={"7"} as={FiPlusSquare}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }}></Icon>
            <Icon boxSize={"7"} as={AiOutlineCompass}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }}></Icon>
            <Icon boxSize={"7"} as={AiOutlineHeart}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }}></Icon>

            <Menu position="fixed" zIndex="3" isLazy>
            <MenuButton>
            <Avatar boxSize={"7"}   sx={{
            _hover: {
              cursor: "pointer",
            },
          }}/>
            </MenuButton>
                    <MenuList fontSize={"xs"}>
                    <MenuItem  onClick={() => {
                        navigate("/profile")
                     window.location.reload(true);}}>Profile</MenuItem>
                    <MenuItem>Saved</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem borderTop={"1px solid #E2E8F0"} >
                    Log Out
                    </MenuItem>
                    </MenuList>
            </Menu>
            </Flex>
            </Flex>
            </Flex>
            <Center>
            <Input px={4} type="search" zIndex="3" color="grey" placeholder="Search" borderRadius={"md"} 
            bgColor={"#EFEFEF"} variant="unstyled" maxW={"268px"} position="fixed" mt={14}
            minH="36px"  maxHeight="20px"/>

            </Center>
          
                  </>
    )
}