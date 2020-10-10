import { Interpolation } from "@emotion/core";

export type ComponentBase = {
  bgColor?: string
  color?: string
  fontSize?: string
  fontSizeM?: string
  componentMargin?: string
  componentMarginM?: string
  additionalCss?: Interpolation
}

export const DEFAULT_COMPONENT_MARGIN = '180px 0';
export const DEFAULT_COMPONENT_MARGIN_M = '20vw 0';
export const DEFAULT_FONT_SIZE = '16px';
export const DEFAULT_FONT_SIZE_M = '3vw';
