import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
// import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Projects = () => {
  return (
    <Container maxW="100%">
      <Heading as="h3" fontsize={20} mb={4}>
        Projects
      </Heading>
    </Container>
  )
}

export default Projects