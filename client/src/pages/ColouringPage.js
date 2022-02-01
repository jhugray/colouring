import React, { useState, useEffect } from "react";
import {
  OrderedList,
  ListItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Button,
  Container,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack, 
  Divider, 
  Text, 
  Stack, 
  Grid,
  useColorModeValue,
  Center,
  Link
} from "@chakra-ui/react";

// Import other images here
import StarTrio from "../components/StarTrio";
import HelloWorld from "../components/HelloWorld";
import House from "../components/House";
import Child from "../components/Child";

import { useMutation } from "@apollo/client";
import { SAVE_COLOURS } from "../utils/mutations";
import Auth from "../utils/auth";
import { GithubPicker } from "react-color";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";

function DrawingBoard() {
  //For react-color front test
  const [currentColour, setColour] = useState("#B80000");
  // console.log(currentColour)
  // Path's get color filled

  const { loading, data } = useQuery(GET_ME);
  // console.log(data)
  const userData = data?.me || [];
  const { savedColours } = userData;
  // console.log(userData.savedColours)

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const text = useColorModeValue("dark", "light");
  const [fillColours, setFillColours] = useState(Array(35).fill("white"));
  // console.log(fillColours)

  useEffect(() => {
    setFillColours(savedColours ? savedColours : Array(35).fill("white"));
  }, [savedColours]);

  const [saveColours] = useMutation(SAVE_COLOURS);
  // How to change Colour
  const onFillColour = (i) => {
    let newFillColours = fillColours.slice(0);
    console.log(newFillColours);
    newFillColours[i] = currentColour;
    setFillColours(newFillColours);
    // console.log(newFillColours);
  };

  const handleSaveColourBook = async (i) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const newFillColours = fillColours.slice(0);
    newFillColours[i] = currentColour;
    setFillColours(newFillColours);

    if (!token) {
      return false;
    }
    console.log("Token works:  " + token);

    try {
      await saveColours({
        variables: { savedColours: fillColours },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <Container>
      <Heading m={6}>Colouring Pages</Heading>
      <Container
        borderRadius="lg"
        maxW="container.sm"
        bg={currentColour}
        centerContent
        p={5}
      >
        <Stack spacing='auto' direction='row' align='center' m={2}>
        <Button ref={btnRef} fontSize={10} onClick={onOpen} color={text} borderRadius="lg">
          How it works
        </Button>
        {Auth.loggedIn() ? (
        <>
          <Button color={text} m={3} onClick={() => handleSaveColourBook(fillColours)}>
            Save Your Work
          </Button>
        </>
      ) : (
        <>
          <form method="get" action="/signup">
            <Button m={4} type="submit" fontSize={10}>
              Login or Sign up to save your work!
            </Button>
          </form>
        </>
      )}
        </Stack> 
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"md"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Welcome to | Paint | Between the lines
            </DrawerHeader>

            <DrawerBody>
              <VStack direction="row" h="100px" p={4}>
                <Divider orientation="vertical" />
                  <Text>Users can make an account to save their colouring progress in fillable areas</Text>
                <Divider orientation="vertical" />
                <Container borderRadius="md" borderWidth='10px' borderColor='gray.200'>
                  <Text fontSize='32px'> Let's Paint</Text>
                  <OrderedList>
                    <ListItem>Click on Sign up / Login </ListItem>
                    <ListItem>Select an image to colour</ListItem>
                    <ListItem>Choose a colour from the selection below </ListItem>
                    <ListItem>Hit save to record your progress</ListItem>
                    <ListItem>Upload or remove an Avatar photo</ListItem>
                  </OrderedList>
                </Container>
              </VStack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="2px">
              <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <Center w={100} h='10' bg={currentColour} fontWeight="bold" centerContent>
                  <span role="img" aria-label="paint palette emoji">🎨 </span>
                  Made By: 
                </Center>
                <Center w={100} h='10' bg={currentColour} fontWeight="bold" centerContent>
                  <Link href='https://github.com/jhugray' isExternal>  
                  Jess
                  </Link>
                </Center>
                <Center w={100} h='10' bg={currentColour} fontWeight="bold" centerContent>
                  <Link href='https://github.com/azuryte5' isExternal>
                  Andrew
                  </Link> 
                </Center>
              </Grid>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Box>
          <Tabs
            isFitted
            isLazy
            size="sm"
            defaultIndex={0}
            variant="soft-rounded"
          >
            <TabList bg="white" borderRadius="lg" size="sm" p={1} spacing={1}>
              <Tab fontSize={12}>Child</Tab>
              <Tab fontSize={12}> HelloWorld</Tab>
              <Tab fontSize={12}> House</Tab>
              <Tab fontSize={12}>StarTrio</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Child fillColours={fillColours} onFill={onFillColour} />
              </TabPanel>
              <TabPanel>
                <HelloWorld fillColours={fillColours} onFill={onFillColour} />
              </TabPanel>
              <TabPanel>
                <House fillColours={fillColours} onFill={onFillColour} />
              </TabPanel>
              <TabPanel>
                <StarTrio fillColours={fillColours} onFill={onFillColour} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <GithubPicker
          borderRadius="lg"
          color={currentColour}
          onChangeComplete={(colour) => {
            setColour(colour.hex);
          }}
          width="18rem"
          colors={[
            "#8D5524",
            "#E0AC69",
            "#C68642",
            "#F1C27D",
            "#FFDBAC",
            "#FFFFFF",
            "#B80000",
            "#DB3E00",
            "#FCCB00",
            "#008B02",
            "#006B76",
            "#1273DE",
            "#004DCF",
            "#5300EB",
            "#EB9694",
            "#FAD0C3",
            "#3B2219",
            "#d2b179",
            "#795548",
            "#f3d6b9",
            "#FFECB3",
            "#000000",
            "#e91e63",
            "#bf360c",
            "#fcb900",
            "#8bc34a",
            "#4dd0e1",
            "#b3e5fc",
            "#2d3986",
            "#9c27b0",
            "#bf4340",
            "#f8bbd0",
          ]}
          // triangle="hide"
        />
      </Container>

      {/* {Auth.loggedIn() ? (
        <>
          <Button m={3} onClick={() => handleSaveColourBook(fillColours)}>
            Save Your Work
          </Button>
        </>
      ) : (
        <>
          <form method="get" action="/signup">
            <Button m={4} type="submit">
              Login or Signup to save your work!
            </Button>
          </form>
        </>
      )} */}
    </Container>
  );
}

export default DrawingBoard;