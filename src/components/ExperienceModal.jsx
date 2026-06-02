import { motion } from 'framer-motion';
import React from 'react';
import { Box, Heading, Text, useColorModeValue, UnorderedList, ListItem, VStack, HStack, Image, Container } from '@chakra-ui/react';

const MotionBox = motion(Box);

function Experience() {
  const bg = useColorModeValue('gray.200', 'gray.900');
  const color = useColorModeValue('gray.800', 'gray.100');
  const roleColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox
      as="section"
      id="experience"
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
        <Heading as="h2" size={['lg', 'xl']} mb={6} align="center">Work Experience</Heading>
        <Box w="full" h="1px" bg="teal.400" mb={6} />
        <VStack align="start" spacing={8}>
        <Box>
          <HStack align="start" spacing={4} flexDirection={['column', 'column', 'row']}>
            <Box bg="white" p={2} borderRadius="md" w={['60px', '70px', '80px']} h={['60px', '70px', '80px']} display="flex" alignItems="center" justifyContent="center" border="1px solid #e2e8f0" flexShrink={0}>
              <Image src="/images/heitech.jpg" alt="Heitech Padu Berhad" boxSize={['40px', '48px', '56px']} objectFit="contain" />
            </Box>
            <VStack align="start" spacing={1}>
              <Heading as="h3" size={['sm', 'md']}>Heitech Padu Berhad | Cyberjaya, Selangor</Heading>
              <Text fontSize={['xs', 'sm']} color={roleColor} fontStyle="italic" fontWeight="semibold">
                Software Developer
              </Text>
              <Text fontSize={['xs', 'sm']} color="teal.400">Sep 2025 – current</Text>
            </VStack>
          </HStack>
          <UnorderedList spacing={1} pl={4} mt={2} fontSize={['xs', 'sm']}>
            <ListItem>
                Executed the modernization of legacy infrastructure by migrating critical modules from COBOL to Java using Spring Tool Suite (STS). 
            </ListItem>
            <ListItem>
                Conducted rigorous API testing and debugging via Postman while validating database integrity through DBeaver to ensure accurate data retrieval.
            </ListItem>
            <ListItem>
                Managed source code versioning and project repositories by committing updates to GitLab via Git Bash and Spring Tool Suite (STS).
            </ListItem>
            <ListItem>
                Collaborated with cross-functional teams including the Application Development Manager (ADM) and System Analysts to align on technical requirements.
            </ListItem>
            <ListItem>
                Contributed to a high-impact national digital modernization project by implementing backend services and managing complex database schemas.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <HStack align="start" spacing={4} flexDirection={['column', 'column', 'row']}>
            <Box bg="white" p={2} borderRadius="md" w={['60px', '70px', '80px']} h={['60px', '70px', '80px']} display="flex" alignItems="center" justifyContent="center" border="1px solid #e2e8f0" flexShrink={0}>
              <Image src="/images/tulipresources.jpeg" alt="Tulip Resources" boxSize={['40px', '48px', '56px']} objectFit="contain" />
            </Box>
            <VStack align="start" spacing={1}>
              <Heading as="h3" size={['sm', 'md']}>Tulip Resources Sdn Bhd | Bangsar, Kuala Lumpur</Heading>
              <Text fontSize={['xs', 'sm']} color={roleColor} fontStyle="italic" fontWeight="semibold">
                Protege Programmer
              </Text>
              <Text fontSize={['xs', 'sm']} color="teal.400">Apr 2025 – Sep 2025</Text>
            </VStack>
          </HStack>
          <UnorderedList spacing={1} pl={4} mt={2} fontSize={['xs', 'sm']}>
            <ListItem>
                Translated business requirements into comprehensive technical documentation and test scripts for the IRIS project. 
            </ListItem>
            <ListItem>
                Facilitated the conversion of User Acceptance Testing (UAT) results into standardized training manuals and final acceptance documentation.
            </ListItem>
            <ListItem>
                Participated in project lifecycle meetings for the HS-WiM system to engage with clients and refine technical requirements.
            </ListItem>
            <ListItem>
                Utilized Redmine for defect tracking and end-user testing to ensure applications met all functional requirements prior to deployment.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <HStack align="start" spacing={4} flexDirection={['column', 'column', 'row']}>
            <Box bg="white" p={2} borderRadius="md" w={['60px', '70px', '80px']} h={['60px', '70px', '80px']} display="flex" alignItems="center" justifyContent="center" border="1px solid #e2e8f0" flexShrink={0}>
              <Image src="/images/ppas.png" alt="PPAS" boxSize={['40px', '48px', '56px']} objectFit="contain" />
            </Box>
            <VStack align="start" spacing={1}>
              <Heading as="h3" size={['sm', 'md']}>Selangor Public Library Corporation (PPAS) | Shah Alam, Selangor</Heading>
              <Text fontSize={['xs', 'sm']} color={roleColor} fontStyle="italic" fontWeight="semibold">
                Information Technology Intern
              </Text>
              <Text fontSize={['xs', 'sm']} color="teal.400">Sep 2024 – Jan 2025</Text>
            </VStack>
          </HStack>
          <UnorderedList spacing={1} pl={4} mt={2} fontSize={['xs', 'sm']}>
            <ListItem>
                Developed a custom attendance system to streamline operational workflows and demonstratetechnical problem-solving. 
            </ListItem>
            <ListItem>
                Designed and built an iOS application during specialized technical training to expand mobile development expertise.
            </ListItem>
            <ListItem>
                Played a key role in maintaining and optimizing digital infrastructure to ensure seamless system performance and user satisfaction.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <HStack align="start" spacing={4} flexDirection={['column', 'column', 'row']}>
            <Box bg="white" p={2} borderRadius="md" w={['60px', '70px', '80px']} h={['60px', '70px', '80px']} display="flex" alignItems="center" justifyContent="center" border="1px solid #e2e8f0" flexShrink={0}>
              <Image src="/images/perundingshahda.jpg" alt="Perunding Shahda" boxSize={['40px', '48px', '56px']} objectFit="contain" />
            </Box>
            <VStack align="start" spacing={1}>
              <Heading as="h3" size={['sm', 'md']}>Perunding Shahda | Alor Setar, Kedah</Heading>
              <Text fontSize={['xs', 'sm']} color={roleColor} fontStyle="italic" fontWeight="semibold">
                Civil Engineer Intern
              </Text>
              <Text fontSize={['xs', 'sm']} color="teal.400">Oct 2020 – Feb 2021</Text>
            </VStack>
          </HStack>
          <UnorderedList spacing={1} pl={4} mt={2} fontSize={['xs', 'sm']}>
            <ListItem>
                Utilized specialized engineering software (ESTeem) to perform structural calculations and translate technical data into precise digital layout plans via AutoCAD.
            </ListItem>
            <ListItem>
                Conducted on-site surveys and inspections to monitor project progress and ensure adherence to structural design specifications.
            </ListItem>
            <ListItem>
                Managed technical documentation and design exports to facilitate accurate printing and project execution.
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
      </Container>
    </MotionBox>
  );
}

export default Experience;
