import classes from './LoaderScreen.module.css'
import { ILoaderScreen } from '@interfaces/index'
import { Card, Group, Loader, Text } from '@mantine/core'

function LoaderScreen({
  show = true,
  label = 'Cargando...'
}: ILoaderScreen) {
  return (
    show && (
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
  )
}

export default LoaderScreen