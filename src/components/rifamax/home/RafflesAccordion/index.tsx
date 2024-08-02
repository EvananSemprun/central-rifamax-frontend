import { IconChevronDown } from '@tabler/icons-react';
import classes from './index.module.css'
import { Accordion, Divider } from '@mantine/core'
import { useState } from 'react';

const groceries = [
  {
    value: 'Apples',
    emoji: '🍎',
    description: 'An apple a day keeps the doctor away!',
  },
  {
    value: 'Bananas',
    emoji: '🍌',
    description: 'A banana is a great snack!',
  },
  {
    value: 'Carrots',
    emoji: '🥕',
    description: 'Carrots are good for your eyes!',
  },
];

function index() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelected(selected === key ? null : key);
  }

  const items = groceries.map((item, key: number) => (
    <>
      <Accordion.Item 
        key={item.value} 
        className={selected === String(key) ? classes.itemActive : classes.item}
        value={String(key)}
      >
        <Accordion.Control 
          icon={item.emoji}
          onClick={() => handleSelect(String(key))}
        >
          {item.value}
        </Accordion.Control>
        <Accordion.Panel>{item.description}</Accordion.Panel>
      </Accordion.Item>
      <Divider variant='dashed' my={5} />
    </>
  ));


  return (
    <Accordion 
      w="100%"
      mt={10}
      classNames={{ 
        root: classes.root,
        content: classes.content,
      }}
      variant="filled"
      chevron={<IconChevronDown className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
}

export default index;