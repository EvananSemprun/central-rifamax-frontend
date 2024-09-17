import { Text, Group, Chip } from '@mantine/core';
import RepeatRaffleModal from '../ModalRepeatRaffle';
import { ITitlesRafflesAccordion } from '@interfaces/index';

export function TitlesRafflesAccordion({ id, numbers }: ITitlesRafflesAccordion) {
  return (
    <div>
      <Group justify="space-between" mb={5} mx={5}>
        <Text size="sm">Repetir</Text>
        <Text size="sm">Serie</Text>
        <Text size="sm">Numero</Text>
      </Group>
      <Group justify="space-between">
      <RepeatRaffleModal raffle_id={id} />
      <Chip checked={false} variant="outline" size='sm' color="gray">{id}</Chip>
        <Chip checked={false} variant="outline" size='sm' color="gray">{numbers}</Chip>
      </Group>
    </div>
  );
}
