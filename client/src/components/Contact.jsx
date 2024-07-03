import React, { useState } from 'react';
import { Box, Container, Heading, VStack, Text, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_kiy02zr', 'template_wydjz2d', templateParams)
      .then((response) => {
        toast({
          title: "Success",
          description: "Message sent successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box>
      <Container maxW="container.lg" py={20}>
        <VStack spacing={8} as="form" onSubmit={handleSubmit}>
          <Heading>Contact Me</Heading>
          <Text>If you would like to get in touch, please feel free to send me a message!</Text>
          <Input 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            isRequired
          />
          <Input 
            placeholder="Email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
          />
          <Textarea 
            placeholder="Your Message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isRequired
          />
          <Button colorScheme="teal" variant="solid" type="submit">Send Message</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
