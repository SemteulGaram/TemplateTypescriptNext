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
// Text Color
export const COLOR_TEXT = '#404040'
export const COLOR_TEXT_LIGHT = '#6f6f6f'
export const COLOR_TEXT_LIGHTER = '#cbcbcb'
// Bg Color
export const COLOR_BG = '#ffffff'
export const COLOR_BG_DARK = '#f8f8f8'
export const COLOR_BG_DARKER = '#bababa'

export const SITE_MAIN_HREF = 'https://example.com/'
export const URL_POST_REGEX = /^.*-([0-9a-f]{8,})$/
export const URL_CONTACT = /^#contact$/

// SEO
export const INDEX_TITLE = '유튜디오'
export const INDEX_DESCRIPTION = ''
export const INDEX_KEYWORDS = [
  "유튜디오"
]

export const isDesk = function () {
  try { window } catch (_) { return true }
  return window.innerWidth >= 800
}
export const isMobi = function () {
  try { window } catch (_) { return false }
  return window.innerWidth < 800
}