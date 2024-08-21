export const initials = (value: string) => {
  const parsed = value.match(/(\b\S)?/g)

  return parsed?.join("").toUpperCase() ?? ""
}

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}