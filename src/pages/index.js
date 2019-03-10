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
      flexDirection="column"
    >
      <Flex flexDirection="column" alignItems="stretch" width="25rem" mx="auto">
        <Box>
          <Text fontSize={3} color="white" fontSize={5} fontWeight="500" mb={3}>
            Here you can login
          </Text>
          <Text fontSize={3} color="subheading" fontSize={3}>
            Let's Join Us
          </Text>
        </Box>
        <Flex alignItems="stretch" mt={4} flexDirection="column">
          <Input label="Email" type="email" mb={3} />
          <Input label="Password" type="password" mb={3} />
        </Flex>
      </Flex>
    </Container>
  </Layout>
)

export default IndexPage
