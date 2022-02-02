import { Box, Link, Stack, Text, Image } from '@chakra-ui/react';
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
    <Stack direction="row" spacing="4" align="center" justify="space-between">
      <Image src={logo}></Image>
      <Text>© 2022 | Paint | between the lines</Text>
      <Text>Developed by {' '}  
        <Link href="https://github.com/azuryte5" isExternal>Andrew Lefebvre</Link> 
        {' '} and {' '} 
        <Link href="https://github.com/jhugray" isExternal>Jess Hause Ugray</Link>
      </Text>
    </Stack>
  </Box>
  );
}

export default Footer;