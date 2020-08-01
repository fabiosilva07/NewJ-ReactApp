import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hocks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategorias() {
  const history = useHistory();
  
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  }
  
  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect( () => {
    console.log('teste');
    const URL = 'http://localhost:4000/categorias';

    fetch(URL)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          
          categoriasRepository.create({
            titulo: values.titulo,
            descricao: values.descricao,
            cor: values.cor,
          })
            .then(() => {
              console.log('Cadastrou com sucesso!');
              history.push('/');
            });

          clearForm();
      }}>

        <FormField
          label="Titulo da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategorias;