import React, { useState } from 'react';
import { Box, Container, Heading, VStack, Text, Input, Textarea, Button, useToast, FormControl, FormLabel } from '@chakra-ui/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreed: false,
    attachment: null,
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      attachment: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message, attachment } = formData;

    if (!firstName || !lastName || !email || !message) {
      toast({
        title: "Error",
        description: "All required fields must be filled out.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      if (key === 'attachment' && !attachment) continue;  // Skip attachment if not provided
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('https://humphrey-portfolio-1.onrender.com/contact', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: result.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phoneNumber: '',
          message: '',
          agreed: false,
          attachment: null,
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
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
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            isRequired
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            isRequired
          />
          <Input
            placeholder="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            isRequired
          />
          <Input
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
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
              bg="teal"
              _hover={{ bg: "green.200" }}
              cursor="pointer"
            >
              Choose File
            </Button>
            {formData.attachment && <Text mt={2}>{formData.attachment.name}</Text>}
          </FormControl>
          <Button colorScheme="teal" variant="solid" type="submit">Send Message</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
