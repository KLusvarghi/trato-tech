import styles from './Item.module.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
// importando a action de itens
import { mudarFavorito } from '@/store/reducers/itens';

const iconeProps = {
  size: 24,
  color: '#041833',
};

const Item = (props) => {
  const { titulo, foto, preco, descricao, favorito, id } = props;

  // instanciando o dispath a uma variável
  const dispatch = useDispatch();

  function resolverFavorito() {
    // dispachando uma ação
    // apenas assim uma action é executada (disparada)
    dispatch(mudarFavorito(id));
  }

  return (
    <div className={styles.item}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>R$ {preco.toFixed(2)}</div>
          <div className={styles['item-acoes']}>
            {favorito ? (
              <AiFillHeart
                onClick={resolverFavorito}
                {...iconeProps}
                color="#ff0000"
                className={styles['item-acao']}
              />
            ) : (
              <AiOutlineHeart
                {...iconeProps}
                className={styles['item-acao']}
                onClick={resolverFavorito}
              />
            )}
            <FaCartPlus
              {...iconeProps}
              color={true ? '#1875E8' : iconeProps.color}
              className={styles['item-acao']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
