// main tools
import Image from 'next/image'
import Link from 'next/link'

// components
import { DivMotion } from '@atoms/animations'

// bootstrap components
import { Whatsapp, Telegram, Download } from 'react-bootstrap-icons'
import { Container, Row, Col, Button } from 'react-bootstrap'

// utils
import { animations, info, rrss, whatsappUrl } from './utils'
import { fadeIn } from '@atoms/animations/utils'

// hooks
import { useApp } from 'hooks/use-app'

// styles
import classes from './styles.module.scss'

// main tools
import { FC } from 'react'

export const ProfileCard: FC = () => {
  const { toast } = useApp()

  /**
   * handle show toast on downloaded file
   */
  const handleDownloadFile = () =>
    toast()?.show({
      summary: 'Éxito!',
      severity: 'success',
      detail: 'Árchivo descargado con éxito'
    })

  return (
    <DivMotion {...fadeIn}>
      <article className={classes.profile}>
        <DivMotion {...animations.iconsAnimation}>
          <div className={classes.avatar}>
            <Image
              width={200}
              height={200}
              alt='profile'
              src='/assets/pics/profile.jpg'
            />
          </div>
          <h2 className={classes.title}>José Yañez</h2>
          <span className={classes.small}>Backend-end developer</span>
        </DivMotion>

        <DivMotion {...animations.textsAnimation}>
          <Container className='mt-4' as='section'>
            <Row className={classes.info}>
              {info.map(({ title, description, Icon }, idx) => (
                <Col key={idx} xs={4}>
                  <Icon key={idx} style={{ height: '40px', width: '40px' }} />
                  <p className={`${classes.title} mt-2`}>{title}</p>
                  <span className={classes.subtitle}>{description}</span>
                </Col>
              ))}
            </Row>

            <nav>
              <ul className={classes.rrss}>
                {rrss.map(({ link, Icon }) => (
                  <li key={link} className={classes.item}>
                    <Link href={link}>
                      <Icon size={32} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Row className={classes.actions}>
              <Col className='mb-3' lg={12}>
                <a download href='/assets/cv/_joseyanezCV.pdf'>
                  <Button
                    className={classes.button}
                    onClick={handleDownloadFile}>
                    <Download className='me-2' size={16} /> Descargar CV
                  </Button>
                </a>
              </Col>
              <Col xs='auto'>
                <Link target='_blank' href={whatsappUrl}>
                  <Button className={classes.button}>
                    <Whatsapp size={24} />
                  </Button>
                </Link>
              </Col>
              <Col xs='auto'>
                <Link target='_blank' href='https://t.me/+584247697245'>
                  <Button className={classes.button}>
                    <Telegram size={24} />
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </DivMotion>
      </article>
    </DivMotion>
  )
}
