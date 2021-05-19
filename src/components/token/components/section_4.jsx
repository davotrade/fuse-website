import React from 'react'
import FuseTokenImage from '@/assets/img/fuse-token-image.png'
import OneInch from '@/assets/img/purchase_1inch.png'
import Loopring from '@/assets/img/purchase_loopring.png'
import Uniswap from '@/assets/img/purchase_uniswap.png'
import FuseTokenOne from '@/assets/img/fuse_token_1.png'
import FuseTokenTwo from '@/assets/img/fuse_token_2.png'
import Bubble from '@/assets/img/bubble.png'

const items = [
  {
    icon: Uniswap,
    name: 'Uniswap'
  },
  {
    icon: Uniswap,
    name: 'Kyber network'
  },
  {
    icon: OneInch,
    name: '1Inch exchange'
  },
  {
    icon: Loopring,
    name: 'Loopring'
  }
]

const Item = ({ icon, name }) => {
  return (
    <div className='item'>
      <img src={icon} />
      <h3>{name}</h3>
    </div>
  )
}

const SectionFour = () => {
  return (
    <section className='purchase_fuse_token__wrapper'>
      <div className='bubble'>
        <img src={Bubble} />
      </div>
      <div className='token1'>
        <img src={FuseTokenOne} />
      </div>
      <div className='token2'>
        <img src={FuseTokenTwo} />
      </div>
      <div className='purchase_fuse_token__container'>
        <div className='purchase_fuse_token'>
          <h1 className='title'>Purchase fuse token</h1>

          <div className='items'>
            {
              items.map((item, index) => <Item key={index} {...item} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
