import React, { useState } from 'react'
import * as S from './HeaderCart.style'
import Navbar from 'src/components/Navbar/Navbar'
import { path } from 'src/constants/path'
import { useHistory } from 'react-router-dom'

export default function HeaderCart() {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()

  const search = event => {
    event.preventDefault()
    const _value = searchValue.trim()
    if (_value !== '') {
      history.push(path.home + `?name=${searchValue}`)
    }
  }

  const onChangeSearch = event => setSearchValue(event.target.value)

  return (
    <S.Header>
      <S.Navbar>
        <div className="container">
          <Navbar />
        </div>
      </S.Navbar>
      <div className="container">
        <S.SearchWrap>
          <S.Logo to={path.home}>
            <img
              src="/logo.jpg"
              // src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/110140856_591562328462552_219365682392092108_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hjJxPuPCNQQAX9aspIm&_nc_oc=AQm_cSmoORa7fNaDUqLiy126y472QhYqQ2S6sutnVjpOwRrSTzu7mSkGAv-Z-I2I9MW28rX-VYTCp4UbsLQeBQsq&tn=mVQDKcn0O_mJaiN3&_nc_ht=scontent.fsgn5-7.fna&oh=49db5fb4dcb6637cb411d79b4d2bf94b&oe=6131A2B1"
              alt=""
            ></img>
            <S.LogoPageName>Giỏ hàng</S.LogoPageName>
          </S.Logo>
          <S.Form onSubmit={search}>
            <S.Input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              value={searchValue}
              onChange={onChangeSearch}
            />
            <S.ButtonSearch>
              <svg
                height={19}
                viewBox="0 0 19 19"
                width={19}
                className="shopee-svg-icon "
              >
                <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-1016 -32)">
                    <g>
                      <g transform="translate(405 21)">
                        <g transform="translate(611 11)">
                          <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                          <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </S.ButtonSearch>
          </S.Form>
        </S.SearchWrap>
      </div>
    </S.Header>
  )
}
