/** @jsx jsx */
// Round Button v1.0.3
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import { CSS_BOX_SHADOW_BUTTON, FONT_B, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'

type Props = {
  // Required
  color: string
  bgColor: string
  // Optional
  border?: string
  width?: string
  widthM?: string
  fontSize?: string
  fontSizeM?: string
  // Ripple options
  disableRipple?: boolean
  overrideRippleSize?: string
  overrideRippleSizeM?: string
  overrideRippleColor?: string
}

const generatorKeyfrmaesRipple = (overrideRippleSize?: string) => {
  return keyframes`{
    0% {
      width: 0;
      height: 0;
      opacity: .5;
    }
    100% {
      width: ${overrideRippleSize};
      height: ${overrideRippleSize};
      opacity: 0;
    }
  }
  @keyframes ripple {
    0% {
      width: 0;
      height: 0;
      opacity: .5;
    }
    100% {
      width: ${overrideRippleSize};
      height: ${overrideRippleSize};
      opacity: 0;
    }
  }`
}

// Ripple Effect https://codeconvey.com/ripple-effect-on-button-click-css/
const RoundButton = styled.button<Props>`
  all: unset;
  box-sizing: border-box;

  position: relative;
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
  ${CSS_BOX_SHADOW_BUTTON}

  font-family: ${FONT_B};
  color: ${pr => pr.color};
  line-height: 1;
  vertical-align: middle;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  transition: opacity .15s ease-in;
  ${MEDIA_DESKTOP} {
    width: ${pr => pr.width || 'unset'};
    padding: .75em 1.35em;

    font-size: ${pr => pr.fontSize || '16px'};
  }
  ${MEDIA_MOBILE} {
    width: ${pr => pr.widthM || 'unset'};
    padding: 1.5em 2em;

    font-size: ${pr => pr.fontSizeM || '3vw'};
  }
  &:hover, &:focus {
    opacity: .9;
  }
  ${
    pr => pr.disableRipple ? '' : css`
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: ${pr.overrideRippleColor || 'rgba(255,255,255,.75)'};
      visibility: hidden;
      z-index: 2;
    }
    &:active::before {
      visibility: visible;
    }
    ${MEDIA_DESKTOP} {
      &:not(:active)::before {
        animation: ${generatorKeyfrmaesRipple(pr.overrideRippleSize || pr.width || '160px')} 0.4s cubic-bezier(0, 0, 0.2, 1);
        transition: visibility .4s step-end;
      }
    }
    ${MEDIA_MOBILE} {
      &:not(:active)::before {
        animation: ${generatorKeyfrmaesRipple(pr.overrideRippleSizeM || pr.widthM || '30vw')} 0.4s cubic-bezier(0, 0, 0.2, 1);
        transition: visibility .4s step-end;
      }
    }
    `
  }
`

export default RoundButton
