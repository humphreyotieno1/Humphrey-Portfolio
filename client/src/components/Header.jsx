import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, HStack, IconButton, useDisclosure, Button, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4} position="fixed" width="100%" zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link to="/">
            <Box ml={2} fontWeight="bold">HUMPHREY</Box>
          </Link>
        </Flex>
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }} justifyContent="center" flex="1">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
        <Button
          as={Link}
          to="/contact"
          display={{ base: 'none', md: 'block' }}
          colorScheme="teal"
          variant="outline"
          size="md"
          px={4}
          py={2}
          _hover={{ bg: 'teal.500', color: 'white' }}
          onClick={onClose}
        >
          Hire Me
        </Button>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link to="/" onClick={onClose}>Home</Link>
            <Link to="/about" onClick={onClose}>About Me</Link>
            <Link to="/services" onClick={onClose}>Services</Link>
            <Link to="/portfolio" onClick={onClose}>Portfolio</Link>
            <Link to="/contact" onClick={onClose}>Contact</Link>
            <Button
              as={Link}
              to="/contact"
              w="full"
              colorScheme="teal"
              variant="outline"
              size="md"
              px={4}
              py={2}
              _hover={{ bg: 'teal.500', color: 'white' }}
              onClick={onClose}
            >
              Hire Me
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
