import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar


// Notes:
    // HStack is a Chakra UI component - 'horizontal stack'
    // Image is also a Chakra UI component
        // we cannot reference the src by its relative path - it must be imported like any other component then referenced
            // boxSize is, obviously, part of Chakra UI
        // Text is, you guessed it, another Chakra UI component