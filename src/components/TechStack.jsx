import { Box, Container, Heading, VStack, HStack, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import { SiAngular, SiPhp, SiPython, SiCplusplus, SiSwift, SiDocker, SiGit, SiPostman, SiDbeaver, 
  SiArduino, SiPostgresql, SiFirebase, SiSpringboot, SiReact, SiNpm
} from 'react-icons/si';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const skillsData = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Java (Spring Boot)", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Swift (SwiftUI)", icon: SiSwift, color: "#FA7343" },
      { name: "React", icon: SiReact, color: "#61DBFB" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL (DB2, Oracle, MySQL)", icon: SiPostgresql, color: "#336791" },
      { name: "Firebase (Real-time DB)", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git (GitLab)", icon: SiGit, color: "#F1502F" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "DBeaver", icon: SiDbeaver, color: "#336791" },
      { name: "Arduino IDE", icon: SiArduino, color: "#00979D" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
    ],
  },
];

function TechStack() {
  const bg = useColorModeValue('gray.300', 'gray.1000');
  const color = useColorModeValue('gray.800', 'gray.100');
  const cardBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      as="section"
      id="techstack"
      bg={bg}
      color={color}
      py={[12, 16, 20]}
      px={[4, 5, 6]}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition="background-color 0.4s ease"
      viewport={{ once: true }}
    >
      <Container maxW="container.lg">
        <Heading as="h2" size={['lg', 'xl']} mb={6} align="center">Skill</Heading>
        <Box w="full" h="1px" bg="teal.400" mb={[6, 8, 10]} />
        <Flex wrap="wrap" justify="center" gap={[3, 4, 6]}>
          {skillsData.map((category, catIndex) => (
            <MotionBox
              key={catIndex}
              bg={cardBg}
              p={[4, 5, 6]}
              borderRadius="lg"
              boxShadow="md"
              _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: catIndex * 0.1 }}
              w={{ base: "full", md: "calc(50% - 8px)", lg: "calc(33.333% - 16px)" }}
              maxW="400px"
            >
              <Heading as="h3" size={['sm', 'md']} mb={4} color="teal.500" textAlign="center">
                {category.category}
              </Heading>
              <VStack spacing={3} align="start">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <HStack key={skillIndex} spacing={3} w="full">
                      <Icon size={20} color={skill.color} />
                      <Text fontSize={['xs', 'sm']} fontWeight="medium">{skill.name}</Text>
                    </HStack>
                  );
                })}
              </VStack>
            </MotionBox>
          ))}
        </Flex>
      </Container>
    </MotionBox>
  );
}

export default TechStack;
