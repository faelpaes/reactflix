import React from 'react';
import Logo from '../../assets/img/logo.png';
// import ButtonLink from './components/ButtonLink'
import './Menu.css'
import Button from '../Button';
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo"/>
      </Link>
      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;