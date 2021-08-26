import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="max-h-screen">
      <StaticImage
        src="https://images.unsplash.com/photo-1597912893592-d0a637535de4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80"
        width={2304}
        placeholder="tracedSVG"
        className="max-h-screen"
      />
    </div>
  )
}

export default Hero
