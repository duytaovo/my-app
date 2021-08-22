import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { Helmet } from 'react-helmet'
// import { Helmet } from 'react-helmet-async'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import { rules } from 'src/constants/rules'
import { login } from '../auth.slice'
import * as S from '../Register/Register.style'

export default function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(login(body))
      unwrapResult(res)
      history.push(path.home)
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }

  return (
    <S.StyledRegister>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <S.Container className="container">
        <S.Banner>
          <img
            src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/110140856_591562328462552_219365682392092108_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hjJxPuPCNQQAX9aspIm&_nc_oc=AQm_cSmoORa7fNaDUqLiy126y472QhYqQ2S6sutnVjpOwRrSTzu7mSkGAv-Z-I2I9MW28rX-VYTCp4UbsLQeBQsq&tn=mVQDKcn0O_mJaiN3&_nc_ht=scontent.fsgn5-7.fna&oh=49db5fb4dcb6637cb411d79b4d2bf94b&oe=6131A2B1"
            alt=""
          ></img>
        </S.Banner>
        <S.FormWrapper>
          <S.FormTitle>Đăng nhập</S.FormTitle>
          <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
            <S.FormControl>
              <Controller
                name="email"
                control={control}
                rules={rules.email}
                render={({ field }) => (
                  <InputText
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={field.onChange}
                    value={getValues('email')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="email" />
            </S.FormControl>
            <S.FormControl>
              <Controller
                name="password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword
                    placeholder="Mật khẩu"
                    name="password"
                    onChange={field.onChange}
                    value={getValues('password')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="password" />
            </S.FormControl>

            <S.FormButton>
              <Button type="submit">Đăng nhập</Button>
            </S.FormButton>
          </S.Form>
          <S.FormFooter>
            <span>Nếu chưa có tài khoản hãy đăng ký?</span>
            <Link to={path.register} className="link">
              Đăng ký
            </Link>
          </S.FormFooter>
        </S.FormWrapper>
      </S.Container>
    </S.StyledRegister>
  )
}
