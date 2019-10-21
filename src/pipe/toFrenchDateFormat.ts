// @ts-ignore
import moment from 'moment';

export default (date: Date) => {
  return moment(date, moment.ISO_8601, 'fr').format('LL');
};
