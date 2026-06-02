import { Box, Text, useColorModeValue } from '@chakra-ui/react';

function Footer() {
  const bg = useColorModeValue('#79D1ED', '#002E57');
  const color = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box as="footer" bg={bg} color={color} py={[4, 5, 6]} px={[3, 4, 6]} textAlign="center" mt={[16, 20]}>
      <Text fontSize={['xs', 'sm']}>
        &copy; {new Date().getFullYear()} Shazreen Affandi. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
