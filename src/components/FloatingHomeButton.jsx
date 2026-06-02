import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaAngleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

function FloatingHomeButton() {
  const bg = useColorModeValue('teal.500', 'teal.400');
  const hoverBg = useColorModeValue('teal.600', 'teal.500');

  const scrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      position="fixed"
      bottom={['76px', '76px', '6']}
      right={[4, 5, 6]}
      zIndex={999}
    >
      <MotionIconButton
        icon={<FaAngleUp />}
        aria-label="Go to Home"
        size={['md', 'lg']}
        bg={bg}
        color="white"
        _hover={{ bg: hoverBg }}
        boxShadow="lg"
        borderRadius="full"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      />
    </Box>
  );
}

export default FloatingHomeButton;