/** @jsx jsx */
// Round Select v1.0.0
import styled from '@emotion/styled'

import { FONT_R, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'

type Props = {
  // Required
  color: string
  bgColor: string
  // Optional
  placeholderColor?: string
  border?: string
  width?: string
  widthM?: string
  fontSize?: string
  fontSizeM?: string
}

const RoundSelect = styled.select<Props>`
  all: unset;
  box-sizing: border-box;

  position: relative;
  min-width: 0;
  margin: .5em;
  overflow: hidden;
  z-index: 1;

  flex: 0 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${pr => pr.bgColor};
  border: ${pr => pr.border || 'unset'};
  border-radius: 2em;

  font-family: ${FONT_R};
  color: ${pr => pr.color};
  line-height: 1;
  vertical-align: middle;
  text-decoration: none;
  cursor: text;

  ${MEDIA_DESKTOP} {
    width: ${pr => pr.width || 'auto'};
    padding: .75em 1.35em;

    font-size: ${pr => pr.fontSize || '16px'};
  }
  ${MEDIA_MOBILE} {
    width: ${pr => pr.widthM || 'auto'};
    padding: 1.5em 2em;

    font-size: ${pr => pr.fontSizeM || '3vw'};
  }
  ${
    pr => {
      return pr.placeholderColor ? `
        &::placeholder {
          color: ${pr.placeholderColor};
          opacity: 1; /* For Firefox */
        }
      ` : ''
    }
  }
`

export default RoundSelect
