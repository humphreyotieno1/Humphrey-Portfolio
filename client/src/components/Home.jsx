import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack, Link, Image, SimpleGrid } from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box flex="1" display={{ base: 'none', md: 'block' }}>
            <VStack spacing={6} alignItems="flex-start">
              <Heading>Welcome to my Portfolio Website</Heading>
              <Text fontSize="xl">Humphrey Otieno</Text>
              <Text fontSize="lg">Full-Stack Software Engineer</Text>
              <Text>
                Hello, I am Humphrey, a Full-Stack Software Developer currently on a journey of continuous learning and growth. Welcome to my portfolio!
              </Text>
              <HStack spacing={4}>
                <Link href="https://x.com/_Banta__" isExternal>
                  <FaTwitter size="2em" />
                </Link>
                <Link href="https://github.com/humphreyotieno1" isExternal>
                  <FaGithub size="2em" />
                </Link>
                <Link href="https://discordapp.com/users/1150702066721890336" isExternal>
                  <FaDiscord size="2em" />
                </Link>
                <Link href="https://www.linkedin.com/in/humphrey-otieno" isExternal>
                  <FaLinkedin size="2em" />
                </Link>
              </HStack>
              <Link href='https://t.ly/yOhrU' isExternal>
                <Button colorScheme="teal" variant="outline">Find CV</Button>
              </Link>
            </VStack>
          </Box>
          <Box flex="1">
            <Image src="/hum.jpg" alt="Humphrey Otieno" borderRadius="full" boxSize="200px" />
          </Box>
          <Box flex="1" display={{ base: 'block', md: 'none' }}>
            <VStack spacing={6} alignItems="flex-start">
              <Heading>Welcome to my Portfolio Website</Heading>
              <Text fontSize="xl">Humphrey Otieno</Text>
              <Text fontSize="lg">Full-Stack Software Engineer</Text>
              <Text>
                Hello, I am Humphrey, a Full-Stack Software Developer currently on a journey of continuous learning and growth. Welcome to my portfolio!
              </Text>
              <HStack spacing={4}>
                <Link href="https://x.com/_Banta__" isExternal>
                  <FaTwitter size="2em" />
                </Link>
                <Link href="https://github.com/humphreyotieno1" isExternal>
                  <FaGithub size="2em" />
                </Link>
                <Link href="https://discordapp.com/users/1150702066721890336" isExternal>
                  <FaDiscord size="2em" />
                </Link>
                <Link href="https://www.linkedin.com/in/humphrey-otieno" isExternal>
                  <FaLinkedin size="2em" />
                </Link>
              </HStack>
              <Link href='https://t.ly/yOhrU' isExternal>
                <Button colorScheme="teal" variant="outline">Find CV</Button>
              </Link>
            </VStack>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={20}>
          <MotionBox
            as={RouterLink} to="/about"
            bg="white"
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Heading fontSize="xl">About Me</Heading>
            <Text mt={4}>Discover more about my journey, skills, and experiences.</Text>
            <Button mt={4} colorScheme="teal">Learn More</Button>
          </MotionBox>

          <MotionBox
            as={RouterLink} to="/services"
            bg="white"
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Heading fontSize="xl">Services</Heading>
            <Text mt={4}>Explore the professional services I offer to help you succeed.</Text>
            <Button mt={4} colorScheme="teal">Learn More</Button>
          </MotionBox>

          <MotionBox
            as={RouterLink} to="/portfolio"
            bg="white"
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Heading fontSize="xl">Portfolio</Heading>
            <Text mt={4}>Take a look at some of the projects I've worked on.</Text>
            <Button mt={4} colorScheme="teal">Learn More</Button>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
