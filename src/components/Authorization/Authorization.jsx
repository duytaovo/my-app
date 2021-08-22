import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { unauthorize } from 'src/pages/auth/auth.slice'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { getCartPurchases } from 'src/pages/cart/cart.slice'

export default function Authorization() {
  const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  const history = useHistory()
  const authenticated = useAuthenticated()

  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      history.push(path.login)
    }
  }, [dispatch, status, history])

  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [dispatch, authenticated])

  return null
}
