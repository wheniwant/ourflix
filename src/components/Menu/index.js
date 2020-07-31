import React from 'react';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';
import LogoOur from '../../assets/img/LogoOur.png';
import './Menu.css'
function Menu(){

    return (
        <nav className="Menu">
            <a href='/'>
                <img className='Logo' src={LogoOur} alt='Logo OurFlix'/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
            
        </nav>

    )
}
export default Menu;