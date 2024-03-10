import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  TextContainer,
  ImageContainer,
  Image,
  Heading,
  Text,
  ButtonContainer,
  Li,
  FontButtonsB,
  FontButtonsI,
  FontButtonsU,
  TextArea,
} from './style'

const StylingContainer = () => {
  const [text, setText] = useState('')
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underLine, setUnderline] = useState(false)
  const fontWeight = bold ? 'bold' : 'normal'
  const fontStyle = italic ? 'italic' : 'normal'
  const textDecoration = underLine ? 'underline' : 'normal'
  return (
    <AppContainer>
      <TextContainer>
        <ImageContainer>
          <Heading>Text Editor</Heading>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </ImageContainer>
        <Text>
          <ButtonContainer>
            <Li>
              <FontButtonsB
                type="button"
                data-testid="bold"
                onClick={() => setBold(prev => !prev)}
                status={bold}
              >
                <VscBold size={25} />
              </FontButtonsB>
            </Li>
            <Li>
              <FontButtonsI
                type="button"
                data-testid="italic"
                onClick={() => setItalic(prev => !prev)}
                status={italic}
              >
                <GoItalic size={25} />
              </FontButtonsI>
            </Li>
            <Li>
              <FontButtonsU
                type="button"
                data-testid="underline"
                onClick={() => setUnderline(prev => !prev)}
                status={underLine}
              >
                <AiOutlineUnderline size={25} />
              </FontButtonsU>
            </Li>
          </ButtonContainer>
          <TextArea
            rows="29"
            value={text}
            onChange={e => setText(e.target.value)}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            textDecoration={textDecoration}
          >
            {text}
          </TextArea>
        </Text>
      </TextContainer>
    </AppContainer>
  )
}

export default StylingContainer
