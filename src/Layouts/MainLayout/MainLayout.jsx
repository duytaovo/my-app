import React from 'react'
import Footer from 'src/components/Footer/Footer'
import PropTypes from 'prop-types'
import Header from 'src/components/Header/Header'

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

MainLayout.propsTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
