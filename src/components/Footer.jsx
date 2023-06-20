import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>

      <Stack direction={['column', 'row']}>

        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['cneter','left']}>
            Hello Friends
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email here...."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
              _focusVisible={'none'}
            />
            <Button
              padding={0}
              color={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Club
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'} marginBottom={'10px'}>Social Media</Heading>

            <Button variant={'link'} colorScheme={'whiteAlpha'}>
              <AiFillLinkedin fontSize={'30px'} />
              <a target='/' href="https://www.linkedin.com/in/jamshed-khan-148a421b5/">
                <Text color={'white'} fontSize={'20px'}>Linkedin</Text>
              </a>
            </Button>

            <Button variant={'link'} colorScheme={'whiteAlpha'}>
              <AiFillGithub fontSize={'30px'} />
              <a target='/' href="https://github.com/Khanjamshed007">
              <Text color={'white'} fontSize={'20px'}>Github</Text>
              </a>
            </Button>

        </VStack>

      </Stack>
    </Box>
  );
};

export default Footer;
