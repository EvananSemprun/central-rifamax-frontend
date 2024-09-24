import useAuth from "@hooks/useAuth";
import WoodTitle from "@components/shared/WoodTitle";
import { useState } from 'react';
import { modals } from "@mantine/modals";
import { useMutation } from "@tanstack/react-query";
import { IconMailForward } from "@tabler/icons-react";
import { refundRaffle } from "@/api/rifamax/Raffles.request";
import { IAccordionSteps, IRefetchRaffle } from "@interfaces/index";
import { TextInput, Text, Title, Button, Group } from "@mantine/core";
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";

function ModalRefundRaffle({ raffle_id, wildcard, refetchRaffles }: IAccordionSteps & IRefetchRaffle) {
  const { token } = useAuth();

  const [serialSign, setSerialSign] = useState<string>('');

  const mutation = useMutation({
    mutationFn: refundRaffle,
    onSuccess: () => {
      modals.closeAll()
      SuccessNotification({
        position: 'top',
        title: 'Rifa devuelta con exito.',
        label: 'Su rifa ha sido devuelta exitosamente, revise la App de Rifamax.'
      })
      return refetchRaffles()
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
            w='100%'
            value={serialSign}
            placeholder="Verificar serial"
						onChange={(e) => setSerialSign(e.currentTarget.value)}
          />
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
