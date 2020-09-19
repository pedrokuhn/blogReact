import './Social.css'
import React from 'react'
import {
  Facebook,
  Twitter,
  GitHub,
  Telegram,
  Email,
  Instagram,
  LinkedIn
} from '@material-ui/icons'

function Social () {
  return (
    <div className='Social'>
      <a
        href='https://github.com/pedrokuhn'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHub className='icon' />
      </a>
      <a
        href='https://twitter.com/PedroKuhn_'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Twitter className='icon' />
      </a>
      <a
        href='https://www.facebook.com/OficialPedroKuhn'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Facebook className='icon' />
      </a>
      <a
        href='https://telegram.me/PedroKuhn'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Telegram className='icon' />
      </a>
      <a
        href='mailto:phmastelaro@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Email className='icon' />
      </a>
      <a
        href='https://www.instagram.com/kuhn_pedro/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Instagram className='icon' />
      </a>
      <a
        href='https://www.linkedin.com/in/kuhnpedro/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedIn className='icon' />
      </a>
    </div>
  )
}

export default Social
