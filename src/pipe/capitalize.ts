export default (value: string) => !value
  ? ''
  : value
    .toString()
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
