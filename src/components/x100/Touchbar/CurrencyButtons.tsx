import classes from './CurrencyButtons.module.css'
import { ICurrencyButtons } from '@interfaces/index'
import { MoneyType } from '@interfaces/models.interfaces'
import { Group, SegmentedControl, Text } from '@mantine/core'

function CurrencyButtons({
  bg,
  size,
  color,
  onChange,
  borders = false,
  defaultCurrency,
}: ICurrencyButtons) {
  const currencies = ['USD', 'VES', 'COP']

  return (
    <Group className={classes.currencyButtonsWrapper}>
      <Text className={classes.currencyText}>
        Moneda:
      </Text>
      <SegmentedControl
        bg={bg}
        size={size}
        color={color}
        data={currencies}
        withItemsBorders={borders}
        defaultValue={defaultCurrency}
        onChange={(value: string) => onChange && onChange(value as MoneyType)}
      />
    </Group>
  )
}

export default CurrencyButtons