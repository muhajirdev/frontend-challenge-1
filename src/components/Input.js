import React from "react"
import Label from "../components/label"
import { Box, Card, Text } from "rebass"

export default ({ label, type, ...props }) => {
  return (
    <Box {...props} width={1}>
      {label && <Label text={label} />}
      <Card
        as="input"
        width={1}
        mt={2}
        type={type}
        border="none"
        borderRadius={3}
        bg="input"
      />
    </Box>
  )
}
