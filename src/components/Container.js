import { Flex } from "rebass"
import styled from "styled-components"
import { maxWidth, minWidth, minHeight, maxHeight, height } from "styled-system"

export default styled(Flex)`
  ${maxWidth};
  ${minWidth};
  ${minHeight};
  ${maxHeight};
  ${height}
`
