import { day } from '@utils/time';
import { Text } from '@mantine/core';
import { IInfoRafflesAccordion } from '@interfaces/index';

export function InfoRafflesAccordion({ title, init_date, seller }: IInfoRafflesAccordion) {
  return (
    <div>
      <Text fs='italic' c="dimmed" fz="xs">
        {day(init_date)}
      </Text>
      <Text fz={20} fw={500}>
        {title}
      </Text>
      <Text
        size="md"
        fw={700}
        variant="gradient"
        gradient={{ from: 'cyan', to: 'blue', deg: 45 }}
      >
        {seller}
      </Text>
    </div>
  );
}