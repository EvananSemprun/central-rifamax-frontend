import classes from "./index.module.css"
import { v6 as uuid } from "uuid"
import { rem } from "@mantine/core"
import { INotifications } from "@interfaces/index"
import { notifications } from "@mantine/notifications"
import { IconCheck, IconX, IconInfoCircle } from "@tabler/icons-react"

export const InfoNotification = ({ position, title, label }: INotifications) => {
  return (
    notifications.show({
      id: `info-${uuid()}`,
      color: 'blue',
      title: title,
      message: label,
      position: position,
      icon: <IconInfoCircle style={{ width: rem(32), height: rem(32) }} />,
      autoClose: true,
      withCloseButton: true,
      classNames: classes
    })
  )
}

export const ErrorNotification = ({ position, title, label }: INotifications) => {
  return (
    notifications.show({
      id: `error-${uuid()}`,
      color: 'red',
      title: title,
      message: label,
      position: position,
      icon: <IconX style={{ width: rem(32), height: rem(32) }} />,
      autoClose: true,
      withCloseButton: true,
      classNames: classes
    })
  )
}

export const SuccessNotification = ({ position, title, label }: INotifications) => {
  return (
    notifications.show({
      id: `success-${uuid()}`,
      color: 'teal',
      title: title,
      message: label,
      position: position,
      icon: <IconCheck style={{ width: rem(32), height: rem(32) }} />,
      autoClose: true,
      withCloseButton: true,
      classNames: classes
    })
  )
}