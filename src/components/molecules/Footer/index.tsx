// main tools
import Image from 'next/image'

// bootstrap components
import { Container } from 'react-bootstrap'

// prime components
import { Divider } from 'primereact/divider'

// styles
import classes from './styles.module.scss'

// types
import { FC } from 'react'

export const Footer: FC = () => (
  <footer className={classes.footer}>
    <Container className={classes.content}>
      <span className={classes.label}>Made by - JoseYanez</span>
      <Divider layout='vertical' className={classes.divider} />
      <span className={classes.label}>Powered by</span>{' '}
      <Image
        width={60}
        height={30}
        alt='vercel'
        src='/vercel.svg'
        className={classes.icon}
      />
    </Container>
  </footer>
)
