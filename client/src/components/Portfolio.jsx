import React from 'react';
import { Box, Container, Heading, SimpleGrid, Image, Text, VStack, Button, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    // {
    //   id: 1,
    //   image: '/geocel.png',
    //   title: 'Geocel Enterprises Ltd',
    //   description: 'The Geocel Enterprises web application project aims to develop a comprehensive online platform that will help the company effectively market its goods and reach a wider range of customers. The website is designed to enable customers to interactively explore the various products and services offered, making informed purchasing decisions and comparing costs.',
    //   link: 'https://geocel-enterprises-ltd.onrender.com/'
    // },
    {
      id: 1,
      image: '/kingdom.png',
      title: 'Kingdom Call',
      description: 'A dynamic and spiritually enriching platform designed to connect, inspire, and support the community in their faith journey. This project is created to provide a seamless user experience for visitors seeking information, inspiration, and engagement with the ministry.',
      link: 'https://kingdom-call.vercel.app/'
    },
    {
      id: 2,
      image: 'legalizeme.png',
      title: 'LegalizeMe',
      description: 'LegalizeMe is a legal services web application designed to simplify the process of accessing legal assistance and services. The platform aims to connect individuals and businesses with legal professionals, providing a seamless and efficient way to address their legal needs.',
      link: 'https://legalize-me.vercel.app/'
    },
    {
      id: 3,
      image: '/data.jpg',
      title: 'TechVerse',
      description: 'TechVerse is an application (still in the works) that is designed to be a platform where students can get authentic and verified information/inspiration/advice about the tech space. The information will be in the form of videos, audio, or articles/blogs created by the Moringa school community.',
      link: 'https://techverse-1.onrender.com'
    },
    {
      id: 4,
      image: '/db.jpg',
      title: 'The Bookstore',
      description: 'The Bookstore is a Python-based application designed to simplify the management of books, authors, and courses in a library setting. It offers a user-friendly interface for librarians or administrators to perform various tasks such as adding new books, viewing existing books, deleting books, managing authors, and managing courses.',
      link: 'https://github.com/humphreyotieno1/Bookstore'
    },
    {
      id: 5,
      image: '/homepage.png',
      title: 'TravelXperience',
      description: 'TravelXperience is a modern travel and tourism web application designed to revolutionize the way people plan, book, and experience their travel adventures. With its user-friendly interface, extensive features, and cutting-edge technologies, TravelXperience aims to provide travelers with a seamless and unforgettable journey from start to finish.',
      link: 'https://github.com/humphreyotieno1/TravelXperience'
    },
  ];

  const MotionBox = motion(Box);

  return (
    <Box>
      <Container maxW="container.lg" py={20}>
        <VStack spacing={8}>
          <Heading>My Portfolio</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {projects.map((project) => (
              <MotionBox
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                borderWidth="1px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                width="100%"
                maxW="md"  // Set to "md" for a wider card
                height="auto"  // Allow height to be adjusted automatically based on content
                display="flex"
                flexDirection="column"
              >
                <Image src={project.image} alt={project.title} objectFit="cover" height="200px" width="100%" />
                <Box p={4} flex="1" display="flex" flexDirection="column">
                  <Text mt={4} fontWeight="bold" fontSize="xl" textAlign="center">
                    {project.title}
                  </Text>
                  <Text mt={4} flex="1">
                    {project.description}
                  </Text>
                  <Button
                    mt={4}
                    variant="outline"
                    borderColor="teal.500"
                    color="teal.500"
                    _hover={{ bg: 'teal.500', color: 'white' }}
                    width="100%"
                    alignSelf="center"
                  >
                    <Link href={project.link} isExternal>
                      View Project
                    </Link>
                  </Button>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Portfolio;
