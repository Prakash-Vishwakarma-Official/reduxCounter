import React from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {
    const count = useSelector((state) => state.counter.value)

  return (
    <div>coin {count}</div>
  )
}

export default Coin