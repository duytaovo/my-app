import React from 'react'
import PropTypes from 'prop-types'
import HeaderRegister from '../../components/HeaderRegister/HeaderRegister'
import Footer from '../../components/Footer/Footer'
export default function RegisterLayout({ children, title }) {
  return (
    <div>
      <HeaderRegister title={title} />
      {children}
      <Footer />
    </div>
  )
}
RegisterLayout.proTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
