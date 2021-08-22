import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Redirect } from 'react-router-dom'
import { path } from 'src/constants/path'
import PropTypes from 'prop-types'

export default function UnAuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()

  if (authenticated) {
    return <Redirect to={path.home} />
  }

  return <Fragment>{children}</Fragment>
}
UnAuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
