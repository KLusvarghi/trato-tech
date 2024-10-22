import Header from '@/components/Header/Header';
import Item from '@/components/Item/Item';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Categoria.module.scss'

const Categoria = () => {
  // pegando esse "nomeCategoria" que é a rota que passamos em 'routes'
  const { nomeCategoria } = useParams();
  // console.log(nomeCategoria)

  //Neste caso, sera a mesma coisa, mas otimizamos código:
    // const estadoTotal = useSelector(state => state);
    // const apenasCategorias = useSelector(state => state.categorias);
    // const apenasItens = useSelector(state => state.itens);

  // dessa maneira, como retornamos um objeto que tem duas propriedade 'categoria' e 'itens', precisamos destruturar ao inves de 'const categoria = ...'
  const { categoria, itens } = useSelector(state => ({
    categoria: state.categorias.find(
      (categoria) => categoria.id === nomeCategoria, //  precisamos pegar a categoria onde categoria.id seja igual ao ID daquela rota
      // a categoria que for igual a categoria clicada pelo usuário (que no caso é o id) ele nos retornará
    ),
    // itens: state.itens //retornará todos os itens
    itens: state.itens.filter((item) => item.categoria === nomeCategoria), //retornará apenas os itens da categoria clicada (nomeCategoria)
  }));

  // console.log(itens);

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map(item => (
          // passando todas as propriedades de item com o spred operator "...item"
          <Item key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default Categoria;
