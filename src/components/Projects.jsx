import { motion } from 'framer-motion';
import { Box, Heading, Text, VStack, Link, useColorModeValue, Container } from '@chakra-ui/react';

function Projects() {
  const cardBg = useColorModeValue('gray.300', 'gray.900');
  const bg = useColorModeValue('gray.200', 'gray.600');
  const color = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box as="section" id="projects" py={[8, 12, 16]} px={[4, 5, 6]} bg={bg} color={color}>
      <Container maxW="container.md">
        <Heading as="h2" size={['lg', 'xl']} mb={6} align="center">Personal/Group Project</Heading>
        <Box w="full" h="1px" bg="teal.400" mb={6} />
        <VStack spacing={6} align="stretch">
        <Link href="https://github.com/ro0opy/VirtualDIY-iOS-Application" isExternal _hover={{ textDecor: 'none' }}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Box borderWidth={1} p={[4, 5, 6]} borderRadius="md" bg={cardBg} _hover={{ shadow: 'lg' }}>
              <Heading as="h3" size={['sm', 'md']} mb={4}>VDA: Virtual DIY Assistant</Heading>
              <Text fontSize={['xs', 'sm']} textAlign="justify" lineHeight="1.6">
                Developed a native iOS application using Swift and Xcode designed to empower users to tackle complex DIY projects with confidence. As part of a collaborative group project during a hands-on internship, I contributed to building an interactive platform that provides real-time assistance and step-by-step guidance. The application focuses on lowering the barrier to entry for home repairs and creative builds by integrating interactive features that respond to user progress, ensuring a seamless and educational user experience.
              </Text>
            </Box>
          </motion.div>
        </Link>
        <Link href="https://github.com/ro0opy/QR-Code-Attendance-System" isExternal _hover={{ textDecor: 'none' }}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Box borderWidth={1} p={[4, 5, 6]} borderRadius="md" bg={cardBg} _hover={{ shadow: 'lg' }}>
              <Heading as="h3" size={['sm', 'md']} mb={4}>QR Code Attendance System</Heading>
              <Text fontSize={['xs', 'sm']} textAlign="justify" lineHeight="1.6">
                Developed a functional, automated solution to streamline visitor registration for training sessions held at the library lab. Created using Node.js and VS Code during the first half of my internship, this application replaced traditional manual logs with a digital QR code scanning workflow. The system was designed to improve administrative efficiency and ensure data accuracy by providing a modern, touchless interface for all training participants.
              </Text>
            </Box>
          </motion.div>
        </Link>
        <Link href="https://github.com/ro0opy/Clothassist-IoT-based-Clothes_Hanger-Mobile-Apps" isExternal _hover={{ textDecor: 'none' }}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Box borderWidth={1} p={[4, 5, 6]} borderRadius="md" bg={cardBg} _hover={{ shadow: 'lg' }}>
              <Heading as="h3" size={['sm', 'md']} mb={4}>Clothassist: IoT-based Smart Clothes Hanger Mobile Application</Heading>
              <Text fontSize={['xs', 'sm']} textAlign="justify" lineHeight="1.6">
                Developed a comprehensive IoT solution to automate household laundry management, designed and implemented using the Mobile Application Development Life Cycle (MADLC) methodology. The system utilizes Android Studio for the mobile interface, Firebase for real-time data synchronization, and Arduino IDE for hardware-level automation. The project focused heavily on user-centric design, ultimately achieving a 78.3% System Usability Scale (SUS) score, demonstrating its effectiveness and ease of use for the end-user.
              </Text>
            </Box>
          </motion.div>
        </Link>
        <Link href="https://github.com/ro0opy/Sticker4U-Prototype-Sticker-Shopping" isExternal _hover={{ textDecor: 'none' }}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Box borderWidth={1} p={[4, 5, 6]} borderRadius="md" bg={cardBg} _hover={{ shadow: 'lg' }}>
              <Heading as="h3" size={['sm', 'md']} mb={4}>Sticker4U: Prototype Sticker Online Shopping</Heading>
              <Text fontSize={['xs', 'sm']} textAlign="justify" lineHeight="1.6">
                Developed in collaboration with a three-member team, this project serves as a functional demonstration of a mobile online shopping platform. Built using Android Studio, the application leverages Firebase for backend services, including real-time data management and user authentication. The project focused on architecting a seamless user flow from product discovery to a prototype checkout process, showcasing technical proficiency in mobile UI design and cloud-based database integration.
              </Text>
            </Box>
          </motion.div>
        </Link>
        <Link href="https://github.com/ro0opy/Vancover-Canopy-Rental-Website" isExternal _hover={{ textDecor: 'none' }}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Box borderWidth={1} p={[4, 5, 6]} borderRadius="md" bg={cardBg} _hover={{ shadow: 'lg' }}>
              <Heading as="h3" size={['sm', 'md']} mb={4}>Vancover: Canopy Rental Service Web Application</Heading>
              <Text fontSize={['xs', 'sm']} textAlign="justify" lineHeight="1.6">
                Developed as a collaborative group project, Vancover is a specialized web platform designed to streamline the event rental process. Built using VS Code and Sublime Text, the application features a robust booking engine that allows users to select specific rental dates and locations through an intuitive interface. A core technical highlight is the automated online receipt generation system, which ensures transaction transparency and professional record-keeping. The backend was managed using phpMyAdmin, focusing on structured data architecture for handling user bookings and inventory management.
                </Text>
            </Box>
          </motion.div>
        </Link>
      </VStack>
      </Container>
    </Box>
  );
}

export default Projects;
