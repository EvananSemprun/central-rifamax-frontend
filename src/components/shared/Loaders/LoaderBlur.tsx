import { ILoaderBlur } from '@interfaces/index'
import { Group, Loader, LoadingOverlay, Text } from '@mantine/core'

function LoaderBlur({ label }: ILoaderBlur) {
  return (
    <LoadingOverlay
      visible={true}
      zIndex={1000}
      overlayProps={{ radius: 'sm', blur: 2 }}
      loaderProps={{ children: (
        <Group align='center'>
          <Loader/>
          <Text ta="center">{label}</Text>
        </Group>
      ) }}
      title={label}
    />
  )
}

export default LoaderBlur;