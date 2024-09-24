import useAuth from "@hooks/useAuth";
import WoodTitle from "@components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { useForm } from '@mantine/form';
import { payRaffle } from "@api/rifamax/Raffles.request";
import { useMutation } from '@tanstack/react-query';
import { IconMailDollar } from "@tabler/icons-react";
import { IAccordionSteps, IRefetchRaffle } from "@interfaces/index";
import { Text, Group, NumberInput, Title, Button, Select } from "@mantine/core";
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";

function ModalPayRaffle({ raffle_id, refetchRaffles }: IAccordionSteps & IRefetchRaffle) {
  const { token } = useAuth();

  const form = useForm({
    initialValues: {
      price: undefined,
      currency: '',
    },
    validate: {
      price: (value) => (value && value > 0 ? null : 'El monto debe ser mayor que cero'),
      currency: (value) => (value ? null : 'Seleccione una moneda'),
    },
  });

  const mutation = useMutation({
    mutationFn: payRaffle,
    onSuccess: () => {
      modals.closeAll();
      SuccessNotification({
        position: 'top',
        title: 'Rifa Pagada con éxito.',
        label: 'Su rifa ha sido pagada exitosamente, revise la App de Rifamax.'
      });
      refetchRaffles();
    },
    onError: () => {
      ErrorNotification({
        position: 'top',
        title: 'Ha ocurrido un error.',
        label: 'Ha ocurrido un error al Pagar la rifa a la app.'
      });
    }
  });

  const openPayRaffleModal = () => modals.open({
    title: <Title order={3}>Pagar rifa</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="¿Desea pagar esta rifa?" variant="dashed" />
        <Text ta="center">
          Una vez realizado el pago de la rifa esta no podrá ser modificada, ¿está seguro de realizar esta acción?
        </Text>
        <form
          onSubmit={form.onSubmit((values) => {
            const price = values.price || 0;
            mutation.mutate({
              token,
              raffle_id,
              data: {
                price,
                currency: values.currency,
              }
            });
          })}
        >
          <Group mt={15} mb={15} gap={10} justify="space-between">
            <NumberInput
              radius='sm'
              hideControls
              w='calc(75% - 5px)'
              withAsterisk
              label="Monto"
              placeholder="Ingrese el monto"
              min={0}
              {...form.getInputProps('price')}
            />
            <Select
              ml={-12}
              radius='sm'
              w='calc(25% - 5px)'
              withAsterisk
              data={[
                { value: 'USD', label: 'USD' },
                { value: 'VES', label: 'Bs.D' },
                { value: 'COP', label: 'COP' }
              ]}
              label="Moneda"
              {...form.getInputProps('currency')}
            />
          </Group>
          <Group mt={10}>
            <Button
              w='49%'
              variant="light"
              color="teal"
              type="submit"
            >
              Aceptar
            </Button>
            <Button
              variant="light"
              w='47%'
              color="red"
              onClick={() => modals.closeAll()}
            >
              Rechazar
            </Button>
          </Group>
        </form>
      </>
    )
  });

  return (
    <Button variant="light" size="xs" color="teal" leftSection={<IconMailDollar size='1.2rem' />} onClick={openPayRaffleModal}>
      Pagada
    </Button>
  );
}

export default ModalPayRaffle;
