import Header from '../../components/Header/Header';
import styles from './Home.module.scss';
// desta outra maneira estamos importando o caminho da imagem
import relogio from '../../assets/inicial.png';
// desta maneira estamos importando a imagem diretamente
// import {ReactComponent as Relogio} from '../../assets/inicial.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  
  // para ter acesso as categorias que está no nosso store, precisamos:
  // o 'useSelector' espera uma arrow function, e a arrow function espera um state (estado)
  // e por fim temos que dizer exatamente o que esse state é, no nosso caso só temos store de categorias
  const categorias = useSelector((state) => state.categorias);

  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={relogio}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>Categorias</h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
