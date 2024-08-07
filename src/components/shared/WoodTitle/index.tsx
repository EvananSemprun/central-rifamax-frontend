import { IWoodTitle } from "@interfaces/index";
import { Divider, Group, Text } from "@mantine/core";

function WoodTitle({ title, variant }: IWoodTitle) {
  return (
    <>
      <Divider variant={variant} size="sm" />    
      <Group justify='center' w="100%">
        <Text mt={30} mb={30} fz={25} fw={400} >
          {title}
        </Text>
      </Group>
      <Divider variant={variant} mb={15} size="sm" />
    </>
  )
}

export default WoodTitle