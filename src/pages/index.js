import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, Flex, Box, Text } from "rebass"
import Container from "../components/Container"
import Input from "../components/Input"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Container
      bg="background"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex bg="white" flexDirection="column" alignItems="stretch">
        <Box>
          <Text fontSize={3} color="white" fontSize={5} fontWeight="500" mb={3}>
            Here you can login
          </Text>
          <Text fontSize={3} color="subheading" fontSize={3}>
            Let's Join Us
          </Text>
        </Box>
        <Flex alignItems="stretch" mt={4} flexDirection="column">
          <Input mb={3} />
          <Input mb={3} />
        </Flex>
      </Flex>
    </Container>
  </Layout>
)

export default IndexPage
