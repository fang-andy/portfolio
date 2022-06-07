import {
  Container,
  Heading,
  Box,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container maxW="100%">
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I am a software engineer based in San Francisco, California!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andy Fang
          </Heading>
          <p> Software Engineer | Traveler | Coffee Connoisseur </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 5, md: 0 }}
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

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <p>Andy is a software engineer born and raised in San Francisco.
          He is currently working at LinkedIn as a Deal Desk Associate, but is in pursuit of software developement opportunities.
          He has a background in JavaScript, with extensive experience with React for the front-end, and
          Node/Express/Postgres/MongoDB for the back-end.</p>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Professional Experience
        </Heading>
        <BioSection>
          <BioYear>2018</BioYear>
          Deal Desk Associate at LinkedIn
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Credit Specialist at First Republic Bank
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Investment Analyst at Marcus & Millichap, a Commercial Real Estate Firm
        </BioSection>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2021</BioYear>
          Hack Reactor Advanced Software Engineering Immersive Program
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          University of California, Irvine - Business Economics
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page