import {
  Box,
  Link,
  Stack,
  Text,
  Image,
  Flex
} from '@chakra-ui/react';
import React from 'react';
import logo from "../../assets/logo/monitor.png"


function Footer() {
  return (
    <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
      <Image src={logo}></Image>
      <Text>© 2022 |Paint| between the lines</Text>
     <Text>Developed by {' '}  
      <Link href="https://github.com/azuryte5" isExternal>Andrew Lefebvre</Link> 
      {' '} and {' '} 
      <Link href="https://github.com/jhugray" isExternal>Jess Hause Ugray</Link>
    </Text>
      </Stack>
  
    </Stack>
  </Box>

/* <Box bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>

      <Container
      as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center'}}
          align={{ base: 'center', md: 'center' }}>
     
     <Image src={logo}></Image>
     <Text>© 2022 |Paint| between the lines</Text>
     <Text>Andrew Lefebre & Jess Hause Ugray</Text>
      </Container>

</Box> */

    // <Box
    //   bg={useColorModeValue('gray.50', 'gray.900')}
    //   color={useColorModeValue('gray.700', 'gray.200')}>
    //   <Container
    //     as={Stack}
    //     maxW={'6xl'}
    //     py={4}
    //     direction={{ base: 'column', md: 'row' }}
    //     spacing={4}
    //     justify={{ base: 'center', md: 'space-between' }}
    //     align={{ base: 'center', md: 'center' }}>
    //     <Logo />
    //     <Text>© 2020 Chakra Templates. All rights reserved</Text>
    //   </Container>
    // </Box>

  );
}

export default Footer;