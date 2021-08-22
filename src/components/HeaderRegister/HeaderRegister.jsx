import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './HeaderRegister.style'
import PropTypes from 'prop-types'
export default function HeaderRegister({ title }) {
  return (
    <S.Header>
      <S.Container className="container">
        <S.HeaderBrand>
          <S.HeaderImage>
            <img
              src="/logo.jpg"
              alt=""
              // src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/110140856_591562328462552_219365682392092108_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hjJxPuPCNQQAX9aspIm&_nc_oc=AQm_cSmoORa7fNaDUqLiy126y472QhYqQ2S6sutnVjpOwRrSTzu7mSkGAv-Z-I2I9MW28rX-VYTCp4UbsLQeBQsq&tn=mVQDKcn0O_mJaiN3&_nc_ht=scontent.fsgn5-7.fna&oh=49db5fb4dcb6637cb411d79b4d2bf94b&oe=6131A2B1"
            ></img>
          </S.HeaderImage>
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.HeaderBrand>
        <Link to="" className="link">
          Cần trợ giúp
        </Link>
      </S.Container>
    </S.Header>
  )
}
HeaderRegister.proTypes = {
  title: PropTypes.string
}
