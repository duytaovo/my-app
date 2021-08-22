import { Button } from 'src/assets/styles/utils'
import Select from 'src/components/Select/Select'
import styled from 'styled-components'

export const Profile = styled.div`
  padding: 0 30px 20px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
  border-radius: 2px;
`
export const ProfileHeader = styled.div`
  padding: 22px 0;
  border-bottom: 1px solid #efefef;
`
export const ProfileHeaderTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  text-transform: capitalize;
`
export const ProfileHeaderSubtitle = styled.div`
  font-size: 1.4rem;
  color: #555;
  margin-top: 3px;
`
export const ProfileInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 30px;
`
export const ProfileLeft = styled.form`
  flex-grow: 1;
  padding-right: 50px;
`
export const ProfileRight = styled.div`
  display: flex;
  justify-content: center;
  width: 28rem;
  border-left: 1px solid #efefef;
`
export const InputLabel = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-bottom: 30px;
`
export const InputLabelLabel = styled.div`
  width: 20%;
  padding-top: 1rem;
  text-align: right;
  color: rgba(85, 85, 85, 0.8);
  text-transform: capitalize;
  overflow: hidden;
`
export const InputLabelContent = styled.div`
  width: 80%;
  padding-left: 2rem;
`
export const DateSelect = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SelectDate = styled(Select)`
  width: 32%;
`
export const InputLabelContentText = styled.div`
  font-size: 1.4rem;
  color: #333;
  padding-top: 1rem;
`
export const Submit = styled.div`
  margin-bottom: 60px;
  padding-left: calc(20% + 20px);
`
export const ButtonSubmit = styled(Button)`
  height: 4rem;
  min-width: 7rem;
`

export const ErrorMessage = styled.div`
  width: 100%;
  padding-left: calc(20% + 2rem);
`
