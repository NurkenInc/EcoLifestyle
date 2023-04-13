import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { BASE_URL, API_KEY } from './config'

const useFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    
  }, [])

  return { isLoading, data, error }
}

export default useFetch