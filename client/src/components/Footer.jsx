import React from 'react';
import { Box, Container, SimpleGrid, VStack, Heading, Text, Link, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.800" color="gray.200" py={10} mt="auto" width="100%">
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 1, 3]} spacing={8}>
          <VStack align="start">
            <Heading fontSize="lg">Inspiration</Heading>
            <Text>
              At the core of this website lies a belief in the power of innovation and creativity to drive positive change.
            </Text>
            <Text>
              "The only way to do great work is to love what you do." - Steve Jobs
            </Text>
          </VStack>
          <VStack align="start">
            <Heading fontSize="lg">Contact</Heading>
            <Text>Email: humphreyotieno04@gmail.com</Text>
            <Text>Phone: +254741594147</Text>
          </VStack>
          <VStack align="start">
            <Heading fontSize="lg">Follow</Heading>
            <HStack spacing={4}>
              <Link href="https://facebook.com/yourprofile" isExternal>
                <FaFacebook size="1.5em" />
              </Link>
              <Link href="https://twitter.com/yourprofile" isExternal>
                <FaTwitter size="1.5em" />
              </Link>
              <Link href="https://instagram.com/yourprofile" isExternal>
                <FaInstagram size="1.5em" />
              </Link>
              <Link href="https://linkedin.com/in/yourprofile" isExternal>
                <FaLinkedin size="1.5em" />
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>
        <Text mt={8} textAlign="center">&copy; 2024. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
