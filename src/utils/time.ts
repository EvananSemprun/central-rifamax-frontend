import moment from 'moment'

export const day = (inp?: moment.MomentInput) => {
  return moment(inp).format('DD/MM/YYYY')
}

export const datetime = (inp?: moment.MomentInput) => {
  return moment(inp).format('DD/MM/YYYY - HH:mm')
}