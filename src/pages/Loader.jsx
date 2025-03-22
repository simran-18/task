import { CircularProgress } from '@mui/material'
import React from 'react'
import {LoaderContainer} from '../styles/Loader.styles'
const Loader = () => {
  return (
    <LoaderContainer>
        <CircularProgress/>
    </LoaderContainer>
  )
}

export default Loader