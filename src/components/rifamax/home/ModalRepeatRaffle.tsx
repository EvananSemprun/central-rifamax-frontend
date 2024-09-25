import useAuth from "@/hooks/useAuth";
import WoodTitle from "@components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { repeatToApp } from "@api/rifamax/Raffles.request";
import { DatePickerInput } from "@mantine/dates";
import { IconCash, IconNumber, IconReload } from "@tabler/icons-react";
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";
import { IAccordionSteps, IRefetchRaffle, IRepeatRaffleForm } from "@interfaces/index";
import { Group, NumberInput, Title, Button, Select, ActionIcon } from "@mantine/core";
import { LOTERIES } from "@assets/loteries";

function ModalRepeatRaffle({ raffle_id, refetchRaffles }: IAccordionSteps & IRefetchRaffle) {
  const { token } = useAuth();

  const mutation = useMutation({
    mutationFn: repeatToApp,
    onSuccess: () => {
      modals.closeAll()
      SuccessNotification({
        position: 'top',
        title: 'Rifa repetida con éxito.',
        label: 'Su rifa ha sido repetida exitosamente, revise la App de Rifamax.',
      })
      return refetchRaffles()
    },
    onError: () => (
      ErrorNotification({
        position: 'top',
        title: 'Ha ocurrido un error.',
        label: 'Ha ocurrido un error al repetir la rifa.',
      })
    ),
  });

  const form = useForm<IRepeatRaffleForm>({
    initialValues: {
      numbers: 1,
      lotery: 'Zulia 7A',
      init_date: null,
    },
    validate: {
      numbers: (value) => value ? null : 'Ingrese un número válido',
      lotery: (value) => value.length > 0 ? null : 'Ingrese el nombre de la lotería',
      init_date: (value) => value ? null : 'Seleccione una fecha válida',
    },
  });

  const openRepeatRaffleModal = () => modals.open({
    title: <Title order={3}>Repetir rifa</Title>,
    centered: true,
    children: (
      <form onSubmit={form.onSubmit((values) => {
        mutation.mutate({
          token: token,
          raffle_id: raffle_id,
          data: values
        });
        modals.closeAll();
      })}>
        <WoodTitle title="¿Desea repetir esta rifa?" variant="dashed" />
        <DatePickerInput
          mt="md"
          mb={15}
          label="Fecha de la rifa"
          radius="sm"
          placeholder="Fecha de la rifa"
          {...form.getInputProps('init_date')}
        />
        <Group justify="center" mb={15}>
          <NumberInput
            radius="sm"
            label="Números"
            hideControls
            w="47%"
            withAsterisk
            rightSection={<IconNumber />}
            {...form.getInputProps('numbers')}
          />
          <Select
            label="Lotería"
            radius="sm"
            w="49%"
            rightSection={<IconCash />}
            data={LOTERIES}
            withAsterisk
            {...form.getInputProps('lotery')}
          />
        </Group>
        <Button type="submit" variant="light" fullWidth>
          Repetir
        </Button>
      </form>
    ),
  });

  return (
    <ActionIcon
      variant="outline"
      color="#4C4C63"
      size="xs"
      p={15}
      radius="lg"
      w={60}
      onClick={openRepeatRaffleModal}
    >
      <IconReload color="white" stroke={1.5} size="1rem" />
    </ActionIcon>
  );
}

export default ModalRepeatRaffle;
