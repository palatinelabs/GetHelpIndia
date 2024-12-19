'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import ChatInterface from '../components/ChatInterface';// Updated import path

export default function ChatPage() {
  return (
    <Box className="container mx-auto p-4">
      <ChatInterface />
    </Box>
  );

}