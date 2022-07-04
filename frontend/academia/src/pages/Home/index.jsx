import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const bucketURL =
  "https://t4rcisio-static-website.s3.amazonaws.com/static_website/images/";
const range = 5;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Home() {
  // Carrega a url das imagens na bucket
  const loadImages = () => {
    let imagesUrl = [...Array(range + 1).keys()];
    imagesUrl.map((value) => {
      imagesUrl[value] = { step: value, url: bucketURL + "0" + value + ".jpg" };
    });
    return imagesUrl;
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = range;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const images = loadImages();

  console.log(images);

  return (
    <Box sx={{ display: "flex" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "flex",
                  height: "443px",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.url}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Home;
