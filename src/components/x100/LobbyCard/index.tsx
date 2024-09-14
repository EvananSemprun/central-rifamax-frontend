import RaffleCard from './RaffleCard';
import classes from './index.module.css';
import { useState } from 'react';
import { setBet } from '@utils/transform';
import { useNavigate } from 'react-router-dom';
import { ILobbyCard } from '@interfaces/index';
import { Card, Text, Group, Center, Badge } from '@mantine/core';

function LobbyCard({ raffle, url, isIntegrator = false, integratorToken }: ILobbyCard) {
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
              {raffle.title}
            </Text>

            <Group gap="lg">
              <Center>
                <Badge
                  color='teal'
                  className={classes.badge}
                >
                  USD {raffle.price_unit}
                </Badge>
              </Center>
              <Center>
                <Badge
                  className={classes.badge}
                >
                  {setBet(raffle.tickets_count)}
                </Badge>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
      { isHovering && (
          <RaffleCard 
            raffle={raffle} 
            isIntegrator={isIntegrator}
            integratorToken={integratorToken}
          /> 
        )
      }
    </Card>
  );
}

export default LobbyCard