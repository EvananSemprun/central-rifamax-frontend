import { Button, Text } from "@mantine/core"
import { toBet } from "@utils/transform"
import { IRaffleTicket } from "@interfaces/index"

function index({
  value,
  betType,
  select = true,
  className,
  onSelect
}: IRaffleTicket) {
  return (
    <Button 
      disabled={!select} 
      className={className}
      size="lg"
      radius="lg"
      onSelect={() => {
        select ? onSelect : undefined
      }}
    >
      <Text fw={350} fz={25}>
        {toBet({ value, betType })}  
      </Text>
    </Button>
  )
}

export default index