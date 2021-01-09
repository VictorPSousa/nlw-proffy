import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt=""/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                
                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;