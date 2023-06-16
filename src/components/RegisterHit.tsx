import React, { useEffect, useState } from 'react'
import countapi from 'countapi-js';

const RegisterHit = () => {

  const BASE_URL = 'https://api.countapi.xyz';

  const fetchCount = async(namespace, key) => {
    try {
      const response = await fetch(`${BASE_URL}/get/${namespace}/${key}`);
      return response.json()
    } catch (error) {
      console.error('Error fetching count:', error);
      return null;
    }
  }

  const incrementCount = async(namespace, key) => {
    try {
      const response = await fetch(`${BASE_URL}/hit/${namespace}/${key}`);
      return response.json()
    } catch (error) {
      console.error('Error fetching count:', error);
      return null;
    }
  }


  const [value, setValue] = useState(null)
  if(!value) return null
  return (
    <div>{value}</div>
  )
}

export default RegisterHit
