import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box, Text, Image } from "rebass"
import Container from "../components/Container"
import Input from "../components/Input"
import Button from "../components/button"
import wave from "../images/Frame.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Container
      bg="background"
      height="100vh"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex
        css={{ position: "absolute", top: 0 }}
        width={1}
        pr={5}
        pt={4}
        justifyContent="flex-end"
      >
        <Text fontSize={3} color="subheading" fontWeight="bold">
          Signup →
        </Text>
      </Flex>
      <Box width={1} css={{ position: "absolute", bottom: 0 }}>
        <Image
          css={{ zIndex: -1, pointerEvents: "none" }}
          src={wave}
          width="100%"
        />
      </Box>
      <Flex
        flexDirection="column"
        alignItems="stretch"
        width="25rem"
        mx="auto"
        height="100%"
        css={{ zIndex: 1 }}
      >
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
