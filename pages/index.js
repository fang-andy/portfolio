import { Container, Heading, Box, Image } from '@chakra-ui/react'

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
          <p> Aspiring Engineer ( Coffee Connoisseur / Developer / Traveler )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/andy.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page