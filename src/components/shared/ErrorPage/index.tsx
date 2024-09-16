import classes from './index.module.css'
import { Button, Card, Group, Text } from '@mantine/core'
import { IErrorPage } from '@interfaces/index'

function ErrorPage({ show, label, onClick, buttonLabel }: IErrorPage) {
  return (
    show && (
      <div className={classes.errorPageWrapper}>
        <Card className={classes.errorPageCard}>
          <Text fw={700} fz={16} ta='center'>
            {label}
          </Text>
          {
            buttonLabel && (
              <Group justify='center' align='end' w="100%" h='100%'>
                <Button variant='light' maw={300} onClick={onClick}>
                  {buttonLabel}
                </Button>
              </Group>
            )
          }
        </Card>
      </div>
    )
  )
}

export default ErrorPage