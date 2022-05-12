export function buildAddress(title: string, uid: number) {
  return (
    ('' + title)
      .replace(/[^0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힇]/g, '-')
      .replace(/[-]+/g, '-')
      .replace(/^-/, '')
      .replace(/-$/, '') +
    '-' +
    uid.toString(16).padStart(8, '0')
  );
}
