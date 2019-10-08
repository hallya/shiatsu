import { convertToHtml } from '@/services/converter/markdownToHtml';

describe('markdownToHtml', () => {
  it('should convert markdown to html', () => {
    const markdownText = '#title';
    const convertion = convertToHtml(markdownText);
    const expectedResult = '<h1>title</h1>';
    expect(convertion).toEqual(expectedResult);
  });
});
