import styled from 'styled-components'

//hang so
export const ButtonController = styled.button`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  width: 3.6rem;
  height: 3.4rem;
  border-radius: 2px;
  border: 0;
  background: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
  svg {
    width: 0.625rem;
    height: 0.625rem;
    fill: ${({ disabled }) => (disabled ? '#ccc' : '#555')};
    margin-top: 0.125rem;
  }
`

export const SortBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  padding: 1.25rem 1.5rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
`
export const SortBarLabel = styled.span``
export const SortBarOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
`
export const SortBarOptionsOption = styled.div`
  flex: 0 0 auto;
  cursor: pointer;
  height: 3.25rem;
  padding: 0 1.5rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  background: #fff;
  text-transform: capitalize;
  &.active {
    color: #fff;
    background: #ee4d2d;
  }
`
export const SortBarPrice = styled.select`
  flex: 0 0 auto;
  height: 3.25rem;
  padding: 0 1.5rem;
  margin-left: 1rem;
  border: 0;
  &.active {
    color: #ee4d2d;
  }
`
export const MiniPageController = styled.div`
  display: flex;
  align-items: center;
`
export const MiniPageControllerState = styled.div`
  display: flex;
`
export const MiniPageControllerCurrentState = styled.div`
  color: #ee4d2d;
`
export const MiniPageControllerTotalState = styled.div``
export const ButtonControllerPrev = styled(ButtonController)`
  margin-left: 2rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-right: 1px solid #f2f2f2;
`
export const ButtonControllerNext = styled(ButtonController)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
