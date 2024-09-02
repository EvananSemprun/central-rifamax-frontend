import RaffleCard from './RaffleCard';
import classes from './index.module.css';
import { useState } from 'react';
import { setBet } from '@utils/transform';
import { useNavigate } from 'react-router-dom';
import { Card, Text, Group, Center, Badge } from '@mantine/core';

interface ILobbyCard {
  title: string;
  price: number;
  numbers: number;
  url: string;
}

function LobbyCard({ title, numbers, price, url }: ILobbyCard) {
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const navigate = useNavigate()

  const navigateToModule = (url: string) => {
    return navigate(url)
  }

  return (
    <Card
      p="lg"
      shadow="lg"
      radius="md"
      className={classes.card}
      onClick={() => navigateToModule(url)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            'url(https://api.rifa-max.com/uploads/x100/raffle/ad/38/Moto_Bera.jpg)',
        }}
      />
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div>
          <Group justify="space-between" gap="xs">
            <Text size="lg" className={classes.title} fw={500}>
              {title}
            </Text>

            <Group gap="lg">
              <Center>
                <Badge
                  color='teal'
                  className={classes.badge}
                >
                  USD {price}
                </Badge>
              </Center>
              <Center>
                <Badge
                  className={classes.badge}
                >
                  {setBet(numbers)}
                </Badge>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
      { isHovering && <RaffleCard raffle={{id: 38}}/> }
    </Card>
  );
}

export default LobbyCard