import { Button } from "@mantine/core"
import { IPagyButtons } from "@interfaces/index"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
 
function PagyButtons({
  onPressedUp,
  onPressedDown,
  disabledUp,
  disabledDown,
  className,
  p = 5,
  size = 'xs',
  color = 'blue',
  variant = 'light',
}: IPagyButtons) {
  return (
    <>
      <Button 
        p={p} 
        size={size} 
        color={color}
        variant={variant} 
        onClick={onPressedUp} 
        disabled={disabledUp}
        className={className}
        >
        <IconChevronUp />
      </Button>
      <Button 
        p={p} 
        size={size} 
        color={color}
        variant={variant} 
        className={className}
        onClick={onPressedDown} 
        disabled={disabledDown}
      >
        <IconChevronDown />
      </Button>
    </>
  )
}

export default PagyButtons