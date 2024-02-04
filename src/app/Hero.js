import React from 'react'
import {
  Image,
  CardBody,
  Card,
  Text,
  Stack,
  Heading,
  CardFooter,
  Divider,
  Box,
  Flex,
  SimpleGrid,
  Container,
  Button,
  ButtonGroup,
  HStack,
} from '@chakra-ui/react'
// import { FaFacebook, EmailIcon, PhoneIcon } from '@chakra-ui/button'
export default function Hero() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      mt={10}
      // mx={{ base: '0', md: '20' }}
    >
      <Container w={{ base: '100%', lg: 'md' }}>
        <Box position={'relative'}>
          <Image
            src="/icon-next.svg"
            alt=""
            position={'absolute'}
            zIndex={1}
            top={'50%'}
            left={'86%'}
            bgColor={'white'}
            rounded={'full'}
            p={3}
            display={{ base: 'block', md: 'none' }}
          />
          <Image
            src="/icon-previous.svg"
            alt=""
            position={'absolute'}
            zIndex={1}
            top={'50%'}
            left={'3%'}
            bgColor={'white'}
            rounded={'full'}
            p={3}
            display={{ base: 'block', md: 'none' }}
          />
          <Image
            src="image-product-1.jpg"
            alt="Green double couch with wooden legs'"
            rounded={{ base: 'none', md: 'md' }}
          />
        </Box>
        <Box mt={4} display={{ base: 'none', md: 'block' }}>
          <Box
            gap={6}
            justifyContent={'center'}
            cursor={'pointer'}
            display={'flex'}
          >
            <Image
              src="/image-product-1-thumbnail.jpg"
              alt=""
              w={'19%'}
              rounded={'lg'}
            />
            <Image
              src="/image-product-2-thumbnail.jpg"
              alt=""
              w={'19%'}
              rounded={'lg'}
            />
            <Image
              src="/image-product-3-thumbnail.jpg"
              alt=""
              w={'19%'}
              rounded={'lg'}
            />
            <Image
              src="/image-product-4-thumbnail.jpg"
              alt=""
              w={'19%'}
              rounded={'lg'}
            />
          </Box>
        </Box>
      </Container>
      <Container minW={{ base: 'sm', lg: 'xl' }}>
        <Box>
          <Stack mt="6" spacing="3">
            <Text color={'darkorange'} fontWeight={600} mb={1}>
              SNEAKER COMPANY
            </Text>
            <Heading size="2xl" fontWeight={'600'} mb={4}>
              Fall Limited Edition Sneakers
            </Heading>
            <Text color={'#aeafb3'}>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </Text>
            <ButtonGroup spacing="4">
              <Text fontWeight={'600'} fontSize="2xl" display={'flex'}>
                $125.00
              </Text>

              <Button
                fontWeight={'600'}
                display={'flex'}
                alignSelf={'center'}
                bg={'ghostwhite'}
                color={'yellowgreen'}
              >
                50%
              </Button>
            </ButtonGroup>
            <Text as="s" color={'#aeafb3'} mt={'-4'}>
              $250.00
            </Text>
          </Stack>
        </Box>
        <Box>
          <ButtonGroup spacing="2" mt={6}>
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button colorScheme="orange" px={'14'} color={'white'}>
              <Image mr={3} src="/icon-cart.svg" alt="" />
              Add to cart
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
    </SimpleGrid>
  )
}
