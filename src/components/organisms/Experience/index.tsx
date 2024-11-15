// components
import { CentriaExperience } from './slides/centria'

// bootstrap components
import { Container, Carousel } from 'react-bootstrap'

// styles
import classes from 'styles/pages/experience/styles.module.scss'

// types
import { FC } from 'react'
import { NftExperience } from './slides/nft'
import { MenuExperience } from './slides/menu'

export const Experience: FC = () => {
  return (
    <>
      <Container className={classes.experience}>
        <h1 className={classes.title}>Experiencia</h1>

        <Carousel wrap={false} interval={null} className={classes.carousel}>
          <Carousel.Item>
            <CentriaExperience />
          </Carousel.Item>
          <Carousel.Item>
            <NftExperience />
          </Carousel.Item>
          <Carousel.Item>
            <MenuExperience />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}
