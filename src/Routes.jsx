import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'
import CartLayout from './Layouts/CartLayout/CartLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'
import RegisterLayout from './Layouts/RegisterLayout.jsx/RegisterLayout'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Fallback from './components/Fallback/Fallback'

const Home = lazy(() => import('./pages/home/Home'))
const ProductDetail = lazy(() => import('./pages/productDetail/ProductDetail'))
const User = lazy(() => import('./pages/user/User'))
const Cart = lazy(() => import('./pages/cart/Cart'))
const Register = lazy(() => import('./pages/auth/Register/Register'))
const Login = lazy(() => import('./pages/auth/Login/Login'))
const NotFound = lazy(() => import('./pages/notFound/NotFound'))

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Suspense fallback={<Fallback></Fallback>}>
            <ErrorBoundary>
              <Home></Home>
            </ErrorBoundary>
          </Suspense>
        </MainLayout>
      </Route>
      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <Suspense fallback={<Fallback></Fallback>}>
              <ErrorBoundary>
                <User></User>
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.productDetail} exact>
        <MainLayout>
          <Suspense fallback={<Fallback></Fallback>}>
            <ErrorBoundary>
              <ProductDetail></ProductDetail>
            </ErrorBoundary>
          </Suspense>
        </MainLayout>
      </Route>
      <Route path={path.cart}>
        <AuthenticatedGuard>
          <CartLayout>
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <Cart />
              </ErrorBoundary>
            </Suspense>
          </CartLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.login}>
        <UnAuthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <Login />
              </ErrorBoundary>
            </Suspense>
          </RegisterLayout>
        </UnAuthenticatedGuard>
      </Route>
      <Route path={path.register}>
        <UnAuthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <Register />
              </ErrorBoundary>
            </Suspense>
          </RegisterLayout>
        </UnAuthenticatedGuard>
      </Route>

      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  )
}
