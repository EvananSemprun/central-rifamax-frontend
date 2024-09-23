import useAuth from "@hooks/useAuth";
import WoodTitle from "@components/shared/WoodTitle";
import { useState } from 'react';
import { modals } from "@mantine/modals";
import { useMutation } from "@tanstack/react-query";
import { refundRaffle } from "@/api/rifamax/Raffles.request";
import { IAccordionSteps } from "@interfaces/index";
import { IconMailForward } from "@tabler/icons-react";
import { TextInput, Text, Title, Button, Group } from "@mantine/core";
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";

function ModalRefundRaffle({ raffle_id, wildcard }: IAccordionSteps) {
  const { token } = useAuth();

  const [inputValue] = useState('');

  const mutation = useMutation({
    mutationFn: refundRaffle,
    onSuccess: () => {
      modals.closeAll()
      return SuccessNotification({
        position: 'top',
        title: 'Rifa enviada con exito.',
        label: 'Su rifa ha sido enviada exitosamente, revise la App de Rifamax.'
      })
    },
    onError: () => (
      ErrorNotification({
        position: 'top',
        title: 'Ha ocurrido un error.',
        label: 'Ha ocurrido un error a enviar la rifa a la app.'
      })
    )
  });
  
  const openRefundRaffleModal = () => modals.open({
    title: <Title order={3}>Devolver rifa</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="¿Desea devolver esta rifa?" variant="dashed" />
        <Text>
          Desea devolver el dinero pagado al rifero? Esta acción no tiene vuelta atrás una vez realizada.
        </Text>

        <Text mt={35}>
          Ingrese el serial del signo: <strong>{String(wildcard).toUpperCase()}</strong>
        </Text>

        <Group>
          <TextInput
            value={inputValue}
            
            w='100%'
            placeholder="Verificar serial"
          />

          {/* <ActionIcon ml={-55} variant="subtle" aria-label="Reset">
            <IconReload stroke={3} />
          </ActionIcon> */}
        </Group>

        <Button
          fullWidth
          mt={15}
          variant="light"
          color="teal"
          size="sm"
          onClick={() => {
            mutation.mutate({ token, raffle_id });
          }}
        >
          Enviar
        </Button>
      </>
    )
  });
  
  return (
    <Button variant="light" size="xs" leftSection={<IconMailForward size="1.2rem" />} onClick={openRefundRaffleModal}>
      Devolver
    </Button>
  );
}

export default ModalRefundRaffle;
