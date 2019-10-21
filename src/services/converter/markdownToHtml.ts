// @ts-ignore
import showdown from 'showdown';

export function convertToHtml(markdown: string): string {
  const converter = new showdown.Converter();
  setOptionsFor(converter);
  return converter.makeHtml(markdown);
}

// @ts-ignore
function setOptionsFor(converter) {
  converter.setOption('noHeaderId', true);
}
