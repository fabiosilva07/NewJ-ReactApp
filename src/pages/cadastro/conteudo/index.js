import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroConteudo() {
    return (
        <PageDefault>
            <h1>Adicionar Conteúdo</h1>
            <Link as={Link} to='./categorias'>
                Cadastro de Categorias
            </Link>
        </PageDefault>
    );
}

export default CadastroConteudo;