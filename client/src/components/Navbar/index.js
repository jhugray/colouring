import React from "react";
import Auth from "../../utils/auth";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";

import {
  Center,
  Circle,
  Avatar,
  chakra,
  Image,
  HStack,
  Link,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../../assets/logo/paintnobackground.png"


function Nav() {
  
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  const { username: userParam } = useParams();
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};


  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const colourModeVal = useColorModeValue("gray.200", "gray.900");
  const colourModeVal2 = useColorModeValue("gray.800", "inherit")

  
  
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <form method="get" action="/DrawingBoard">
        <Button variant="ghost" w="full" type="submit">
          Colouring Page
        </Button>
      </form>

      {Auth.loggedIn() ? (
        <>
          <form method="get" action="/myprofile">
            <Button variant="ghost" w="full" type="submit">
              Profile Page
            </Button>
          </form>

          <form method="get" action="/">
            <Button variant="ghost" w="full" type="submit" onClick={logout}>
              Sign out
            </Button>
          </form>
        </>
       ) : (
        <>
          <form method="get" action="/login">
            <Button variant="ghost" w="full" type="submit">
              Login
            </Button>
          </form>

          <form method="get" action="/signup">
            <Button variant="ghost" w="full" type="submit">
              Sign up
            </Button>
          </form>
        
        </>
      )}
    </VStack>
  );
  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      transition="box-shadow 0.2s"
      bg={bg}
      borderTop="6px solid"
      borderTopColor="brand.400"
      w="full"
      overflowY="hidden"
      borderBottomWidth={2}
      borderBottomColor={colourModeVal}
    >
      <chakra.div h="4.5rem" mx="auto" maxW="1200px">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="flex-start">
            <Link href="/">
              <HStack>
              <Image src={logo}></Image>

              </HStack>
            </Link>
          </Flex>
          <Flex justify="flex-end" align="center" color="gray.400">
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              <form method="get" action="/DrawingBoard">
                <Button
                type="submit"
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: "none" }}
              >
                Colouring Page
              </Button>
              </form>
              {Auth.loggedIn() ? (
                <>
                  <form method="get" action="/myprofile">
                    <Button
                      type="submit"
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Profile Page
                    </Button>
                  </form>

                  <form method="get" action="/" onClick={logout}>
                    <Button type="submit">
                      Sign out
                    </Button>
                  </form>

                  <Stack direction="row">
                    <Center>
                      <Circle bg={userData.favColour} size='4.5em' >
                        <Avatar size='lg' name={userData.username} src={userData.image}></Avatar>
                      </Circle>
                    </Center>
                  </Stack>
           
                </>
              ) : (
                <>
                  <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                    <form method="get" action="/login">
                      <Button type="submit">
                        Login
                      </Button>
                    </form>
                    <form method="get" action="/signup">
                      <Button type="submit">
                        Sign up
                      </Button>
                    </form>
                  </HStack>
                </>
              )}
      
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={colourModeVal2}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.div>
    </chakra.header>
  );
}

export default  Nav;