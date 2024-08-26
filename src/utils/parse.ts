import { phone } from "@assets/phone"

export const sellStatus = (status: string) => {
  switch(status) {
    case 'active': 
      return 'activo'
    case 'sent': 
      return 'enviada'
    case 'sold':
      return 'agotado'
    default:
      return status
  }
}

export const adminStatus = (status: string) => {
  switch(status) {
    case 'pending': 
      return 'pendiente'
    case 'payed': 
      return 'pagada'
    case 'unpayed':
      return 'no pagada'
    case 'refunded':
      return 'devuelta'
    default:
      return status
  }
}

export const formatPhone = (phone: string,) => {
  const digits = phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)

  if (phone !== '') {
    if (digits) {
      return `(${digits[1]}) ${digits[2]}-${digits[3]}`
    }
  }

  return ''
};