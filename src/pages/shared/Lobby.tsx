import products from '@assets/products.json'
import classes from '@styles/shared/Lobby.module.css'
import { useNavigate } from 'react-router-dom'
import { Card, Image, Text } from '@mantine/core'

function Lobby() { 
  const navigate = useNavigate()
  
  const Products = () => (
    products.map((product, index) => (
      <Card 
        key={index}
        bg={product.color}
        className={classes.productCard}
        onClick={() => navigate(product.to)}
      >
        <div className={classes.imageWrapper}>
          <Image 
            className={classes.productLogo}
            src={product.image} 
            alt={product.name} 
            w="100%"
          />
        </div>
        <div className={classes.titleWrapper}>
          <Text className={classes.productText}>
            {product.name}
          </Text>
        </div>
      </Card>
    ))
  )
  
  return (
    <section className={classes.lobbyMain}>
      <Products />
    </section>
  )
}

export default Lobby