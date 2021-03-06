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
  Center,
  Link,
  Img,
  Spacer,
  createStandaloneToast 
} from "@chakra-ui/react";

// Import other images here
import StarTrio from "../components/StarTrio";
import HelloWorld from "../components/HelloWorld";
import House from "../components/House";
import Child from "../components/Child";

import { useMutation } from "@apollo/client";
import { SAVE_COLOURS, DELETE_COLOURS } from "../utils/mutations";
import Auth from "../utils/auth";
import { GithubPicker } from "react-color";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";

function DrawingBoard() {
  const [currentColour, setColour] = useState("#C0C0C0");
  const { loading, data } = useQuery(GET_ME);
  const [saveColours] = useMutation(SAVE_COLOURS);
  const [deleteColours] = useMutation(DELETE_COLOURS)

  const userData = data?.me || [];
  const { savedColours, favColour } = userData;


  // toast functionality
  const toast = createStandaloneToast()

  // drawer functionality 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // toggle colormode
  // const text = useColorModeValue("dark", "light");
  const [fillColours, setFillColours] = useState(Array(35).fill("white"));


  useEffect(() => {
    setFillColours(savedColours ? savedColours : Array(35).fill("white"));
  }, [savedColours]);


  // How to change Colour
  const onFillColour = (i) => {
    let newFillColours = fillColours.slice(0);
    // console.log(newFillColours);
    newFillColours[i] = currentColour;
    setFillColours(newFillColours);
  };

  const handleDeleteColours = async (event) => {
    event.preventDefault();
    await deleteColours().then(
      toast({
      title: 'Reset Colouring Book',
      description: "Deleting saved content",
      status: 'warning',
      duration: 4000,
      isClosable: true,
      position: 'top'
    })
    );
    setFillColours(Array(35).fill("white"))
  }

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
      }).then(toast({
        title: 'Colouring Book',
        description: "Save Complete",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top'
      }));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <Container >
      <Heading m={6}>Colouring Pages</Heading>
      <Container
        borderRadius="lg"
        maxW="container.sm"
        bg={currentColour}
        centerContent
        p={5}
      >
        <Stack spacing={3} direction='row' align='center' m={2}>
        <Button ref={btnRef} fontSize={10} onClick={onOpen} color={"black"} borderRadius="lg" background={"#b3e5fc"}>
          How it works
        </Button>
        {Auth.loggedIn() ? (
        <>
          <Button fontSize={10} color={"black"} m={3} onClick={() => {handleSaveColourBook(fillColours)}} background={"#b3e5fc"}>
            Save Your Work
          </Button>
          <Button fontSize={10} color={"black"} onClick={handleDeleteColours} background={"#b3e5fc"}>
            Clear Colouring book
          </Button>
          </>
      ) : (
        <>
          <form method="get" action="/signup">
            <Button m={4} type="submit" fontSize={10} background={"#b3e5fc"} color={"black"}>
              Login or Sign up to save
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
          size={"sm"}
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
                <Container borderRadius="md" borderWidth='10px' borderColor={favColour}>
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

            <DrawerFooter borderTopWidth="5px">
              <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                <Center w="6rem" h='10' bg={currentColour} fontWeight="bold" >
                  <span role="img" aria-label="paint palette emoji">???? </span>
                  Made By: 
                </Center>
                <Center w="7rem" h='10' bg={currentColour} fontWeight="bold" p={1} >
                  <Link href='https://github.com/jhugray' isExternal>  
                   Jess
                  </Link>
                  <Spacer />
                  <Img src={'https://badgen.net/badge/icon/github/'+favColour+'?icon=github&label'}/>
                </Center>
                <Center w="8rem" h='10' bg={currentColour} fontWeight="bold" p={1} >
                  <Link href='https://github.com/azuryte5' isExternal>
                   Andrew
                  </Link>
                  <Spacer />
                  <Img src={'https://badgen.net/badge/icon/github/'+favColour+'?icon=github&label'}/> 
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
            "#B80000",
            "#DB3E00",
            "#FFF600",
            "#008B02",
            "#1273DE",
            "#5300EB",
            "#EB9694",
            "#FFDBAC",
            "#FFFFFF",
            "#3B2219",
            "#d2b179",
            "#e91e63",
            "#bf360c",
            "#FFF44F",
            "#8bc34a",
            "#004DCF",
            "#29021A",
            "#FAD0C3",
            "#795548",
            "#f3d6b9",
            "#FFECB3",
            "#000000",
            "#bf4340",
            "#FFA500",
            "#FFFF00",
            "#006B76",
            "#b3e5fc",
            "#9c27b0",
            "#C0C0C0",
            
          ]} />
      </Container>
    </Container>
  );
}

export default DrawingBoard;