import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Text, VStack, useColorModeValue } from '@chakra-ui/react';

const MotionBox = motion(Box);

const quotes = [
  {
    text: 'We have two ears and one mouth so that we can listen twice as much as we speak.',
    author: 'Epictetus (50 AD - 135 AD)',
  },
  {
    text: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
    author: 'Antoine de Saint-Exupéry (1900 - 1944)',
  },
  {
    text: "It's not that I'm so smart, it's just that I stay with problems longer.",
    author: 'Albert Einstein (1879 - 1955)',
  },
  {
    text: 'Quiet people have the loudest minds.',
    author: 'Stephen Hawking (1942 - 2018)',
  },
];

// Array of job titles reflecting your career goals and current roles
const jobTitles = [
  'Software Developer',
  'Full Stack Developer',
  'Software Engineer',
];

const PUBLIC_URL = '';

function Hero() {
  const color = useColorModeValue('gray.100', 'gray.100');
  const [activeQuote, setActiveQuote] = useState(0);
  const [activeTitle, setActiveTitle] = useState(0);

  // Quote Cycler Effect (5 seconds)
  useEffect(() => {
    const quoteInterval = window.setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => window.clearInterval(quoteInterval);
  }, []);

  // Job Title Cycler Effect (5 seconds)
  useEffect(() => {
    const titleInterval = window.setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % jobTitles.length);
    }, 5000);

    return () => window.clearInterval(titleInterval);
  }, []);

  const authorParts = quotes[activeQuote].author.match(/^(.*?)(\s*\(.*\))$/);
  const authorName = authorParts ? authorParts[1] : quotes[activeQuote].author;
  const authorYear = authorParts ? authorParts[2] : '';

  return (
    <MotionBox
      as="section"
      id="hero"
      py={[16, 20, 20]}
      px={[4, 5, 6]}
      color={color}
      backgroundImage="url('/images/programming.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box position="absolute" inset={0} bg="blackAlpha.800" zIndex={0} />

      <VStack spacing={[6, 7, 8]} position="relative" zIndex={1}>
        
        {/* Animated Job Title Slider placed before the image */}
        <MotionBox
          key={`title-${activeTitle}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          h="40px" // Fixed height prevents page jumping when titles change
          display="flex"
          alignItems="center"
        >
          <Text
            fontSize={['xl', '2xl', '3xl', '4xl']}
            fontWeight="bold"
            color="teal.300"
            letterSpacing="wide"
            textAlign="center"
            textShadow="0px 2px 4px rgba(0, 0, 0, 0.8)"
          >
            {jobTitles[activeTitle]}
          </Text>
        </MotionBox>

        {/* Portfolio Image - Responsive size */}
        <Box 
          borderRadius="full" 
          bg="whiteAlpha.800" 
          p={[1.5, 2]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          boxShadow="lg"
        >
          <Box borderRadius="full" overflow="hidden" w={['120px', '150px', '180px']} h={['120px', '150px', '180px']} border="4px solid white">
            <Box as="img" src="/images/portfolio.jpg" alt="Shazreen Affandi" objectFit="cover" w="100%" h="100%" />
          </Box>
        </Box>

        {/* Animated Quotes Slider */}
        <MotionBox
          key={`quote-${activeQuote}`}
          maxW={['90vw', '560px', '1000px']}
          px={[4, 5, 6]}
          py={[4, 5]}
          bg="whiteAlpha.200"
          borderRadius="2xl"
          boxShadow="xl"
          overflowX="auto"
          overflowY="hidden"
          whiteSpace="nowrap"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text
            display="inline-block"
            fontSize={['sm', 'md', 'lg']}
            fontWeight="semibold"
            textAlign="center"
            color="white"
            fontStyle="italic"
            whiteSpace="normal"
          >
            “{quotes[activeQuote].text}”
          </Text>
          <Text mt={4} fontSize={['xs', 'sm']} textAlign="center" color="white">
            <Text as="span" fontWeight="bold">
              {authorName}
            </Text>
            <Text as="span" fontWeight="normal" fontStyle="italic">
              {authorYear}
            </Text>
          </Text>
          {quotes[activeQuote].role && (
            <Text fontSize="xs" textAlign="center" color="gray.200">
              {quotes[activeQuote].role}
            </Text>
          )}
        </MotionBox>

      </VStack>
    </MotionBox>
  );
}

export default Hero;