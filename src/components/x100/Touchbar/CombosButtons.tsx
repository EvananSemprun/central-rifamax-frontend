import classes from './CombosButtons.module.css'
import { Button, Group, Text } from '@mantine/core'
import { ICombosButtons } from '@interfaces/index'

function CombosButtons({
  data,
  size,
  color,
  p = 5,
  px = 10,
  onSelect,
  className,
  variant = 'light',
}: ICombosButtons) {
  return (
    <Group className={classes.combosButtonsWrapper}>
      <Text className={classes.combosText}>
        Combos:
      </Text>
      {
        data.map((combo, index) => (
          <Button
            p={p}
            px={px}
            key={index}
            size={size}
            color={color}
            variant={variant}
            className={className}
            onClick={() => onSelect(combo.price, combo.value)}
          >
            {combo.value} × {combo.price}$
          </Button>
        ))
      }
    </Group>
  )
}

export default CombosButtons