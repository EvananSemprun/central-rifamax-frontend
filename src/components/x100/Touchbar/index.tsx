import PagyButtons from './PagyButtons'
import classes from './index.module.css'
import { Group } from "@mantine/core"
import { ITouchBar } from '@interfaces/index'
import CurrencyButtons from './CurrencyButtons'
import CombosButtons from './CombosButtons'
import PriceText from './PriceText'
import { useViewportSize } from '@mantine/hooks'

function TouchBar({ 
  pagyButton, 
  currencyButton,
  combosButtons,
  priceText,
}: ITouchBar) {
  const { width } = useViewportSize()

  const Divider = () => width >= 900 ? <div className={classes.divider} /> : <div className={classes.dividerTransparent} />

  return (
    <Group className={classes.touchbarWrapper}>
      <PagyButtons {...pagyButton} />
      <Divider />
      <CurrencyButtons {...currencyButton} />
      <Divider />
      <CombosButtons {...combosButtons} />
      <Divider />
      <PriceText {...priceText} />
      <Divider />
    </Group>
  )
}

export default TouchBar