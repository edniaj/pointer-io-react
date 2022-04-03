import React from 'react'
import { useParams } from 'react-router-dom'

function JobDetails() {
  const { id } = useParams()
  
  return (
    <div>{id}</div>
  )
}

export default JobDetails