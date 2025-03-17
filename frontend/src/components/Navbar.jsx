import React, { useState } from "react";
import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import "./Navbar.css";
import Login from "./Login.jsx";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <Container maxW="1140px" px={4}>
            <Flex
                h={16}
                alignItems="center"
                justifyContent="space-between"
                flexDir={{ base: "column", sm: "row" }}
            >
                <div className="logo-container">
                    <div className="logo-box"></div>
                    <div className="logo-text">
                        <Link to="/">LingoVerse</Link>
                    </div>
                </div>


                <div className="nav-links">
                    <div className="nav-items">
                    <Link to="/homePage">
                        <div 
                            className="nav-item">Home
                        </div>
                    </Link>
                        <div className="nav-item">About</div>
                        <div className="nav-item">Locations</div>
                        <div className="nav-item">Contact</div>
                    </div>
                    <div className="signup-button" >
                        <div onClick={() => setPopupOpen(true)}>Sign Up</div>
                        <Login isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
                    </div>
                    
                </div>

                <HStack spacing={2} alignItems="center">
                    <Link to="/create">
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;
