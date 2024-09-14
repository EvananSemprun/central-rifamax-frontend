import classes from './PriceText.module.css'
import { Text } from "@mantine/core"
import { IPriceText } from "@interfaces/index"

function PriceText({ price }: IPriceText) {
  return (
    <Text className={classes.priceText}>
      ticket: {price.toFixed(2)}$
    </Text>
  )
}

export default PriceText