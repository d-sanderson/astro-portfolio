import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    console.log('loaded')
    setCurrentPath(window.location.pathname)
  }, [])
  
  return (
    <>
      <a className={currentPath === "/" ? "active" : ""} href="/">about</a>
      <a className={currentPath === "/projects" ? "active" : ""} href="/projects">projects</a>
      <a className={currentPath === "/resume" ? "active" : ""} href="/resume">resume</a>
    </>
  )
}

export default Nav