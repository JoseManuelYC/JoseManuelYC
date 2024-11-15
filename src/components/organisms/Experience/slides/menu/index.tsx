// main tools
import { Image } from 'primereact/image'

// styles
import classes from './styles.module.scss'

// types
import { FC } from 'react'

export const MenuExperience: FC = () => {
  const pics = ['/assets/pics/menu/menu.jpeg', '/assets/pics/menu/menu1.jpeg']
  return (
    <article className={classes.menu}>
      <h2 className={classes.subtitle}>Menu - Template</h2>
      <h3 className={classes.small}>2022</h3>
      <p>
        Inicié en este proyecto como freelance donde el cliente necesitaba hacer
        una optimizacion completa, o rebranding a sus dos aplicaciones. Ya que
        no le funcionaba bien en Mobile y no tenia buen rendimiento. Se le hizo
        un rebranding, optimizacion y mejora de imagen. Tecnologia: React App
      </p>

      <div className='mt-5 w-100 text-center'>
        {pics.map((pic) => (
          <Image
            preview
            key={pic}
            width='300'
            height='200'
            alt='trippyWorld'
            className={classes.menu}
            src={pic}
          />
        ))}
      </div>
    </article>
  )
}
