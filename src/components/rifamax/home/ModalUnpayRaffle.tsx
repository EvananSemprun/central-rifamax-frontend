import useAuth from "@hooks/useAuth";
import WoodTitle from "@components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { useMutation } from "@tanstack/react-query";
import { Text, Title, Button } from "@mantine/core";
import { unpayRaffle } from "@api/rifamax/Raffles.request";
import { IconMailX, IconSkull } from "@tabler/icons-react";
import { IAccordionSteps, IRefetchRaffle } from "@interfaces/index";
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";

function ModalUnpayRaffle({ raffle_id, refetchRaffles }: IAccordionSteps & IRefetchRaffle) {
  const { token } = useAuth()

  const mutation = useMutation({
    mutationFn: unpayRaffle,
    onSuccess: () => {
      modals.closeAll()
      SuccessNotification({
        position: 'top',
        title: 'Rifa rechazada con éxito.',
        label: 'Su rifa ha sido rechazada exitosamente, revise la App de Rifamax.'
      });
      return refetchRaffles();
    },
    onError: () => (
      ErrorNotification({
        position: 'top',
        title: 'Ha ocurrido un error.',
        label: 'Ha ocurrido un error al rechazada la rifa de la app.'
      })
    )
  });

  const openUnpayRaffleModal = () => modals.open({
    title: <Title order={3}>Rechazar rifa</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="Desea rechazar la rifa?" variant="dashed" />
        <Text>
          Una vez realizada el rifero será bloqueado y no podrá crear nuevas rifas hasta nuevo aviso.
        </Text>
        <Button
          mt={15}
          variant="light"
          color="red"
          fullWidth
          leftSection={<IconSkull />}
          rightSection={<IconSkull />}
          onClick={() => {
            mutation.mutate({ token, raffle_id });
            modals.closeAll();
          }}

        >
          Rechazar pago y bloquear rifero
        </Button>
      </>
    )
  })

  return (
    <Button variant="light" size="xs" color="red" leftSection={<IconMailX size="1.2rem" />} onClick={openUnpayRaffleModal}>
      No pagada
    </Button>
  );
}

export default ModalUnpayRaffle
