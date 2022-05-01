import { Container, Heading, Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I am a full-stack developer based in San Francisco!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andy Fang
          </Heading>
          <p> Aspiring Engineer ( Coffee Connoisseur / Developer / Lover of Food )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page