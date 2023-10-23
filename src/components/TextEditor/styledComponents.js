import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25262c;
`

export const InnerContainer = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1c22;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const FirstContainer = styled.div`
  height: 100%;
  width: 48%;
`
export const Image = styled.img`
  width: 80%;
`

export const Heading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: white;
  text-align: center;
  margin-bottom: 20px;
`

export const SecondContainer = styled.div`
  height: 100%;
  width: 48%;
  background-color: #25262c;
  border-radius: 5px;
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 10%;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cbd5e1;
  padding: 5px;
`

export const ListItem = styled.li``

export const VscBoldButton = styled.button`
  cursor: pointer;
  border: 0px;
  font-size: 25px;
  font-family: 'Roboto';
  margin: 0px;
  margin-right: 10px;
  background-color: transparent;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.fontWeight === 'apply' ? '#faff00' : '#f1f5f9')};
`

export const GoItalicButton = styled.button`
  cursor: pointer;
  border: 0px;
  font-size: 25px;
  font-family: 'Roboto';
  margin: 0px;
  margin-right: 10px;
  background-color: transparent;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.fontStyle === 'apply' ? '#faff00' : '#f1f5f9')};
`

export const AiOutlineUnderlineButton = styled.button`
  cursor: pointer;
  border: 0px;
  font-size: 25px;
  font-family: 'Roboto';
  margin: 0px;
  margin-right: 10px;
  background-color: transparent;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.textDec === 'apply' ? '#faff00' : '#f1f5f9')};
`

export const TextAreaEl = styled.textarea`
  color: white;
  width: 100%;
  min-height: 85%;
  background-color: transparent;
  font-size: 20px;
  font-family: 'Roboto';
  border: 0px;
  outline: none;
  padding: 8px;
  font-weight: ${props => (props.fontWeight === 'apply' ? 'bold' : 'normal')};
  font-style: ${props => (props.fontStyle === 'apply' ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.textDec === 'apply' ? 'underline' : 'normal'};
`
