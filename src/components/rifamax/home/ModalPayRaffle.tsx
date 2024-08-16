import React from 'react';
import WoodTitle from "@components/shared/WoodTitle";
import useAuth from "@/hooks/useAuth";
import { useForm } from '@mantine/form';
import { modals } from "@mantine/modals";
import { IAccordionSteps } from "@interfaces/index";
import { useMutation } from '@tanstack/react-query';
import { IconMailDollar } from "@tabler/icons-react";
import { payRaffle } from "@api/rifamax/Raffles.request";
import { Text, Group, NumberInput, Title, Button, Select } from "@mantine/core";
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";

function ModalPayRaffle({ raffle_id }: IAccordionSteps) {
  const { token } = useAuth();

  const form = useForm({
    initialValues: {
      price: 0,
      currency: '$',
    },
    validate: {
      price: (value) => (value > 0 ? null : 'El monto debe ser mayor que cero'),
      currency: (value) => (value ? null : 'Seleccione una moneda'),
    },
  });

  const mutation = useMutation({
    mutationFn: payRaffle,
    onSuccess: () => (
      SuccessNotification({
        position: 'top',
        title: 'Rifa Pagada con éxito.',
        label: 'Su rifa ha sido Pagada exitosamente, revise la App de Rifamax.'
      })
    ),
    onError: () => (
      ErrorNotification({
        position: 'top',
        title: 'Ha ocurrido un error.',
        label: 'Ha ocurrido un error al Pagar la rifa a la app.'
      })
    )
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
            console.log({
              token,
              raffle_id,
              data: values
            });

            mutation.mutate({
              token,
              raffle_id,
              data: values
            });
            modals.closeAll();
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
              data={[
                { value: '$', label: '$' },
                { value: 'Bs', label: 'Bs' },
                { value: 'Cop', label: 'Cop' }
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

