import React from "react"
import { Box } from "rebass"

export default ({ label, ...props }) => (
  <Box {...props} width={1}>
    <Box as="input" width={1} type="text" />
  </Box>
)
