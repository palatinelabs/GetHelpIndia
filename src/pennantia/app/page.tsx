'use client';

import React from 'react';
import { Box, Button, Heading, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const Home = () => {
  return (
    <Box className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <Heading as="h1" size="xl" mb={4} className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        You Are Not Alone
      </Heading>
      
      <Text mb={8} className="mb-8 text-xl text-gray-600">
        We understand you&apos;re going through a tough time. Help is here.
        Please choose one of the options below to connect with someone who cares.
      </Text>
      
      <Stack direction={['column', 'row']} spacing={4} align="center">
        <Link href="/chat" passHref>
          <Button colorScheme="teal" size="lg">
            Start Chat Support
          </Button>
        </Link>
        
        <Button
          as="a"
          href="tel:+1-800-XXX-XXXX"
          colorScheme="blue"
          size="lg"
          leftIcon={<Phone />}
        >
          Call Now
        </Button>
      </Stack>
      
      <Text mt={6} fontSize="sm" color="gray.500">
        All conversations are confidential and handled by trained professionals
      </Text>
    </Box>
  );
};

export default Home;