import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Flex, Box, Text } from "rebass"
import Container from "../components/Container"
import Input from "../components/Input"
import Button from "../components/button"
import wave from "../images/Frame.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Flex
      css={{ position: "absolute" }}
      width={1}
      pr={5}
      pt={4}
      justifyContent="flex-end"
    >
      <Text fontSize={3} color="subheading" fontWeight="bold">
        Signup →
      </Text>
    </Flex>
    <Box width={1} css={{ position: "absolute", bottom: -120 }}>
      <img src={wave} width="100%" />
    </Box>
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
          <Text fontSize={3} color="subheading" fontSize={4}>
            Let's join us :)
          </Text>
        </Box>
        <Flex alignItems="stretch" mt={4} flexDirection="column" mb={3}>
          <Input label="Email" type="email" mb={3} />
          <Input label="Password" type="password" mb={3} />
        </Flex>
        <Button variant="primary" type="submit" mb={3}>
          LOGIN
        </Button>
        <Box mx="auto">
          <Text color="subheading">Forgot your password?</Text>
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default IndexPage
