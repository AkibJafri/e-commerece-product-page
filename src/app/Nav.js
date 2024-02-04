import React from 'react'
import {
  Box,
  Flex,
  Link,
  Spacer,
  Image,
  Container,
  Divider,
} from '@chakra-ui/react'
export default function Nav() {
  return (
    <Container maxW={{ base: '7xl', md: '7xl' }}>
      <Box
        bg="white"
        // p={{ base: '0', lg: '33' }}
        mt={{ base: '4', lg: '4' }}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Flex align="center" ml={'8'} color={'#aeafb3'} mr={8}>
          <Image
            src="/icon-menu.svg"
            alt=""
            display={{ base: 'block', md: 'none' }}
          />
          <Image src="logo.svg" alt="" ml={3} />
          <Flex display={{ base: 'none', md: 'block' }}>
            <Link ml={8}>Collection</Link>
            <Link ml={4}>Men</Link>
            <Link ml={4}>Women</Link>
            <Link ml={4}>About</Link>
            <Link ml={4}>Contact</Link>
          </Flex>
        </Flex>
        <Flex>
          <Flex alignItems={'center'}>
            <Link mr={{ base: '4', md: '8' }}>
              <Image
                src="/icon-cart.svg"
                alt=""
                h={{ base: '6', md: '8' }}
                w={{ base: '6', md: '8' }}
              />
            </Link>
            <Link mr={{ base: '4', md: '14' }}>
              <Image
                src="/image-avatar.png"
                alt=""
                h={{ base: '6', md: '14' }}
                w={{ base: '6', md: '14' }}
              />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}
