export function normalizeNumber (value: number, min: number, max: number) {
  if (!(min < max)) throw new Error('max value must greater then min value')
  const diff = max - min
  while (value > max) value -= diff
  while (value < min) value += diff
  return value
}
