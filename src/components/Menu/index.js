import React from 'react';
import Logo from '../../assets/img/logo.png';
// import ButtonLink from './components/ButtonLink'
import './Menu.css'
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo"/>
      </a>
      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;