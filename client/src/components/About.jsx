import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  return (
    <Box bg="gray.100">
      <Container maxW="container.lg" py={20}>
        <VStack spacing={8} align="stretch" textAlign="center">
          <Heading>About Me</Heading>
          <Text fontSize="xl">Full-Stack Software Engineer</Text>
          <Box mx="auto" width="100%" maxWidth="800px"> {/* Center the carousel */}
            <Carousel
              showStatus={false}
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={5000}
              transitionTime={500}
              stopOnHover={false}
              emulateTouch
              responsive={{
                superLargeDesktop: { // For large screens
                  breakpoint: { max: 4000, min: 3000 },
                  items: 3
                },
                desktop: { // For desktops
                  breakpoint: { max: 3000, min: 1024 },
                  items: 2
                },
                tablet: { // For tablets
                  breakpoint: { max: 1024, min: 464 },
                  items: 1
                },
                mobile: { // For mobile
                  breakpoint: { max: 464, min: 0 },
                  items: 1
                }
              }}
            >
              <Box p={6} bg="white" shadow="md" borderRadius="xl" width="80%" maxWidth="800px">
                <Text fontSize="xl">
                  As a passionate and dedicated full-stack developer, I am committed to creating innovative and user-centric web applications that leave a lasting impression. With a solid foundation in both front-end and back-end technologies, I strive to build seamless digital experiences that exceed expectations.
                </Text>
              </Box>
              <Box p={6} bg="white" shadow="md" borderRadius="xl" width="80%" maxWidth="800px">
                <Text fontSize="xl">
                  My skill set includes proficiency in HTML, CSS, JavaScript, ReactJS, MySQL, Python, and C, among others. Whether it's crafting responsive layouts, implementing interactive features, or optimizing database performance, I am well-versed in various development concepts and techniques.
                </Text>
              </Box>
              <Box p={6} bg="white" shadow="md" borderRadius="xl" width="80%" maxWidth="800px">
                <Text fontSize="xl">
                  Join me on this exciting adventure, where every line of code represents a step towards mastery and the realization of digital solutions that make a meaningful impact. Together, let's shape the future of technology and create software that inspires and empowers.
                </Text>
              </Box>
            </Carousel>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
