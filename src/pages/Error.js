import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function Error() {
  return (
    <div className="condiv">
      <Hero>
          <Banner title="404" subtitle="Page not found"></Banner>
      </Hero>
    </div>
  )
}
