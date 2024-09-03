import classes from './LoaderScreen.module.css'
import { Card, Group, Loader, Text } from '@mantine/core'

interface ILoaderScreen {
  label?: string
}

function LoaderScreen({
  label = 'Cargando...'
}: ILoaderScreen) {
  return (
    <div className={classes.wrapper}>
      <Group align="center">
        <Card>
          <Group align="center">
            <Loader size="xl" />
            <Text fz={20}>{label}</Text>
          </Group>
        </Card>
      </Group>
    </div>
  )
}

export default LoaderScreen