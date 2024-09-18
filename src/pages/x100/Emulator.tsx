import './Emulator.css';
import { Avatar, Text, Group, Button, Image } from '@mantine/core';

type Props = {}

function Emulator({ }: Props) {
  return (
    <>
      <header className="header">
        <div>
          <Image
            src="/images/cdafake.png"
            alt="Rifamax Logo"
            height="1.5rem"
            className="logo"
          />
        </div>
        <nav className="nav">
          <Group>
            <Avatar radius="xl" />
            <div className="nav-item">4 Bocas</div>
          </Group>
        </nav>
      </header>

      <div className="sub-header">
        <div className="sub-nav-left">
          <Button fw={700} variant="outline" size="xs" color="gray">
            Home 
          </Button>
          <Button fw={700} variant="outline" size="xs" color="gray">
            Tiples
          </Button>
          <Button fw={700} variant="outline" size="xs" color="gray">
            Animalitos
          </Button>
        </div>
        <div className="sub-nav-right">
          <Text fw={700}>
            40 $
          </Text>
        </div>
      </div>
    </>
  );
}

export default Emulator;
