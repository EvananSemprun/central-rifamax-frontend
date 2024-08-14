import moment from 'moment';

export const day = (inp?: moment.MomentInput): string => {
  return moment(inp).format('DD/MM/YYYY');
}

export const datetime = (inp?: moment.MomentInput): string => {
  return moment(inp).format('DD/MM/YYYY - HH:mm');
}

export const getDate = (day: number): Date => {
  const today = new Date();
  const resultDate = new Date();
  resultDate.setDate(today.getDate() + day);
  return resultDate;
}

export const getDay = (day: number): string => {
  return moment(getDate(day)).format('DD/MM/YYYY');
}

export const addDay = (inp?: moment.MomentInput, days: number): string => {
  if (!inp) return '';
  return moment(inp).add(days, 'days').format('DD/MM/YYYY');
}
