import React, { useState } from 'react';
import { Box, Container, Heading, SimpleGrid, Image, Text, VStack, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            image: '/alx.png',
            title: 'ALX Software Engineering Back-End',
            description: 'Completed a 12-month intensive software engineering program at ALX Africa, focusing on 9 months of foundational learning and 3 months of specialization. Graduated on 26th July 2024.'
        },
        {
            id: 2,
            image: '/fullstack.jpg',
            title: 'Moringa Full-Stack Software Engineering',
            description: 'Graduated from a rigorous 6-month Full Stack software engineering program at Moringa School, gaining comprehensive skills in both front-end and back-end development. Graduated on 2nd August 2024.'
        },
        {
            id: 3,
            image: '/mozilla.png',
            title: 'Mozilla Web Literacy Foundational Course',
            description: 'Participated in a foundational web literacy workshop conducted by Mozilla at Moringa School, enhancing skills in web technologies and digital literacy.'
        }
    ];


    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleView = (achievement) => {
        setSelectedAchievement(achievement);
        onOpen();
    };

    const MotionBox = motion(Box);

    return (
        <Box>
            <Container maxW="container.lg" py={20}>
                <VStack spacing={8}>
                    <Heading>My Achievements</Heading>
                    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                        {achievements.map((achievement) => (
                            <MotionBox
                                key={achievement.id}
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
                                maxW="md"
                                height="400px"  // Set a fixed height for all cards
                                display="flex"
                                flexDirection="column"
                            >
                                <Image src={achievement.image} alt={achievement.title} objectFit="cover" height="200px" width="100%" />
                                <Box p={4} flex="1" display="flex" flexDirection="column">
                                    <Text mt={4} fontWeight="bold" fontSize="xl" textAlign="center">
                                        {achievement.title}
                                    </Text>
                                    <Text mt={4} flex="1" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                                        {achievement.description}
                                    </Text>
                                    <Button
                                        mt={4}
                                        variant="outline"
                                        colorScheme="teal"
                                        onClick={() => handleView(achievement)}
                                        _hover={{ bg: 'teal.500', color: 'white' }}
                                        borderColor="teal.500"
                                        color="teal.500"
                                        alignSelf="center"
                                    >
                                        View
                                    </Button>
                                </Box>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </VStack>

                {selectedAchievement && (
                    <Modal isOpen={isOpen} onClose={onClose} size="xl">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{selectedAchievement.title}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Image src={selectedAchievement.image} alt={selectedAchievement.title} objectFit="cover" width="100%" />
                                <Text mt={4}>{selectedAchievement.description}</Text>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme="teal" mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                )}
            </Container>
        </Box>
    );
};

export default Achievements;
