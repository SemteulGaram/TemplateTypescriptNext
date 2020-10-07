export const MEDIA_DESKTOP = '@media (min-width: 800px)'
export const MEDIA_MOBILE = '@media screen and (max-width: 799px)'

export const FONT_EB = "'NanumSquareEB', sans-serif" 
export const FONT_B = "'NanumSquareB', sans-serif"
export const FONT_R = "'NanumSquareR', sans-serif"
export const FONT_L = "'NanumSquareL', sans-serif"
export const FONT_L2 = "'NanumSquareL', sans-serif"

/*
export const FONT_EB = '"SpoqaHanSansBold", sans-serif' 
export const FONT_B = '"SpoqaHanSansBold", sans-serif'
export const FONT_R = '"SpoqaHanSansRegular", sans-serif'
export const FONT_L = '"SpoqaHanSansLight", sans-serif'
export const FONT_L2 = '"SpoqaHanSansThin", sans-serif'
*/

// Main Color
export const COLOR_PRIMARY = '#007a50'
export const COLOR_PRIMARY_HIGHLIGHT = '#005530'
export const COLOR_PRIMARY_BG = '#ffffff'
// Text Color
export const COLOR_TEXT = '#292929'
export const COLOR_TEXT_LIGHT = '#6f6f6f'
export const COLOR_TEXT_LIGHTER = '#cbcbcb'
export const COLOR_TEXT_INVERT = '#f0f0f0'
export const COLOR_TEXT_INVERT_DARKER ='#4b4b4b'
// Bg Color
export const COLOR_BG = '#ffffff'
export const COLOR_BG_DARK = '#f8f8f8'
export const COLOR_BG_DARKER = '#bababa'
export const COLOR_BG_INVERT = '#292929'

// Always Color
export const COLOR_WHITE = '#ffffff'
export const COLOR_GRAY_50 = '#FAFAFA'
export const COLOR_GRAY_100 = '#F5F5F5'
export const COLOR_GRAY_200 = '#EEEEEE'
export const COLOR_GRAY_300 = '#E0E0E0'
export const COLOR_GRAY_400 = '#BDBDBD'
export const COLOR_GRAY_500 = '#9E9E9E'
export const COLOR_GRAY = COLOR_GRAY_500
export const COLOR_GRAY_600 = '#757575'
export const COLOR_GRAY_700 = '#616161'
export const COLOR_GRAY_800 = '#424242'
export const COLOR_GRAY_900 = '#212121'
export const COLOR_BLACK = '#000000'
// Shadow Color
export const COLOR_SHADOW = 'rgba(0,0,0,.16)';

export const CSS_ABSOLUTE_FULL = `position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;`
export const CSS_FLEX_CENTER = `display: flex;
justify-content: center;
align-items: center;`
export const CSS_BACKGROUND_IMAGE_COVER = `background-position: center;
background-repeat: no-repeat;
background-size: cover;`
export const CSS_BACKGROUND_IMAGE_CONTAIN = `background-position: center;
background-repeat: no-repeat;
background-size: contain;`
export const CSS_BOX_SHADOW = `box-shadow: 0 3px 6px 0 ${COLOR_SHADOW};`


export const SITE_MAIN_HREF = 'https://example.com/'
export const URL_POST_REGEX = /^.*-([0-9a-f]{8,})$/
export const URL_CONTACT = /^#contact$/

// SEO
export const INDEX_TITLE = 'WIP'
export const INDEX_DESCRIPTION = 'WIP'
export const INDEX_KEYWORDS = [
  "작업중"
]

export const isDesk = function () {
  try { window } catch (_) { return true }
  return window.innerWidth >= 800
}
export const isMobi = function () {
  try { window } catch (_) { return false }
  return window.innerWidth < 800
}