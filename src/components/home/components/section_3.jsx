import React from 'react'
import StudioIcon from '@/assets/img/studio-icon.svg'
import StudioImage from '@/assets/img/studio_img.png'
import FuseSwapImage from '@/assets/img/fuseswap_image.png'
import WalletIcon from '@/assets/img/fuse_wallet_icon.png'
import voltageIcon from '@/assets/img/voltage_icon.png'
import Gif from '@/assets/images/send-money.png'
import { FormattedMessage } from 'react-intl'

const Button = ({ text = <FormattedMessage defaultMessage='Launch Now' />, link }) => {
  return (
    <a
      rel='noreferrer noopener' target='_blank'
      href={link}
      className='main_button'
    >
      {text}
    </a>
  )
}

const StudioFloor = () => {
  return (
    <section className='studio_floor'>
      <div className='studio_floor__container grid-x align-justify align-self-middle'>
        <div className='cell small-24 medium-12'>
          <div>
            <div className='studio_floor__sub-title grid-x align-middle'>
              <img src={StudioIcon} />
              &nbsp;
              <span>
                <FormattedMessage defaultMessage='SmartBUS panel' />
              </span>
            </div>
            <h1 className='studio_floor__title'>
              <FormattedMessage
                defaultMessage='Control {newLine} de todas las operaciones de cobro'
                values={{
                  newLine: <br />
                }}
              />
            </h1>
            <p className='studio_floor__text'>
              <FormattedMessage
                defaultMessage='Una aplicación web que permite controlar en tiempo real la recaudacion 
                de cada unidad , por cooperativa y en modalidad caja común.'

              />
            </p>

            <ul className='props'>
              <li>
                <FormattedMessage defaultMessage='Inscribe unidades en cuestion de minutos.' />
              </li>
              <li>
                <FormattedMessage defaultMessage='Revisa operaciones de recaudacion y venta.' />
              </li>
              <li>
                <FormattedMessage defaultMessage='Se integra mediante APIs a sistemas de ayuda a la explotacion SAE.' />
              </li>
            </ul>
            <div className='launch'>
              <Button link='http://studio.fuse.io/' />
            </div>
          </div>
        </div>
        <div className='studio_floor__image cell small-24 medium-12'>
          <img src={StudioImage} />
        </div>
      </div>
    </section>
  )
}

const FuseWalletFloor = () => {
  return (
    <section className='wallet_floor'>
      <div className='wallet_floor__container grid-x align-justify align-self-middle'>
        <div className='wallet_floor__image cell small-24 medium-12'>
          <img src={Gif} alt='iphone' />
        </div>
        <div className='wallet_floor__info cell small-24 medium-12'>
          <div className='wallet_floor__sub-title grid-x align-middle'>
            <img src={WalletIcon} />
            &nbsp;
            <span>
              <FormattedMessage defaultMessage='Fuse wallet' />
            </span>
          </div>
          <h1 className='wallet_floor__title'>
            <FormattedMessage
              defaultMessage='Cambiamos el paradigma del pago mobil, con una solución innovadora 
              y accesible '
              values={{
                newLine: <br />
              }}
            />
          </h1>
          <p className='wallet_floor__text'>
            <FormattedMessage
              defaultMessage='Registra a tus usuarios de una manera rapida y personalizada, cada usuario puede optar
              por una wallet, tarjeta reutilizable o incluso su cédula de identidad ( ultima versión).'

            />
          </p>
          <ul className='props'>
            <li>
              <FormattedMessage defaultMessage='Recarga saldo usando Payphone o Tu Tarjeta de Débito/Crédito.' />
            </li>
            <li>
              <FormattedMessage defaultMessage='Puedes pasar saldo entre usuarios.' />
            </li>
            <li>
              <FormattedMessage defaultMessage='Recarga también en puntos de venta físicos.' />
            </li>
          </ul>
          <div className='wallet_floor__links'>
            <div className='items'>
              <a
                rel='noreferrer noopener'
                target='_blank'
                href='https://apps.apple.com/il/app/fuse-wallet/id1491783654'
              >
                <img alt='twitter' src='./images/apple.png' />
              </a>

              <a
                rel='noreferrer noopener'
                target='_blank'
                href='https://play.google.com/store/apps/details?id=io.fuse.fusecash'
              >
                <img alt='android' src='./images/playstore.png' />
              </a>

            {/*   <a
                rel='noreferrer noopener'
                target='_blank'
                href='https://github.com/fuseio/fuse-wallet2.0'
              >
                <img alt='twitter' src='./images/github_large.png' />
              </a> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

const FuseSwapFloor = () => {
  return (
    <section className='fuseswap_floor'>
      <div className='fuseswap_floor__container'>
        <div className='fuseswap_floor__container__inner margin-0 grid-x align-justify align-self-middle'>
          <div className='cell small-24 medium-12'>
            <div className='grid-y texts'>
              <div className='fuseswap_floor__sub-title grid-x align-middle'>
                <div className='logo grid-x align-center'>
                  <img className='light' src={voltageIcon} />
                </div>
              </div>
              <h1 className='fuseswap_floor__title'>
                <FormattedMessage
                  defaultMessage='Se integra con la banca  {newLine} sin fricciones'
                  values={{
                    newLine: <br />
                  }}
                />
              </h1>
              <p className='fuseswap_floor__text'>
                <FormattedMessage
                  defaultMessage='The DeFi Hub for the Fuse ecosystem'

                />
              </p>
              <ul className='props'>
                <li>
                  <FormattedMessage defaultMessage='Swap and gain exposure to assets.' />
                </li>
                <li>
                  <FormattedMessage defaultMessage='Back your token with pooled liquidity.' />
                </li>
                <li>
                  <FormattedMessage defaultMessage='Access in depth trading and token analytics.' />
                </li>
              </ul>
              <div className='launch'>
                <Button
                  link='https://voltage.finance/'
                  text={<FormattedMessage defaultMessage='Swap & pool now' />}
                />
              </div>
            </div>
          </div>
          <div className='fuseswap_floor__image cell small-24 medium-12'>
            <img src={FuseSwapImage} />
          </div>
        </div>
      </div>
    </section>
  )
}

const SectionThree = () => {
  return (
    <>
      <div className='blue'>
        <StudioFloor />
      </div>
      <FuseWalletFloor />
      <FuseSwapFloor />
    </>
  )
}

export default SectionThree
