/** @jsx jsx */
// H1 Title Text v1.0.0
import styled from '@emotion/styled'
import { COLOR_TEXT, FONT_B, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'


type Props = {
  // Optional
  color?: string
  fontSize?: string
  fontSizeM?: string
  textAlign?: string
}

const H1TitleText = styled.h1<Props>`
  margin: 0;

  color: ${pr => pr.color || COLOR_TEXT};
  font-family: ${FONT_B};
  font-weight: normal;
  text-align: ${pr => pr.textAlign || 'left'};
  ${MEDIA_DESKTOP} {
    font-size: ${pr => pr.fontSize || '3em'};
  }
  ${MEDIA_MOBILE} {
    font-size: ${pr => pr.fontSizeM || '3em'};
  }
`

export default H1TitleText
