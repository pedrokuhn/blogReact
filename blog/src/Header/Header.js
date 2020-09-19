import './Header.css'
import React from 'react'
import Avatar from '../Avatar/Avatar'

function Header () {
  return (
    <div className='Header'>
      <Avatar />
      <h1>Pedro Kuhn</h1>
      <p>
        Oi, eu sou o Pedro, um Engenheiro de software que está sempre aprendendo
        mais do que ensinando, Eu sou apaixonado pela àrea de DevOps e também
        por JS. Atualmente atuo como DevOps Engineer na Liferay Cloud.
      </p>
    </div>
  )
}

export default Header
