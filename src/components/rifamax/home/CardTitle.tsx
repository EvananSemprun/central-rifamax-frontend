import { Group, Text } from '@mantine/core';
import { ICardTitle } from '@interfaces/index';

function CardTitle({ content, title }: ICardTitle) {
  return (
    <Group mb={10} justify='space-between'>
      <Text fw={700} size='md' >
        {title}
      </Text>
      <Text size="lg" >
        {content}
      </Text>
    </Group>
  );
}

export default CardTitle;
