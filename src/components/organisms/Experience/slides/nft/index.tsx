// main tools
import { Image } from 'primereact/image'

// styles
import classes from './styles.module.scss'

// types
import { FC } from 'react'

export const NftExperience: FC = () => {
  const pics = [
    '/assets/pics/nft/trippyWorld1.png',
    '/assets/pics/nft/trippyWorld2.png'
  ]
  return (
    <article className={classes.nft}>
      <h2 className={classes.subtitle}>NFT Project - TrippyWorld</h2>
      <h3 className={classes.small}>2023</h3>
      <p>
        Inicié en este proyecto como freelance donde el cliente necesitaba hacer
        cambios de icons, font-sizes y algunas optimizaciones. Tecnologias
        usadas, Next JS.
      </p>

      <div className='mt-5 w-100 text-center'>
        {pics.map((pic) => (
          <Image
            preview
            key={pic}
            width='300'
            height='200'
            alt='trippyWorld'
            className={classes.nft}
            src={pic}
          />
        ))}
      </div>
    </article>
  )
}
