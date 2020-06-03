import React from 'react'

import '../../App.css'
import './style.css'

export default props => {
    return (
        <div className="footer">
            <div class="row">
                <div className="col-12">
                    <p className="text footer-text">O Programa Comum-Unidade em Ação é de autoria 
                        e responsabilidade da Prefeitura Municipal de Taubaté, através da Secretaria de 
                        Esportes e Lazer. Detalhes sobre o Programa podem ser 
                        encontrados <a href="" target="_blank">aqui</a>.</p>
                    <p className="text footer-text">Este <i>website</i> foi desenvolvido 
                    por <a href="https://linkedin.com/in/lzuin" target="_blank">Leonardo Zuin</a> e o 
                    código-fonte está disponível <a href="" target="_blank">aqui</a>.</p>
                </div>
            </div>
        </div>
    )
}