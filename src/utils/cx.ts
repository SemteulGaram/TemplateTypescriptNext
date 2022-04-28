// ClassList concat
export const cx = (...args: string[]): string => {
  return args.filter(Boolean).join(' ');
};
