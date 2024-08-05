import useUser from '@hooks/useUser'
import classes from './ProductsLobby.module.css'
import { products } from '@assets/products'
import { Card, Image } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

function ProductsCard() {
  const navigate = useNavigate()
  const { user } = useUser()

  return (
    products.map((product) => (
      product.roles.includes(user?.role || '') && (
        <Card 
          key={product.name}
          bg={product.color}
          className={classes.productCard}
          onClick={() => navigate(product.to)}
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
    ))
  )
}

export default ProductsCard