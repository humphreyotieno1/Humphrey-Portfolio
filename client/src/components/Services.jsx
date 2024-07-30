import React from 'react';
import { Box, Container, Heading, VStack, SimpleGrid, Image, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Services = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box>
      <Container maxW="container.lg" py={20}>
        <VStack spacing={8}>
          <Heading>My Services</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <motion.div initial="hidden" animate="visible" variants={variants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Box borderWidth="1px" borderRadius="xl" overflow="hidden" boxShadow="lg">
                <Image src="/web.jpg" alt="Web Design" boxSize="100%" objectFit="cover" />
                <VStack p={4} alignItems="flex-start">
                  <Text fontWeight="bold" fontSize="xl">Website and Database Design</Text>
                  <Text>
                  I specialize in crafting visually appealing and intuitive websites that enhance user experience and solidify brand identity.
                  </Text>
                </VStack>
              </Box>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={variants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Box borderWidth="1px" borderRadius="xl" overflow="hidden" boxShadow="lg">
                <Image src="/dev.jpg" alt="Web Development" boxSize="100%" objectFit="cover" />
                <VStack p={4} alignItems="flex-start">
                  <Text fontWeight="bold" fontSize="xl">Web Development</Text>
                  <Text>
                  My passion lies in creating dynamic and interactive web applications that provide seamless and engaging digital experiences, enhancing user interaction and satisfaction.
                  </Text>
                </VStack>
              </Box>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={variants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Box borderWidth="1px" borderRadius="xl" overflow="hidden" boxShadow="lg">
                <Image src="/webapp.jpg" alt="Mobile Application Development" boxSize="100%" objectFit="cover" />
                <VStack p={4} alignItems="flex-start">
                  <Text fontWeight="bold" fontSize="xl">Web Application Development</Text>
                  <Text>
                    I create intuitive and feature-rich website applications that provide on-the-go solutions and enhance user convenience.
                  </Text>
                </VStack>
              </Box>
            </motion.div>
          </SimpleGrid>
          <Button colorScheme="teal" variant="outline" size="lg">Hire Me</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;
