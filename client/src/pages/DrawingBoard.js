import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Text, Button } from "@chakra-ui/react";

// Import other images here
import Palette from "../components/Palette";
import StarTrio from "../components/StarTrio";
import HelloWorld from "../components/HelloWorld";
import House from "../components/House";
import Child from "../components/Child";
// import { GithubPicker } from "react-color";

function DrawingBoard() {
  //For react-color front test
  // const [currentColour, setColour] = useState("#B80000");

  // Path's get color filled
  const [fillColours, setFillColours] = useState(Array(10).fill("white"));

  // Current colour, How to set new colour
  const [currentColour, setCurrentColour] = useState("white");

  // How to change Colour
  const onFillColour = (i) => {
    let newFillColours = fillColours.slice(0);
    newFillColours[i] = currentColour;
    setFillColours(newFillColours);
    console.log(fillColours);
  };
  return (
    <div>
      <Box>
        <Heading mb={2}>Drawing Board</Heading>
        <Button size="lg" colorScheme="green" mt="24px">
          Save Your Work?
        </Button>
      </Box>
      <Tabs
        colorScheme={currentColour}
        isLazy
        isFitted
        size="lg"
        variant="unstyled"
      >
        <TabList>
          <Tab _selected={{ bg: currentColour }}>Child</Tab>
          <Tab _selected={{ bg: currentColour }}>HelloWorld</Tab>
          <Tab _selected={{ bg: currentColour }}>House</Tab>
          <Tab _selected={{ bg: currentColour }}>StarTrio</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Child
              fillColours={fillColours}
              onFill={onFillColour}
              current={currentColour}
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
      <Palette currentColour={currentColour} changeColour={setCurrentColour} />

      {/* We may want to switch to react-color
        <GithubPicker
          color={currentColour}
          onChangeComplete={(colour) => {
            setColour(colour.hex);
          }}
          width="200px"
          colours={['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']}
          triangle="hide"
          // onSwatchHover />
         */}
    </div>
  );
}

export default DrawingBoard;
