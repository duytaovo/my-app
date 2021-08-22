import React from 'react'
import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledCircular = styled(CircularProgress)`
  position: fixed !important;
  display: flex;
  margin: auto;
`

export default function Fallback() {
  const loading = useSelector(state => state.app.loading)
  if (loading > 0) {
    return <StyledCircular color="secondary" />
  }
}
