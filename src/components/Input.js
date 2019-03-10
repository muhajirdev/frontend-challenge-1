import React from "react"
import Label from "../components/label"
import { Box, Card, Text } from "rebass"

export default ({ label, type, placeholder, ...props }) => {
  return (
    <Box {...props} width={1}>
      {label && <Label text={label} />}
      <Card
        as="input"
        width={1}
        mt={2}
        borderColor="inputBorder"
        border="2px solid"
        borderRadius={3}
        color="inputColor"
        bg="input"
        placeholder={placeholder}
        type={type}
        py={3}
        px={3}
      />
    </Box>
  )
}
