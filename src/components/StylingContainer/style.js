import style from 'styled-components'

export const AppContainer = style.div`
  background-color:#25262c;
  height:100vh;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const TextContainer = style.div`
  background-color:#1b1c22;
  display:flex;
  height:70%;
  width:60%;
  padding:10px;
  border-radius:12px;
`

export const ImageContainer = style.div`
   color:#fff;
   width:50%;
   height:100%;
`

export const Heading = style.h1`
color:#fff;
text-align:center;
`

export const Image = style.img`
  width:100%;
  height:70%;
`

export const Text = style.div`
 width:50%;
 background-color: #25262c;
 border-radius:12px;
`
export const ButtonContainer = style.ul`
  display:flex;
  align-items:center;
  padding:10px;
  border-bottom:1px solid #cbd5e1;
  list-style:none;
`
export const Li = style.li`

`

export const FontButtonsB = style.button`
  border:none;
  background:transparent;
  color:${props => (props.status ? '#faff00' : '#f1f5f9')};
`
export const FontButtonsI = style.button`
  border:none;
  background:transparent;
 color:${props => (props.status ? '#faff00' : '#f1f5f9')};
`
export const FontButtonsU = style.button`
  border:none;
  background:transparent;
  color:${props => (props.status ? '#faff00' : '#f1f5f9')};
`
export const TextArea = style.textarea`
    box-sizing: border-box;
    width: 100%;
    height:90%;
    outline:none;
    background-color:transparent;
    border:none;
    color:#cbd5e1;
    padding:5px;
    font-size:20px;
    font-style: ${props => props.fontStyle};
    font-weight: ${props => props.fontWeight};
    text-decoration: ${props => props.textDecoration};
`
