// https://stackoverflow.com/questions/19999388/check-if-user-is-using-ie
export function msIeVersion (): number|false {
  try { window && navigator } catch { return false } // Not browser
  
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ");

  // If Internet Explorer, return version number
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)))
  // If another browser, return 0
  } else { 
    return false
  }
}
