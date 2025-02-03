// const Navbar = () => {
//     return <div>You've Landed at LingoVerse</div>;
// };
// export default Navbar;
import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";



const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <Container maxW={"1140px"} px={4}>
        <Flex 
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        > 

        <div style={{justifyContent: 'center', alignItems: 'center', gap: 20, display: 'flex'}}>
            <div style={{width: 50, height: 50, position: 'relative'}}>
                <div style={{width: 49.99, height: 49.99, left: 0, top: 0, position: 'absolute', background: '#B283FF'}}></div>
            </div>
            <div style={{color: '#B283FF', fontSize: 32, fontFamily: 'Baloo Bhaijaan 2', fontWeight: '600', textTransform: 'capitalize', lineHeight: 28.80, wordWrap: 'break-word'}}>LingoVerse</div>
        </div>           

            <Text
                fontSize={{base:"22", sm:"28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}  
            >
                <Link to={"/"}>LingoVerse 🛒</Link>
            </Text>

                    <div style={{height: 39, justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'flex'}}>
                <div style={{color: '#B283FF', fontSize: 20, fontFamily: 'Baloo Bhaijaan 2', fontWeight: '700', wordWrap: 'break-word'}}>Home</div>
                <div style={{color: '#B283FF', fontSize: 20, fontFamily: 'Baloo Bhaijaan 2', fontWeight: '700', wordWrap: 'break-word'}}>About</div>
                <div style={{color: '#B283FF', fontSize: 20, fontFamily: 'Baloo Bhaijaan 2', fontWeight: '700', wordWrap: 'break-word'}}>Locations</div>
                <div style={{color: '#B283FF', fontSize: 20, fontFamily: 'Baloo Bhaijaan 2', fontWeight: '700', wordWrap: 'break-word'}}>Contact</div>
            </div>
            <div style={{width: 86, height: 39, padding: 12, background: '#B283FF', borderRadius: 8, overflow: 'hidden', border: '1px #B283FF solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: '#F5F5F5', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 14, wordWrap: 'break-word'}}>Sign Up</div>
            </div>
            </div>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button>
                    <PlusSquareIcon fontSize={20}/>
                </Button>
                </Link>
                
            
                <Button onClick={toggleColorMode}>
                    {colorMode === "light"? <IoMoon />: 
                    <LuSun size={20} /> }
                </Button>
            </HStack>

        </Flex>
    </Container>;
};
export default Navbar;