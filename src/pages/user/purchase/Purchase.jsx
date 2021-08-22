import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { path } from 'src/constants/path'
import { purchaseStatus } from 'src/constants/status'
import useQuery from 'src/hooks/useQuery'
import { getPurchases } from '../User.slice'
import * as S from './Purchase.style'
import qs from 'query-string'
import { formatMoney, generateNameId } from 'src/utils/helper'
import { Helmet } from 'react-helmet'

export default function Purchase() {
  const [purchases, setPurchases] = useState([])
  const dispatch = useDispatch()
  const query = useQuery()
  const status = useMemo(() => query.status || purchaseStatus.all, [query])

  useEffect(() => {
    dispatch(getPurchases(status))
      .then(unwrapResult)
      .then(res => {
        setPurchases(res.data)
      })
  }, [status, dispatch])

  const handleActive = value => () => Number(value) === Number(status)

  return (
    <div>
      <Helmet>
        <title>Đơn mua</title>
      </Helmet>
      <S.PurchaseTabs>
        <S.PurchaseTabItem
          to={path.purchase}
          isActive={handleActive(purchaseStatus.all)}
        >
          Tất cả
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.waitForConfirmation
            })}`
          }}
          isActive={handleActive(purchaseStatus.waitForConfirmation)}
        >
          Chờ xác nhận
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.waitForGetting
            })}`
          }}
          isActive={handleActive(purchaseStatus.waitForGetting)}
        >
          Chờ lấy hàng
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.inProgress
            })}`
          }}
          isActive={handleActive(purchaseStatus.inProgress)}
        >
          Đang giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.delivered
            })}`
          }}
          isActive={handleActive(purchaseStatus.delivered)}
        >
          Đã giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.cancelled
            })}`
          }}
          isActive={handleActive(purchaseStatus.cancelled)}
        >
          Đã hủy
        </S.PurchaseTabItem>
      </S.PurchaseTabs>

      <S.PurchaseList>
        {purchases.map(purchase => (
          <S.OrderCard key={purchase._id}>
            <S.OrderCardContent>
              <S.OrderCardDetail>
                <img src={purchase.product.image} alt="" />
                <S.OrderContent>
                  <S.OrderName>{purchase.product.name}</S.OrderName>
                  <S.OrderQuantity>
                    x {purchase.product.buy_count}
                  </S.OrderQuantity>
                </S.OrderContent>
              </S.OrderCardDetail>
              <S.OrderCardPrice>
                đ{formatMoney(purchase.product.price)}
              </S.OrderCardPrice>
            </S.OrderCardContent>
            <S.OrderCardButtonsContainer>
              <S.PurchaseButton
                to={path.product + `/${generateNameId(purchase.product)}`}
                light={1}
              >
                Xem sản phẩm
              </S.PurchaseButton>
              <S.TotalPrice>
                <S.TotalPriceLabel>Tổng giá tiền:</S.TotalPriceLabel>
                <S.TotalPricePrice>
                  đ{formatMoney(purchase.product.price * purchase.buy_count)}
                </S.TotalPricePrice>
              </S.TotalPrice>
            </S.OrderCardButtonsContainer>
          </S.OrderCard>
        ))}
      </S.PurchaseList>
    </div>
  )
}
