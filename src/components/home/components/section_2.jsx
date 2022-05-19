import React from 'react'
import Mobile from '@/assets/img/mobile_money.png'
import MobileSmall from '@/assets/img/mobile_money_small.svg'
import Business from '@/assets/img/business_tools.png'
import BusinessSmall from '@/assets/img/business_tools_small.svg'
import PaymentsNetwork from '@/assets/img/paymets_network.png'
import PaymentsNetworkSmall from '@/assets/img/payments_network_small.svg'
import { FormattedMessage } from 'react-intl'

const items = [
  {
    icon: MobileSmall,
    image: Mobile,
    title: <FormattedMessage defaultMessage='Mobile money' />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='Métodos de pago ABT ( tickets basados en Cuenta) permiten utilizar tu cédula,tarjeta pregpagada , <span>aplicación mobil</span> al abordar una unidad de transporte y pagar facilmente
        '
          values={{
            span: (chunks) => <span>{chunks}</span>
          }}
        />
      </div>
    )
  },
  {
    icon: BusinessSmall,
    image: Business,
    title: <FormattedMessage defaultMessage="Control y transparencia " />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='Un <span>sistema transpartente</span> permite conocer la recaudación en todo momento y reduce significativamente
          la evasión tanto por actores externos como internos.'
          values={{
            span: (chunks) => <span>{chunks}</span>
          }}
        />
      </div>
    )
  },
  {
    icon: PaymentsNetworkSmall,
    image: PaymentsNetwork,
    title: <FormattedMessage defaultMessage='Decentralizado' />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='Una <span>blockchain consorciada</span> crea un entorno de pago único enre usuarios, puntos de venta y unidades de transporte, es fácil de operar
        disminuyendo hasta en un 60% los costos en comparación con soluciones propietarias'
          values={{
            span: (chunks) => <span>{chunks}</span>
          }}
        />
      </div>
    )
  }
]

const Item = ({ title, image, Text, icon }) => {
  return (
    <div className='item'>
      <img className='item__image' src={image} />
      <div className='item__title grid-x align-middle'>
        <img src={icon} />
        <h4>{title}</h4>
      </div>
      <Text />
    </div>
  )
}

const SectionTwo = () => {
  return (
    <>
      <section className='section_2'>
        <h2 className='section_2__title'>
          <FormattedMessage defaultMessage='Turning communities into economies' />
        </h2>
        <div className='section_2__items'>
          {
            items.map((item, index) => (
              <Item key={index} {...item} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default SectionTwo
