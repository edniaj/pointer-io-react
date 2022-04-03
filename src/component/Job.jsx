import React from 'react'
import { Routes, Route, useParams, Link, Outlet } from 'react-router-dom'
import JobEdit from './JobEdit'

function Job() {
  return (
    <>
      <div>Job</div>
    <Link to='edit'>Edit</Link>
    <Outlet /> 
    </>
  )
}

export default Job

