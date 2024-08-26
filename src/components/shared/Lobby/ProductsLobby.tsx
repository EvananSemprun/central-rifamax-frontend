import useUser from '@hooks/useUser'
import classes from './ProductsLobby.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { products } from '@assets/products'
import { useNavigate } from 'react-router-dom'
import { Card, Center, Group, Image, Loader, Text } from '@mantine/core'

function ProductsCard() {
  const [productSelected, setProductSelected] = useState<string>('')

  const navigate = useNavigate()
  const { user } = useUser()

  const navigateTo = (productLink: string, productName: string) => {
    setProductSelected(productName)
    setTimeout(() => {
      navigate(productLink)
    }, 1200)
  }

  return (
    <>
      <motion.div 
        style={{
          display: productSelected === '' ? 'none' : 'block',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: '999',
          position: 'absolute',
          width: '100%',
          height: '100vh',
          top: 0
        }}
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <Group w='100%' h='100%' align='center' justify='center'>
          <Card>
            <Text fz={18}>Redirigiendote al producto seleccionado</Text>
            <Text fz={24} ta='center' fs="italic">{productSelected}</Text>
            <div style={{ display: 'flex' }}>
              <Center w="100%" mt={10}>
                <Loader variant='bars' />
              </Center>
            </div>
          </Card>
        </Group>
      </motion.div>
      {products.map((product) => (
        product.roles.includes(user?.role || '') && (
          <Card 
            key={product.name}
            bg={product.color}
            className={classes.productCard}
            onClick={() => navigateTo(product.to, product.name)}
          >
            <div className={classes.imageWrapper}>
              <Image
                className={classes.productLogo}
                src={product.image} 
                alt={product.name} 
                w='100%'
              />
            </div>
          </Card>
        )
      ))}
    </>
  )
}

export default ProductsCard