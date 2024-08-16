import { motion } from 'framer-motion';
import { modals } from '@mantine/modals';
import { Button, Card, Grid, Text, Title } from '@mantine/core';

function ModalTicketRaffle() {
  const zodiacSigns = [
    "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo",
    "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"
  ];

  const openCloseDayModal = () => modals.open({
    title: (
      <>
        <Title order={3}>Tickets - Rifa: Signos Zodiacales</Title>
      </>
    ),
    size: 'lg',
    centered: true,
    closeOnClickOutside: false,
    children: (
      <>
        <Grid mt={15}>
          {zodiacSigns.map((signo, index) => (
            <Grid.Col span={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.15 }
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card h={145} shadow="sm" padding="lg" radius="md" style={{ position: 'relative' }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "-15px",
                      background: 'red',
                      transform: 'rotate(30deg)',
                      padding: '2px 8px' 
                    }}
                  >
                    <Text ta='center' ml={15} size="xs" w={100} c='white'>
                      Vendido
                    </Text>
                  </div>

                  <Text mt={35} ta="center" size="lg">{signo}</Text>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </>
    ),
  });

  return (
    <Button
      variant="light"
      size="lg" radius="xs"
      onClick={openCloseDayModal}
    >
      Cerrar día
    </Button>
  );
}

export default ModalTicketRaffle;
