import React from 'react'
import { useSelector } from 'react-redux'

export const Homepage = () => {
    const selectora = useSelector(store => store)
  return (
    <div>Homepage</div>
  )
}
