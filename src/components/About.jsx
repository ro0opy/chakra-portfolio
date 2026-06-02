import { motion } from 'framer-motion';
import { Box, Button, Heading, Text, Container, useColorModeValue, VStack } from '@chakra-ui/react';

const MotionBox = motion(Box);

function About() {
  const bg = useColorModeValue('gray.100', 'gray.1000');
  const color = useColorModeValue('gray.1000', 'gray.100');

  return (
    <MotionBox
      as="section"
      id="about"
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
        <Heading as="h2" size={['lg', 'xl']} mb={6} align="center">About Me</Heading>
        <Box w="full" h="1px" bg="teal.400" mb={6} />
        <VStack align="start" spacing={6}>
        <Text fontSize={['sm', 'md']} textAlign="justify" lineHeight="1.8">
          Hello! I'm Shazreen Affandi, a Software Developer dedicated to building scalable enterprise solutions and navigating complex digital transformations. With over a year of professional experience, I have transitioned from academic excellence at UiTM Shah Alam to high-stakes environments where I bridge the gap between legacy systems and modern architecture. My journey is defined by a commitment to technical precision and a passion for turning complex business requirements into efficient, production-ready code.
        </Text>
        <Text fontSize={['sm', 'md']} textAlign="justify" lineHeight="1.8">
          Currently, at Heitech Padu Berhad, I play a key role in a high-impact national digital modernization project. My daily focus involves the modernization of legacy infrastructure, specifically migrating complex logic into scalable Java and Spring Boot services. Beyond backend development, I am actively expanding my expertise into Angular and DevOps which consists of Docker and a little bit of Kubernetes to build a truly comprehensive full-stack profile.
        </Text>
        <Text fontSize={['sm', 'md']} textAlign="justify" lineHeight="1.8">
          My technical versatility spans several domains: Enterprise Modernization – migrating legacy systems and managing complex SQL (DB2) database schemas; Full-Stack Aspirations – combining robust Java backend logic with modern frontend frameworks and mobile development in Swift; and IoT Innovation – hands-on experience designing and deploying real-time synchronization systems using C++ and Firebase. I thrive on challenges that require both deep technical analysis and creative problem-solving, delivering impactful technology that solves real-world problems.
        </Text>
        </VStack>
        <Box mt={10} textAlign="center">
          <Text fontSize={['xs', 'sm']} mb={2} fontStyle="italic">
            Note : Explore my full resume here.
          </Text>
          <Button
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            size={['md', 'lg']}
          >
          View Resume
          </Button>
        </Box>
      </Container>
    </MotionBox>
  );
}

export default About;
