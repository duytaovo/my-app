import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { path } from 'src/constants/path'
import * as S from './User.style'
import Profile from './profile/Profile'
import Password from './password/Password'
import Purchase from './purchase/Purchase'
import { Helmet } from 'react-helmet'

export default function User() {
  return (
    <div>
      <S.Container className="container">
        <Helmet>
          <title>Hồ sơ</title>
        </Helmet>
        <S.Sidebar>
          <S.Brief>
            <S.BriefAvatar to={path.profile}>
              <img
                src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/110140856_591562328462552_219365682392092108_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hjJxPuPCNQQAX9aspIm&_nc_oc=AQm_cSmoORa7fNaDUqLiy126y472QhYqQ2S6sutnVjpOwRrSTzu7mSkGAv-Z-I2I9MW28rX-VYTCp4UbsLQeBQsq&tn=mVQDKcn0O_mJaiN3&_nc_ht=scontent.fsgn5-7.fna&oh=49db5fb4dcb6637cb411d79b4d2bf94b&oe=6131A2B1"
                alt=""
              />
            </S.BriefAvatar>
            <S.BriefRight>
              <S.BriefUsername>DuyTaoDev</S.BriefUsername>
              <S.BriefEdit to={path.profile}>
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: 4 }}
                >
                  <path
                    d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                    fill="#9B9B9B"
                    fillRule="evenodd"
                  />
                </svg>
                Sửa hồ sơ
              </S.BriefEdit>
            </S.BriefRight>
          </S.Brief>
          <S.SidebarMenu>
            <S.SidebarMenuEntry to={path.profile}>
              <S.SidebarMenuEntryIcon>
                <img
                  src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
                  alt=""
                />
              </S.SidebarMenuEntryIcon>
              Tài khoản của tôi
            </S.SidebarMenuEntry>
            <S.SidebarMenuEntry to={path.password}>
              <S.SidebarMenuEntryIcon>
                <img
                  src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
                  alt=""
                />
              </S.SidebarMenuEntryIcon>
              Đổi mật khẩu
            </S.SidebarMenuEntry>
            <S.SidebarMenuEntry to={path.purchase}>
              <S.SidebarMenuEntryIcon>
                <img
                  src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"
                  alt=""
                />
              </S.SidebarMenuEntryIcon>
              Đơn mua
            </S.SidebarMenuEntry>
          </S.SidebarMenu>
        </S.Sidebar>
        <S.Main>
          <Switch>
            <Route path={path.user} exact>
              <Redirect to={path.profile} />
            </Route>
            <Route path={path.profile}>
              <Profile />
            </Route>
            <Route path={path.password}>
              <Password />
            </Route>
            <Route path={path.purchase}>
              <Purchase />
            </Route>
          </Switch>
        </S.Main>
      </S.Container>
    </div>
  )
}
