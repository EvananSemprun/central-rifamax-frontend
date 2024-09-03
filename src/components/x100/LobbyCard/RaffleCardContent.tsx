import { addDay } from "@utils/time";
import { setOrdinal } from "@utils/transform";
import { IRaffleCardContent } from "@interfaces/index";
import { useElementSize } from "@mantine/hooks";
import { Avatar, Card, Group, Loader, RingProgress, Text } from "@mantine/core";

function RaffleCardContent({ raffle, isPending, request }: IRaffleCardContent) {
  const { ref, width } = useElementSize();

  const betDetails = [
    { label: 'Loteria:', value: raffle.lotery },
    { label: 'Tipo de Rifa:', value: `${raffle.tickets_count} tickets` },
  ]

  const Bet = () => (
    betDetails.map((bet, index) => (
      <Group key={index} justify="space-between">
        <Text fw={700} fz="sm" c="blue">
          {bet.label}
        </Text>
        <Text fw={400} fz="sm">
          {bet.value}
        </Text>
      </Group>
    ))
  )

  const Details = () => (
    raffle?.prizes?.map((item, index) => (
      <>
        <Group key={index} justify="space-between">
          <Text fw={700} fz="sm" c="blue">
            {setOrdinal(index + 1)} premio:
          </Text>
          <Text fw={400} fz="sm">
            {item.name}
          </Text>
        </Group>
        <Group key={index} justify="space-between">
          <Text fw={700} fz="sm" c="blue">
            Fecha:
          </Text>
          <Text fw={400} fz="sm">
            {addDay(raffle.expired_date, item.days_to_award)}
          </Text>
        </Group>
      </>
    ))
  )

  return (
    <Card
      w="100%"
      h="100%"
      shadow="md"
      radius="0 0 5px 5px"
      ref={ref}
    >
      <Group 
        h="100%"
        justify={width > 350 ? "space-between" : "center"} 
      >
        <div>
          <Details />
          <Bet />
        </div>
        {
          width > 350 && (
            <Avatar h="100%" w={150} radius="xl">
              {
                isPending ? <Loader /> : (
                  <RingProgress
                    size={150}
                    thickness={10}
                    roundCaps
                    label={
                      <Text size="md" fw={700} ta="center">
                        {request?.data.progress}%
                      </Text>
                    }
                    sections={[{ value: Number(request?.data.progress), color: 'teal' }]}
                  />
                )
              }
            </Avatar>
          )
        }
      </Group>
    </Card>
  );
};

export default RaffleCardContent