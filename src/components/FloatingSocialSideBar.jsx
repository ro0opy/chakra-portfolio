import { Box, VStack, Link, IconButton, useColorModeValue, useToast, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

function FloatingSocialSidebar() {
  const bg = useColorModeValue('whiteAlpha.900', 'gray.800');
  const shadow = useColorModeValue('md', 'dark-lg');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const toast = useToast();

  // Obfuscated email generation (Hides it from basic web scrapers)
  const handleEmailCopy = () => {
    const user = "shazreentechwork";
    const domain = "gmail.com";
    const emailAddress = `${user}@${domain}`;

    // Use modern Clipboard API if available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailAddress).then(() => {
        toast({
          title: "Email Copied!",
          description: `${emailAddress} has been copied to your clipboard.`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      }).catch(() => {
        fallbackCopyToClipboard(emailAddress);
      });
    } else {
      // Fallback for older browsers or insecure contexts
      fallbackCopyToClipboard(emailAddress);
    }
  };

  // Fallback copy method for browsers without Clipboard API
  const fallbackCopyToClipboard = (email) => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      toast({
        title: "Email Copied!",
        description: `${email} has been copied to your clipboard.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: `Email: ${email}`,
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    }
    document.body.removeChild(textArea);
  };

  // Desktop version - fixed on the right side
  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <Box
        display={['none', 'none', 'block']}
        position="fixed"
        right="4"
        top="50%"
        transform="translateY(-50%)"
        bg={bg}
        p={3}
        borderRadius="lg"
        boxShadow={shadow}
        borderWidth="1px"
        borderColor={borderColor}
        zIndex={1000}
      >
        <VStack spacing={4}>
          <Link href="https://github.com/ro0opy" isExternal>
            <MotionIconButton
              icon={<FaGithub />}
              aria-label="GitHub"
              variant="ghost"
              size="lg"
              _hover={{ color: 'teal.400' }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>
          <Link href="https://linkedin.com/in/shazreen-affandi-0a0b04378" isExternal>
            <MotionIconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              variant="ghost"
              size="lg"
              _hover={{ color: 'teal.400' }}
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>

          <MotionIconButton
            onClick={handleEmailCopy}
            icon={<FaEnvelope />}
            aria-label="Copy Email"
            title="Copy Email to Clipboard"
            variant="ghost"
            size="lg"
            _hover={{ color: 'teal.400' }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          />
        </VStack>
      </Box>

      {/* Mobile Bottom Bar - Visible only on mobile */}
      <Box
        display={['flex', 'flex', 'none']}
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        bg={bg}
        borderTopWidth="1px"
        borderTopColor={borderColor}
        boxShadow={shadow}
        zIndex={1000}
        justifyContent="center"
      >
        <HStack spacing={4} p={3}>
          <Link href="https://github.com/ro0opy" isExternal>
            <MotionIconButton
              icon={<FaGithub />}
              aria-label="GitHub"
              variant="ghost"
              size="md"
              _hover={{ color: 'teal.400' }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>
          <Link href="https://linkedin.com/in/shazreen-affandi-0a0b04378" isExternal>
            <MotionIconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              variant="ghost"
              size="md"
              _hover={{ color: 'teal.400' }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>

          <MotionIconButton
            onClick={handleEmailCopy}
            icon={<FaEnvelope />}
            aria-label="Copy Email"
            title="Copy Email to Clipboard"
            variant="ghost"
            size="md"
            _hover={{ color: 'teal.400' }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </HStack>
      </Box>
    </>
  );
}

export default FloatingSocialSidebar;