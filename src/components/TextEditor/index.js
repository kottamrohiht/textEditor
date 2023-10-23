import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  InnerContainer,
  FirstContainer,
  Heading,
  Image,
  SecondContainer,
  ButtonContainer,
  VscBoldButton,
  GoItalicButton,
  AiOutlineUnderlineButton,
  TextAreaEl,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    userVal: '',
    fontWeight: false,
    fontStyle: false,
    textDec: false,
  }

  onClickFontWeight = () => {
    this.setState(prevState => ({
      fontWeight: !prevState.fontWeight,
    }))
  }

  onClickFontStyle = () => {
    this.setState(prevState => ({
      fontStyle: !prevState.fontStyle,
    }))
  }

  onClickFontDec = () => {
    this.setState(prevState => ({
      textDec: !prevState.textDec,
    }))
  }

  onChangeTextArea = event => {
    this.setState({
      userVal: event.target.value,
    })
  }

  render() {
    const {userVal, fontWeight, textDec, fontStyle} = this.state
    const text = textDec ? 'apply' : ''
    const Style = fontStyle ? 'apply' : ''
    const Weight = fontWeight ? 'apply' : ''

    const txtEditor =
      'https://assets.ccbp.in/frontend/react-js/text-editor-img.png'
    return (
      <MainContainer>
        <InnerContainer>
          <FirstContainer>
            <Heading> Text Editor </Heading>
            <Image src={txtEditor} alt="text editor" />
          </FirstContainer>

          <SecondContainer>
            <ButtonContainer>
              <ListItem>
                <VscBoldButton
                  fontWeight={Weight}
                  data-testid="bold"
                  type="button"
                  onClick={this.onClickFontWeight}
                >
                  <VscBold size={25} />
                </VscBoldButton>
              </ListItem>

              <ListItem>
                <GoItalicButton
                  fontStyle={Style}
                  data-testid="italic"
                  type="button"
                  onClick={this.onClickFontStyle}
                >
                  <GoItalic size={25} />
                </GoItalicButton>
              </ListItem>

              <ListItem>
                <AiOutlineUnderlineButton
                  textDec={text}
                  data-testid="underline"
                  type="button"
                  onClick={this.onClickFontDec}
                >
                  <AiOutlineUnderline size={25} />
                </AiOutlineUnderlineButton>
              </ListItem>
            </ButtonContainer>
            <TextAreaEl
              fontWeight={Weight}
              textDec={text}
              fontStyle={Style}
              onChange={this.onChangeTextArea}
              value={userVal}
            />
          </SecondContainer>
        </InnerContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
