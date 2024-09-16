import classes from './IntegratorPicker.module.css'
import { Text } from '@mantine/core'
import { IIntegratorPicker } from '@interfaces/index'

function IntegratorPicker({ onSelect }: IIntegratorPicker) {
  return (
    <div className={classes.integratorPickerWrapper}>
      <Text className={classes.integratorPickerTitle}>
        Select an integrator to handle it's simulation
      </Text>
    </div>
  )
}

export default IntegratorPicker