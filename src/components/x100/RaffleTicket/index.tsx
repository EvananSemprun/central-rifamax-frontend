import { IRaffleTicket } from "@interfaces/index"

function index({
  value,
  betType,
  select = true,
  onSelect
}: IRaffleTicket) {
  return (
    <div>index</div>
  )
}

export default index