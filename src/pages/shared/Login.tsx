import LoginForm from '@form/shared/Login.form'
import classes from '@styles/shared/Login.module.css'
import { Image } from '@mantine/core'

function Login() {
  return (
    <section className={classes.loginSection}>
      <div className={classes.loginCard}>
        <div className={classes.imageWrapper}>
          <Image 
            className={classes.logo}
            src="/images/logo.png" 
            alt="Rifamax Logo" 
            maw='22rem' 
          />
        </div>
        <LoginForm />
      </div>
    </section>
  )
}

export default Login