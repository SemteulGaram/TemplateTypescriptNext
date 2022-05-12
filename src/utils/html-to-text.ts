const HtmlEntities: [RegExp, string][] = [
  [/&nbsp;/g, ' '],
  [/&lt;/g, '<'],
  [/&gt;/g, '>'],
  [/&quot;/g, '"'],
  [/&apos;/g, "'"],
];

export function htmlToText(html: string): string {
  return HtmlEntities.reduce<string>(
    (
      pv: string,
      cv: [RegExp, string],
      i: number,
      a: [RegExp, string][]
    ): string => {
      return pv.replace(cv[0], cv[1]);
    },
    html.replace(/(<.+?>)/g, '')
  );
}
