import React, { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Button, Container, Flex, Spacer, Center} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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


  const { loading, data } = useQuery(GET_ME);
// console.log(data)
  const userData = data?.me || [];
  const { savedColours} = userData
// console.log(userData.savedColours)

const [fillColours, setFillColours] = useState(Array(35).fill("white"));
// console.log(fillColours)

useEffect(() => {
    setFillColours(savedColours ? savedColours: Array(35).fill("white"))
  }, [savedColours])


  const [saveColours] = useMutation(SAVE_COLOURS);
  // How to change Colour
  const onFillColour = (i) => {
    let newFillColours = fillColours.slice(0);
    console.log(newFillColours)
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
    console.log("Token works:  " + token)
  

    try {
    await saveColours({
    variables: {savedColours:fillColours},
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
    <Container maxW='container.sm' bg={currentColour} centerContent p={5}>
      

      <Box>
      <Tabs
        isLazy
        isFitted
        size="lg"
        defaultIndex={3}
        variant="soft-rounded"
       >

        <TabList
          bg="white">
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
        <GithubPicker
          color={currentColour}
          onChangeComplete={(colour) => {
            setColour(colour.hex);
          }}
          width="412px"
          colors={['#8D5524','#E0AC69','#C68642','#F1C27D', '#FFDBAC','#FFFFFF','#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', "#3B2219", "#d2b179", "#795548", "#f3d6b9", "#FFECB3", "#000000", "#e91e63", "#bf360c", "#fcb900", '#8bc34a', '#4dd0e1', '#b3e5fc', '#2d3986', '#9c27b0', '#bf4340', '#f8bbd0']}
          triangle="hide" />



    


    </Container>

    {Auth.loggedIn() ? (
      <>
        <Button m={3}
        onClick={() => handleSaveColourBook(fillColours)}>
          Save Your Work
        </Button>
      </>
      
              ) : ( 
                <>
                 <form method="get" action="/signup">
                  <Button m={4} type="submit">Login or Signup to save your work!</Button>
                </form>
                </>
              )}
    </Container>
  );
}

export default DrawingBoard;
