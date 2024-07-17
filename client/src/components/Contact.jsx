import React, { useState } from 'react';
import { Box, Container, Heading, VStack, Text, Input, Textarea, Button, useToast, FormControl, FormLabel } from '@chakra-ui/react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('company', company);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('message', message);
    formData.append('agreed', agreed);
    if (attachment) {
      formData.append('attachment', attachment);
    }

    try {
      const response = await fetch('https://humphrey-portfolio-rho.vercel.app/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFirstName('');
        setLastName('');
        setCompany('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setAgreed(false);
        setAttachment(null);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Container maxW="container.lg" py={20}>
        <VStack spacing={8} as="form" onSubmit={handleSubmit} encType="multipart/form-data">
          <Heading>Contact Me</Heading>
          <Text>If you would like to get in touch, please feel free to send me a message!</Text>
          <Input 
            placeholder="First Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            isRequired
          />
          <Input 
            placeholder="Last Name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            isRequired
          />
          <Input 
            placeholder="Company" 
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <Input 
            placeholder="Email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
          />
          <Input 
            placeholder="Phone Number" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Textarea 
            placeholder="Your Message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isRequired
          />
          <FormControl>
            <FormLabel>Attachment</FormLabel>
            <Input 
              type="file"
              onChange={handleFileChange}
              display="none"
              id="fileInput"
            />
            <Button 
              as="label"
              htmlFor="fileInput"
              colorScheme="teal"
              variant="solid"
              bg="lightgreen"
              _hover={{ bg: "green.200" }}
              cursor="pointer"
            >
              Choose File
            </Button>
            {attachment && <Text mt={2}>{attachment.name}</Text>}
          </FormControl>
          <Button colorScheme="teal" variant="solid" type="submit">Send Message</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
