import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title> Page Not Found</title>
      </Helmet>
      <img
        src="https://img.icons8.com/cotton/64/000000/page-not-found.png"
        alt=""
      ></img>
      <h1>Page Not Found ,Please Return Home Page!!!</h1>
      <Link to={path.home}>Home Page</Link>
    </div>
  )
}
