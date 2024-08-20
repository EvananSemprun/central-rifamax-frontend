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