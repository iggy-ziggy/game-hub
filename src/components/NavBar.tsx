import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
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