export const sellStatus = (status: string) => {
  switch (status) {
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
  switch (status) {
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

export const formatPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, '');

  if (digits.length === 0) {
    return '';
  } else if (digits.length <= 3) {
    return `(${digits}`;
  } else if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  }
};