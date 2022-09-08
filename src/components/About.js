import React from 'react'
import styled from 'styled-components'
import {RiProfileLine} from 'react-icons/ri'
import {BiBrain} from 'react-icons/bi'

export default function About() {
  return (
    <AboutContainer id="home">
        <div className='profile'>
            <h3><RiProfileLine className='icon' />Mi Perfil</h3>
            <p>Soy un joven emprendedor de República Dominicana. 
                Me dedico al desarrollo de páginas web del lado 
                del cliente (fron-end), y también al desarrollo aplicaciones
                de escritorio (sistemas para PYMES). Actualmente estoy cursando
                la carrera de informática y desde los 15 años he estado aprendiendo
                de este mundo tecnologíco.
            </p>
        </div>
        <div className='experience'>
            <h3><BiBrain className='icon'/> Experiencia</h3>
            <ol>
                <li>Desarrollé un sistema de ventas para <a href='https://www.instagram.com/glowishfashion.lv/' rel='noreferrer' target="_blank">Glowish Fashion LV</a>.</li>
                <li>Desarrollé un sistema de prestamos para <a href='https://www.instagram.com/ma.solucioneslv/' rel='noreferrer' target="_blank">MA Soluciones</a>.</li>
                <li>Soy community manager de <a href='https://www.instagram.com/ma.solucioneslv/' rel='noreferrer' target="_blank">MA Soluciones</a>.</li>
                <li>He realizado varios proyectos propios, tanto de web como de escritorio.</li>
            </ol>
        </div>
    </AboutContainer>
  )
}

const AboutContainer = styled.section`
width:100%;
height:290px;
display:flex;
flex-wrap:wrap;
justify-content:space-around;

@media(max-width:1017px){
    height:600px;
}

.icon{
    font-size:28px;
    display:block;
    margin:auto;
    padding:10px;
    color:#333;
}

.profile{
    width:500px;
    height:auto;
    h3{
        padding:10px;
        color:#333;
        text-align:center;
        text-transform:uppercase;
        letter-spacing:10px;
    }
    p{
        text-align:justify;
        line-height:25px;
    }

    @media(max-width:550px){
        width:350px;
        p{
            font-size:14px;
        }
    }
}

.experience{
    width:500px;
    height:auto;

    h3{
        padding:10px;
        color:#333;
        text-align:center;
        text-transform:uppercase;
        letter-spacing:10px;
    }

    a{
        text-decoration:none;
        color:royalblue;
    }

    ol{
        list-style:upper-alpha;
    }

    li{
        text-align:justify;
        line-height:25px;
    }

    @media(max-width:550px){
        width:350px;
        a{
            font-size:14px;
        }
        li{
            font-size:14px;
        }
    }
}
`;