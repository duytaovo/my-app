import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 130px;
  margin-bottom: 3rem;
  min-width: max-content;
  background: rgba(-21, 170, 255, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`
export const Navbar = styled.div`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  background: rgba(-21, 170, 255, 1);
`
export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-10px);
`
export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;
  transform: translateX(-50px);

  img {
    width: 140px;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
  }
`
export const LogoPageName = styled.div`
  margin-left: -0.5rem;
  margin-top: -1rem;
  color: #fff;
  font-size: 2rem;
  line-height: 1.5;
  padding-left: 1.5rem;
  text-transform: capitalize;
`
export const Form = styled.form`
  flex: 0 0 50%; //grow-shrink-basis
  display: flex;
  align-items: stretch;
  border: 2px solid rgba(0, 0, 0, 0.3);
  height: 4rem;
  border-radius: 2px;
  background: #fff;
`
export const Input = styled.input`
  flex-grow: 1; //gian ra toi da so button
  border: 0;
  padding: 0 1rem;
  width: 700px;
`
export const ButtonSearch = styled(Button)`
  height: 30px;
  margin: 3px 5px;
  padding: 10px 15px;
  svg {
    color: #fff;
    fill: currentColor;
  }
`
