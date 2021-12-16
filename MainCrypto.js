import React, { useEffect} from 'react'
import CryptoTracker from './CryptoTracker'

export default function MainCrypto() {

  useEffect(() => {
    const intervalID = setInterval(() => {  
      window.location.reload();
    }, 30000)
    return () => clearInterval(intervalID)
  })

  return (
    <>
      <CryptoTracker />
    </>
  )
}
