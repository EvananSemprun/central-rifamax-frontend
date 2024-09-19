import useAuth from "@/hooks/useAuth";
import WoodTitle from "@components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { useMutation } from '@tanstack/react-query';
import { sendToApp } from "@api/rifamax/Raffles.request";
import { Title, Button, Grid ,Text} from "@mantine/core";
import { IconDeviceMobileMessage } from "@tabler/icons-react";
import { IAccordionSteps, IRefetchRaffle } from "@interfaces/index";
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";

function ModalSendToApp({ raffle_id, refetchRaffles }: IAccordionSteps & IRefetchRaffle) {
  const { token } = useAuth();

  const mutation = useMutation({
    mutationFn: sendToApp,
    onSuccess: () => {
      SuccessNotification({
        position: 'top',
        title: 'Rifa enviada con éxito.',
        label: 'Su rifa ha sido enviada exitosamente, revise la App de Rifamax.'
      });
      refetchRaffles(); // Refrescar las rifas después de enviar a la app
    },
    onError: () => {
      ErrorNotification({
        position: 'top',
        title: 'Ha ocurrido un error.',
        label: 'Ha ocurrido un error al enviar la rifa a la app.'
      });
    }
  });

  const openSentToAppModal = () => modals.open({
    title: <Title order={3}>Enviar a APP</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="¿Seguro de enviar al APP?" variant="dashed" />
        <Grid mt={15}>
          <Grid.Col span={6}>
            <Button
              fullWidth
              variant="light"
              color="red"
              size="sm"
              onClick={() => modals.closeAll()}
            >
              Cancelar
            </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button
              fullWidth
              variant="light"
              color="teal"
              size="sm"
              onClick={() => {
                mutation.mutate({ token, raffle_id });
                modals.closeAll();
              }}
            >
              Enviar
            </Button>
          </Grid.Col>
        </Grid>
        <Text mt={10} ta='center' c="dimmed">Esta acción es irreversible</Text>
      </>
    )
  });

  return (
    <Button
      variant="light"
      color="blue"
      size="xs"
      leftSection={<IconDeviceMobileMessage size="1.2rem" />}
      onClick={openSentToAppModal}
    >
      Enviar a APP
    </Button>
  );
}

export default ModalSendToApp;
