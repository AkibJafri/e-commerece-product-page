import { Box, Divider, Card } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
export default function Home() {
  return (
    <Box>
      <Nav />
      <Card mx={14} border=".2px" borderColor="gray.200">
        <Divider />
      </Card>
      <Hero />
    </Box>
  )
}
