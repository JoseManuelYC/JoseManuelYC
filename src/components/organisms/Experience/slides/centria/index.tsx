// main tools
import Image from 'next/image'

// styles
import classes from './styles.module.scss'

// types
import { FC } from 'react'

export const CentriaExperience: FC = () => (
  <article className={classes.centria}>
    <h2 className={classes.subtitle}>Mi experiencia en The Centria Group</h2>

    <div className='mt-4 w-100 text-center'>
      <Image
        width={300}
        height={60}
        alt='Redleaf'
        className={classes.redleaf}
        src='/assets/pics/centria/centria.svg'
      />
    </div>
    <h3 className={classes.small}>2023-2024</h3>
    <p>
      Inicié en The Centria Group como desarrollador web backend, contratado por
      mis conocimientos en Nest.js, donde estuve en un mes de prueba con el
      equipo de desarrollo, luego de ese mes de prueba, quedé seleccionado como
      desarrollador en donde estuve trabajando con el equipo de backend en dos
      proyectos aplicando mis conocimientos y aprendiendo de todo el equipo.
      Donde implementé pruebas unitarias y pruebas end-to-end, ya posteriormente
      trabajando en features y fixes para ambos proyectos. Poco a poco ya se me
      fueron asignando actividades con mas responsabilidades y aprendiendo
      muchas cosas nuevas en el trayecto.
    </p>

    <div className='mt-5 w-100 text-center'>
      <Image
        width={300}
        height={120}
        alt='Redleaf'
        className={classes.centria}
        src='/assets/pics/centria/mindfit.svg'
      />
    </div>
    <p>
      Mindfit, fue el primer proyecto en el que estuve trabajando, se usan
      principalmente las tecnologias de NestJS, TypeORM, PostgreSQL, GraphQL,
      Jest JS. En el que se usa una arquitectura monolitica. Primeramente inicié
      implementando test unitarios para posteriormente hacer implementaciones
      mas complejas
    </p>

    <div className='mt-5 w-100 text-center'>
      <Image
        width={300}
        height={160}
        alt='Redleaf'
        className={classes.centria}
        src='/assets/pics/centria/dr-keyword.svg'
      />
    </div>

    <p>
      En paralelo a Mindfit comence en otro proyecto llamado Dr Keyword, la cual
      es una plataforma enfocada en la elaboracion de campañas por medio de la
      modalidad de guest posting, utilizando chat gpt e inteligencia artificial
      para facilitar el proceso de redaccion, analisis y consejos de publicacion
      a los usuarios de esta plataforma
    </p>
    <p>
      Es un proyecto que utiliza una arquitectura de microservicios, con las
      mismas tecnologias base de Mindfit. Es un proyecto mucho mas complejo en
      el cual tambien tuve la oportunidad de trabajar.
    </p>
  </article>
)
