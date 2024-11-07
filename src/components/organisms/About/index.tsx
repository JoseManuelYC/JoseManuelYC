// main tools
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

// bootstrap components
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

// prime components
import { Rating } from 'primereact/rating'

// hooks
import { useApp } from 'hooks/use-app'

// styles
import classes from 'styles/pages/about/styles.module.scss'

// types
import { FC } from 'react'

export const AboutPage: FC = () => {
  const { toast } = useApp()
  const birthdate = dayjs('05/07/1999')
  const [showRatingComponent, setShowRatingComponent] = useState(false)

  const skills = [
    { label: 'Nest Js' },
    { label: 'Typescript' },
    { label: 'Node.js' },
    { label: 'Docker' },
    { label: 'GraphQL' },
    { label: 'Jest.Js' },
    { label: 'Git' }
  ]

  const knowledges = [
    { label: 'Firebase' },
    { label: 'Cloudinary' },
    { label: 'MongoDB' },
    { label: 'PostgreSQL' },
    { label: 'Next.js' },
    { label: 'Material UI' }
  ]

  /**
   * handle copy on clipboard my email
   */
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText('joseyanezcontact@gmail.com')
      .then(() =>
        toast()?.show({
          summary: 'Éxito!',
          severity: 'success',
          detail: 'Correo copiado éxitosamente'
        })
      )
      .catch(() =>
        toast()?.show({
          summary: 'Error',
          severity: 'error',
          detail: 'Error copiando el correo'
        })
      )
  }

  /**
   * handle show
   */
  useEffect(() => setShowRatingComponent(true), [])

  return (
    <Container className={classes.about}>
      <h1 className={classes.title}>Sobre mí</h1>

      <h2 className={classes.subtitle}>
        Hola! mi nombre es:{' '}
        <span className={classes.name}>Jose Manuel Yañez Colombo</span>
      </h2>
      <p className={classes.small}>
        Soy un apasionado desarrollador Back-end con un enfoque constante en la
        innovación y el aprendizaje. Desde que comencé mi carrera en el
        desarrollo de software, he estado fascinado por las nuevas tecnologías y
        su capacidad para transformar nuestra manera de vivir y trabajar. Cada
        día es una oportunidad para adquirir nuevos conocimientos y mejorar mis
        habilidades, y me esfuerzo por mantenerme al día con las últimas
        tendencias en el mundo de la programación. Fuera del ámbito tecnológico,
        soy un entusiasta del deporte y la música. Creo firmemente que un estilo
        de vida activo y un buen equilibrio entre el trabajo y el ocio son
        fundamentales para el bienestar personal y profesional. La música, por
        su parte, me inspira y me ayuda a mantenerme enfocado en mis proyectos.
        En este momento, estoy especialmente interesado en profundizar mis
        conocimientos en inteligencia artificial. Me fascina cómo esta
        disciplina está revolucionando diversas industrias y cómo puede ser
        utilizada para crear soluciones innovadoras y eficientes. Estoy
        emocionado por explorar las posibilidades que la AI ofrece y cómo puedo
        integrarla en mis proyectos futuros. Además de mis habilidades técnicas,
        valoro la colaboración y el trabajo en equipo. Creo que las mejores
        soluciones surgen del intercambio de ideas y la diversidad de
        perspectivas. Estoy siempre abierto a aprender de los demás y a
        compartir mis conocimientos con quienes me rodean.
      </p>
      <p className={classes.small}>
        Actualmente cuento con experiencia como desarrollador web Backend-end
        con herramientas como Nest Js, GraphQL, Docker, Postgress, TypeORM, Jest
        JS (Unit test) y he participado en algunos proyectos pequeños como
        front-end trabajando con herramientas como Next.js y React.js
        principalmente, ademas cuento con una amplia gama de conocimientos en
        herramientas que me permiten desarrollar proyectos de alta calidad con
        muy buenos niveles de seguridad y calidad
      </p>

      <Row>
        <Col lg={12} xl={6}>
          <h2 className={`${classes.subtitle} mt-3 mb-0`}>Información</h2>
          <Row>
            <Col md={6}>
              <ListGroup className={classes.list}>
                <ListGroup.Item className={classes.item}>
                  <strong>Fecha de nacimiento:</strong>{' '}
                  <p>{birthdate.format('DD, MMMM [de] YYYY')}</p>
                </ListGroup.Item>
                <ListGroup.Item className={classes.item}>
                  <strong>Título:</strong> <p>Bachiller en Ciencias</p>
                </ListGroup.Item>
                <ListGroup.Item className={classes.item}>
                  <strong>Residencia:</strong> <p>Venezuela, San Cristóbal</p>
                </ListGroup.Item>
                <ListGroup.Item className={classes.item}>
                  <strong>Lengua materna:</strong>
                  <p>Español</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <ListGroup className={classes.list}>
                <ListGroup.Item className={classes.item}>
                  <strong>Edad:</strong>{' '}
                  <p>{dayjs().diff(birthdate, 'y')} Años</p>
                </ListGroup.Item>
                <ListGroup.Item
                  role='button'
                  className={classes.item}
                  onClick={handleCopyEmail}>
                  <strong>Correo:</strong> <p>joseyanezcontact@gmail.com</p>
                </ListGroup.Item>
                <ListGroup.Item className={classes.item}>
                  <strong>Cargo:</strong> <p>Desarrollador Back-end</p>
                </ListGroup.Item>
                <ListGroup.Item className={classes.item}>
                  <strong>Nivel de ingles: (En estudio)</strong>
                  {showRatingComponent && (
                    <Rating
                      readOnly
                      value={3}
                      stars={5}
                      cancel={false}
                      className={classes.english}
                    />
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
        <Col lg={12} xl={6}>
          <Row>
            <Col md={5}>
              <h2 className={`${classes.subtitle} mt-4 mb-3`}>Skills</h2>
              <ListGroup
                className={classes.skills}
                style={{ borderRight: '4px solid #d59938', borderRadius: '0' }}>
                {skills.map((skill) => (
                  <ListGroup.Item key={skill.label} className={classes.item}>
                    <strong className={classes.label}> - {skill.label}</strong>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={7} className='ps-5'>
              <h2 className={`${classes.subtitle} mt-4 mb-3`}>Conocimientos</h2>
              <ListGroup className={classes.skills}>
                {knowledges.map((skill) => (
                  <ListGroup.Item key={skill.label} className={classes.item}>
                    <strong className={classes.label}>- {skill.label}</strong>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
