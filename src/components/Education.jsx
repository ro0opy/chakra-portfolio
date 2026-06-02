import { motion } from 'framer-motion';
import React from 'react';
import { Box, Heading, Text, useColorModeValue, UnorderedList, ListItem, VStack, HStack, Image, Container } from '@chakra-ui/react';

const MotionBox = motion(Box);

function Education() {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const color = useColorModeValue('gray.800', 'gray.100');
  const roleColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox
      as="section"
      id="education"
      bg={bg}
      color={color}
      py={[12, 16, 20]}
      px={[4, 5, 6]}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition="background-color 0.4s ease"
      viewport={{ once: true }}
    >
      <Container maxW="container.md">
        <Heading as="h2" size={['lg', 'xl']} mb={6} align="center">Education</Heading>
        <Box w="full" h="1px" bg="teal.400" mb={6} />
        <VStack align="start" spacing={8}>
        <Box>
          <HStack align="start" spacing={4} flexDirection={['column', 'column', 'row']}>
            <Box bg="white" p={2} borderRadius="md" w={['60px', '70px', '80px']} h={['60px', '70px', '80px']} display="flex" alignItems="center" justifyContent="center" border="1px solid #e2e8f0" flexShrink={0}>
              <Image src="images/uitm.png" alt="UiTM Shah Alam" boxSize={['40px', '48px', '56px']} objectFit="contain" />
            </Box>
            <VStack align="start" spacing={1}>
              <Heading as="h3" size={['sm', 'md']}>Universiti Teknologi MARA (UiTM) | Shah Alam, Selangor</Heading>
              <Text fontSize={['xs', 'sm']} color={roleColor} fontStyle="italic" fontWeight="semibold">
                Bachelor in Information Technology (Hons.) | CGPA : 3.34
              </Text>
              <Text fontSize={['xs', 'sm']} color="teal.400">Oct 2021 – Jan 2025</Text>
            </VStack>
          </HStack>
          <UnorderedList spacing={1} pl={4} mt={2} fontSize={['xs', 'sm']}>
            <ListItem>
                Developed an IoT-based Smart Clothes Hanger system for Final Year Project utilizing Java and C++ with Firebase.
            </ListItem>
            <ListItem>
                Awarded Bronze in the National Innovation & Invention Competition (NIICE2022).
            </ListItem>
            <ListItem>
                Served as Secretary for Service Learning Malaysia-University for Society (SULAM).
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <HStack align="start" spacing={4} flexDirection={['column', 'column', 'row']}>
            <Box bg="white" p={2} borderRadius="md" w={['60px', '70px', '80px']} h={['60px', '70px', '80px']} display="flex" alignItems="center" justifyContent="center" border="1px solid #e2e8f0" flexShrink={0}>
              <Image src="images/uitm.png" alt="UiTM Jengka" boxSize={['40px', '48px', '56px']} objectFit="contain" />
            </Box>
            <VStack align="start" spacing={1}>
              <Heading as="h3" size={['sm', 'md']}>Universiti Teknologi MARA (UiTM) | Bandar Jengka, Pahang </Heading>
              <Text fontSize={['xs', 'sm']} color={roleColor} fontStyle="italic" fontWeight="semibold">
                Diploma in Civil Engineering | CPGA : 2.69
              </Text>
              <Text fontSize={['xs', 'sm']} color="teal.400">May 2017 – Feb 2021</Text>
            </VStack>
          </HStack>
          <UnorderedList spacing={1} pl={4} mt={2} fontSize={['xs', 'sm']}>
            <ListItem>
                Developed foundational skills in structural design and technical documentation.
            </ListItem>
            <ListItem>
                Participated in the CeFest technical showcase to present city and urban layout models.
            </ListItem>
            <ListItem>
                Completed a 4-month internship focusing on AutoCAD and structural calculations.
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
      </Container>
    </MotionBox>
  );
}

export default Education;
