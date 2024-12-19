'use client';

import React, { useState } from 'react';
import { Box, Button, Input, VStack, HStack, Text, useToast } from '@chakra-ui/react';
import { Send, AlertTriangle } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [triageStatus, setTriageStatus] = useState<'emergency' | 'urgent' | 'regular' | null>(null);
  const toast = useToast();

  const classifyMessage = async (message: string) => {
    const keywords = {
      emergency: ['suicide', 'kill', 'die', 'hurt', 'emergency'],
      urgent: ['anxiety', 'panic', 'scared', 'urgent', 'help'],
    };

    const lowercaseMsg = message.toLowerCase();
    
    if (keywords.emergency.some(word => lowercaseMsg.includes(word))) {
      return 'emergency';
    } else if (keywords.urgent.some(word => lowercaseMsg.includes(word))) {
      return 'urgent';
    }
    return 'regular';
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      sender: 'user' as const,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);

    const classification = await classifyMessage(input);
    setTriageStatus(classification);

    switch (classification) {
      case 'emergency':
        toast({
          title: "Emergency Support Activated",
          description: "Connecting you with a crisis counselor immediately.",
          status: "error",
          duration: null,
          isClosable: false,
        });
        break;
      case 'urgent':
        toast({
          title: "Priority Support",
          description: "A counselor will be with you shortly.",
          status: "warning",
          duration: 5000,
        });
        break;
      default:
        toast({
          title: "Message Received",
          description: "We'll schedule a counseling session for you.",
          status: "info",
          duration: 5000,
        });
    }

    const systemResponse = {
      text: getSystemResponse(classification),
      sender: 'system' as const,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, systemResponse]);
    
    setInput('');
  };

  const getSystemResponse = (classification: 'emergency' | 'urgent' | 'regular') => {
    switch (classification) {
      case 'emergency':
        return "We're connecting you with a crisis counselor immediately. Please stay with us.";
      case 'urgent':
        return "We understand you need help soon. A counselor will be with you shortly.";
      default:
        return "Thank you for reaching out. We'll schedule a session with a counselor.";
    }
  };

  return (
    <Box maxW="2xl" mx="auto" h="600px" borderRadius="lg" boxShadow="lg" bg="white">
      {triageStatus === 'emergency' && (
        <Box bg="red.100" p={4} borderRadius="md" m={4}>
          <HStack>
            <AlertTriangle color="red" />
            <Box>
              <Text fontWeight="bold">Emergency Support Activated</Text>
              <Text fontSize="sm">Connecting you with a crisis counselor immediately.</Text>
            </Box>
          </HStack>
        </Box>
      )}
      
      <VStack h="full" spacing={0}>
        <Box flex={1} w="full" overflowY="auto" p={4}>
          {messages.map((msg, idx) => (
            <HStack key={idx} justify={msg.sender === 'user' ? 'flex-end' : 'flex-start'} mb={4}>
              <Box
                maxW="80%"
                bg={msg.sender === 'user' ? 'blue.500' : 'gray.100'}
                color={msg.sender === 'user' ? 'white' : 'black'}
                py={2}
                px={4}
                borderRadius="lg"
              >
                <Text>{msg.text}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        
        <HStack p={4} w="full" borderTopWidth={1}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            size="md"
          />
          <Button
            colorScheme="blue"
            onClick={handleSend}
            isDisabled={!input.trim()}
          >
            <Send size={20} />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ChatInterface;