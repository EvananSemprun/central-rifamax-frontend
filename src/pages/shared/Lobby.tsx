import classes from '@styles/shared/Lobby.module.css'
import ProductsCard from '@components/shared/Lobby/ProductsLobby'

function Lobby() {   
  return (
    <section className={classes.lobbyMain}>
      <ProductsCard />
    </section>
  )
}

export default Lobby