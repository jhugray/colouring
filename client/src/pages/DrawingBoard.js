import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Button, Container, Flex, Spacer} from "@chakra-ui/react";

// Import other images here
// import Palette from "../components/Palette";
import StarTrio from "../components/StarTrio";
import HelloWorld from "../components/HelloWorld";
import House from "../components/House";
import Child from "../components/Child";
import { useMutation} from '@apollo/client';
import {SAVE_COLOURS} from '../utils/mutations';
import Auth from '../utils/auth';
import { GithubPicker } from "react-color";
import { GET_ME } from '../utils/queries'
import { useQuery } from '@apollo/react-hooks';

function DrawingBoard() {
  //For react-color front test
  const [currentColour, setColour] = useState("#B80000");
// console.log(currentColour)
  // Path's get color filled


  const { data } = useQuery(GET_ME);
console.log(data)
  const userData = data?.me || {};
console.log(userData)
  const [fillColours, setFillColours] = useState(userData?.savedColours || Array(29).fill("white"));
  // Current colour, How to set new colour
//   const [currentColour, setCurrentColour] = useState("white");

  const [saveColours] = useMutation(SAVE_COLOURS);
  // How to change Colour
  const onFillColour = (i) => {
    let newFillColours = fillColours.slice(0);
    console.log(newFillColours)
    newFillColours[i] = currentColour;
    setFillColours(newFillColours);
    console.log(newFillColours);
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
    console.log("Token works:  " + token)
  

    try {
      const response = await saveColours({
    variables: {savedColours:fillColours},
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxW='container.sm' bg={currentColour} centerContent>
      <Flex w="100%" bg="white" p={4}>
        <Heading>Drawing Board</Heading>
        <Spacer />
        <Button  colorScheme="green"
        onClick={() => handleSaveColourBook(fillColours)}>
          Save Your Work
        </Button>
      </Flex>
      <Box bg="white">
      <Tabs
        isLazy
        isFitted
        size="lg"
        variant="soft-rounded">
        <TabList>
          <Tab>Child</Tab>
          <Tab>HelloWorld</Tab>
          <Tab>House</Tab>
          <Tab>StarTrio</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Child
              fillColours={fillColours}
              onFill={onFillColour}
            />
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
      {/* <Palette currentColour={currentColour} changeColour={setCurrentColour} /> */}

      {/* We may want to switch to react-color */}
        <GithubPicker
          color={currentColour}
          onChangeComplete={(colour) => {
            setColour(colour.hex);
          }}
          width="250px"
          colours={['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']}
          triangle="hide" />
        
    </Container>
  );
}

export default DrawingBoard;
