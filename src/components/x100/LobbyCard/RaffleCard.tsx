import { motion } from "framer-motion";
import { useElementSize } from "@mantine/hooks";
import { Avatar, Card, Group, Loader, rgba, RingProgress, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getProgress } from "@api/x100/Raffles.request";
import useAuth from "@hooks/useAuth";
import { AxiosResponse } from "axios";
import { IGetProgressResponse } from "@interfaces/requests.interfaces";
import { ITripleRaffle } from "@interfaces/models.interfaces";

interface IRaffleCard {
  raffle: {
    id: number;
  }
}

const RaffleCard: React.FC<IRaffleCard> = ({ raffle }) => {
  const { ref, width } = useElementSize();
  const { token } = useAuth();

  const prizes = [
    {
      name: 'Moto Bera SBR 2024',
      days_to_award: 15,
      prize_position: 1
    },
    {
      name: '500$',
      days_to_award: 15,
      prize_position: 2
    }
  ]

  const { data: request, isLoading } = useQuery<AxiosResponse<IGetProgressResponse>>({
    queryKey: ['raffle', 'progress', raffle.id],
    queryFn: () => getProgress({ token: token, raffleId: raffle.id})
  })

  const PostCard: React.FC = () => {
    const details = [
      { label: '1er premio:', value: 'Moto' },
      { label: 'Fecha:', value: '30/09/2024' },
      { label: '2do premio:', value: '500$' },
      { label: 'Fecha:', value: '30/09/2024' },
      { label: 'Loteria:', value: 'Zulia 7A' },
      { label: 'Tipo de Rifa:', value: '1000 tickets' },
    ];

    // const newDetails = [
    //   prizes.map((item, index) => {
    //     return (
    //       { label: `Premio #${index + 1}:`, value: item.name }, { label: `Premio #${index + 1}:`, value: item.name }
    //     )
    //   })
    // ]

    return (
      <Card
        w="100%"
        h="100%"
        shadow="md"
        radius="0 0 5px 5px"
        ref={ref}
      >
        <Group justify={width > 350 ? "space-between" : "center"} h="100%">
          <div>
            {details.map((detail, index) => (
              <Group key={index} justify="space-between">
                <Text fw={700} fz="sm" c="blue">
                  {detail.label}
                </Text>
                <Text fw={400} fz="sm">
                  {detail.value}
                </Text>
              </Group>
            ))}
          </div>
          {
            width > 350 && (
              <Avatar h="100%" w={150} radius="xl">
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
              </Avatar>
            )
          }
        </Group>
      </Card>
    );
  };

  return (
    <motion.div
      style={{ 
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '0 7px 20% 7px',
        top: '-100%',
        right: 0,
        background: rgba('0, 0, 0', 0.8),
      }}
      animate={{ top: '0%' }}
    >
      <PostCard />
    </motion.div>
  );
};

export default RaffleCard;
