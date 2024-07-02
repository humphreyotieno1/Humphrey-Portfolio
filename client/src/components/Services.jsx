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
                  <Text fontWeight="bold" fontSize="xl">Web Design</Text>
                  <Text>
                    I specialize in designing visually appealing and user-friendly websites that not only captivate audiences but also enhance brand identity.
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
                    My passion lies in developing dynamic and interactive web applications that deliver seamless digital experiences and drive user engagement.
                  </Text>
                </VStack>
              </Box>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={variants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Box borderWidth="1px" borderRadius="xl" overflow="hidden" boxShadow="lg">
                <Image src="/db.jpg" alt="Mobile Application Development" boxSize="100%" objectFit="cover" />
                <VStack p={4} alignItems="flex-start">
                  <Text fontWeight="bold" fontSize="xl">Mobile Application Development</Text>
                  <Text>
                    I create intuitive and feature-rich mobile applications that provide on-the-go solutions and enhance user convenience.
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
