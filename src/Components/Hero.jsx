import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import Image1 from './image6.jpg';
import Image2 from '../Assets/shiv shankar.jpg';
import Image3 from '../Assets/ganesh ji (1).jpg';
import Image4 from '../Assets/hanuman ji.jpg';


const imageData = [
//   {
//     src: Image1,
//     title: "Buddha",
//     description: "The Enlightened one, founded Buddhism, teaching compassion, mindfulness and non-attachment. He symbolizes inner peace, wisdom, and the path to liberation from suffering through the Eightfold Path and meditation.",
//     color: "red"
//   },
  {
    src: Image2,
    title: "Lord Shiva",
    description: "The Destroyer & An Ascetic & Adiyogi in the Trinities - The Trimurtis, embodies transformation, destruction, and creation. Revered for his cosmic power, meditation, and compassion, he symbolizes the balance between chaos and renewal.",
    color: "#343a40"
  },
  {
    src: Image3,
    title: "Lord Ganesha",
    description: "The Elephant-headed deity and the Son of Shiva Parvati, is revered as the remover of obstacles and the god of wisdom, intellect, and success. He symbolizes new beginnings, prosperity and protection, bringing blessings and guidance.",
    color: "#52442c"
  },
  { src: Image4,
    title: "Lord Hanuman",
    description:'Lord Hanuman-a divine Being who mastered the Dus Mahavidyas -The Science Of the Cosmos, He who symbolizes immense strength, unwavering devotion, wisdom  and humility. Known for his loyalty to Lord Rama, he represents selfless service, courage  and the power of faith.',
     color: "#52442c"
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
      setIsSliding(false);
    }, 500); // Delay for sliding transition
  };

  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length);
      setIsSliding(false);
    }, 500); // Delay for sliding transition
  };

  const currentImage = imageData[currentIndex];

  return (
    <Box
      sx={{
        height: "50vh",
        width: "100%",
        display: "flex",
        position: "relative",
        flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },
        backgroundColor: currentImage.color,
        transition: 'background-color 0.5s ease',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "200%", // Twice the width to accommodate sliding effect
          transform: `translateX(${isSliding ? '-150%' : '0'})`, // Slide effect
          transition: 'transform 0.5s ease',
        }}
      >
        {/* Left Box for Image */}
        <Box
          sx={{
            width: '50%',
            backgroundColor: currentImage.color,
            // backgroundImage: url(${src}),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'overlay', // Try different modes like 'multiply', 'screen', etc.
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={currentImage.src}
            alt={currentImage.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "scale-down",
            }}
          />
        </Box>

        {/* Right Box for Content */}
        <Box
          sx={{
            width: "50%", // Half of the parent width
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: "center",
            padding: 2,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontStyle: "revert-layer",
              fontSize: "2rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {currentImage.title}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: "1.3rem",
            }}
          >
            {currentImage.description}
          </Typography>
        </Box>
      </Box>

      {/* Navigation Icons */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <ArrowBackIosNewIcon onClick={handlePrev} sx={{ cursor: 'pointer', color: 'white' }} />
        <ArrowForwardIosIcon onClick={handleNext} sx={{ cursor: 'pointer', color: 'white' }} />
      </Box>
    </Box>
  );
};

export default Hero;




