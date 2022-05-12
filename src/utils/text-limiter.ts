export const textLimiter = (text: string, len: number, tail = '…'): string => {
  if (text.length > len) {
    return text.substring(0, len - 1).replace('\n', ' ') + tail;
  }
  return text;
};
