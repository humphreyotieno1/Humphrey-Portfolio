import React from 'react';
import { Box, Container, Heading, VStack, Text, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={20}>
        <VStack spacing={8}>
          <Heading>Contact Me</Heading>
          <Text>If you would like to get in touch, please feel free to send me a message!</Text>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="teal" variant="solid">Send Message</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
