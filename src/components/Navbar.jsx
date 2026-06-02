import { useState } from 'react';
import { Box, Flex, Spacer, HStack, VStack, IconButton, useColorModeValue, Collapse } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ToggleThemeButton from './ToggleThemeButton';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Work Experience' },
    { href: '#education', label: 'Education' },
    { href: '#techstack', label: 'Skill' },
    { href: '#projects', label: 'Project' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    
    // Add small delay to allow menu to close before scrolling
    setTimeout(() => {
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const mobileMenuBg = useColorModeValue('white', 'gray.800');

  return (
    <Box as="nav" px={[3, 4, 6]} py={[3, 4]} boxShadow="sm" position="sticky" top="0" zIndex="10" bg="#79D1ED" _dark={{ bg: '#002E57' }}>
      <Flex align="center">
        {/* Desktop Navigation */}
        <HStack spacing={[2, 3, 4]} display={['none', 'none', 'flex']}>
          {navLinks.map((link) => (
            <Box
              key={link.href}
              as="a"
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              transition="all 0.3s"
              _hover={{ bg: 'rgba(255, 255, 255, 0.2)', borderRadius: 'md', px: 2, py: 1 }}
              fontSize={['sm', 'md']}
              cursor="pointer"
              px={2}
              py={1}
              borderRadius="md"
            >
              {link.label}
            </Box>
          ))}
        </HStack>

        {/* Mobile Hamburger Menu */}
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          display={['flex', 'flex', 'none']}
          aria-label="Toggle navigation"
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
        />

        <Spacer />
        <ToggleThemeButton />
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          spacing={2}
          align="stretch"
          bg={mobileMenuBg}
          p={4}
          mt={2}
          borderRadius="md"
          display={['flex', 'flex', 'none']}
        >
          {navLinks.map((link) => (
            <Box
              key={link.href}
              as="a"
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              px={3}
              py={2}
              borderRadius="md"
              transition="all 0.3s"
              _hover={{ bg: '#79D1ED', _dark: { bg: '#002E57' } }}
              fontSize="md"
              cursor="pointer"
              display="block"
            >
              {link.label}
            </Box>
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
}

export default Navbar;
