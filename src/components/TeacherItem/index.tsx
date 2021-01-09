import React from 'react';

import './style.css';
import whatsIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return(
        <article className="teacher-item">
                   <header>
                        <img src="https://avatars1.githubusercontent.com/u/49081662?s=460&v=4" alt="Victor Pedro"/>
                        <div>
                            <strong>Victor Pedro</strong>
                            <span>Programação</span>
                        </div>
                    </header>
                    <p>Amo você minha princesinha S2 </p>
                    <footer>
                        <p>
                            Preço/Hora 
                            <strong>R$ 99,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;