import Header from '@/components/Header/Header';
import styles from './Carrinho.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Item from '@/components/Item/Item';
import { resetarCarrinho } from '@/store/reducers/carrinho';

const Carrinho = () => {
  const dispatch = useDispatch();
  // pegando o estado de carrinho e total dos valores dos produtos
  const { carrinho, total } = useSelector((state) => {
    let total = 0;
    // pequando o reducer desse carrinho, para assim modificar o valor dele
    // itens = o primeiro item do array é o próprio array que estamos criando.
    // O segundo parâmetro é cada item que tem dentro do carrinho
    const carrinhoReducer = state.carrinho.reduce((itens, itemNoCarrinho) => {
      // aqui estamos percorrendo o estado de iten e usando o find para encontrar o id do que bate com o item que tem no carrinho (itemNoCarrinho)
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      total += item.preco * itemNoCarrinho.quantidade;
      itens.push({
        ...item, //pequando todas as informações que esta dentro do reducer de itens
        quantidade: itemNoCarrinho.quantidade, //pequando a quantidade que esta dentro de reducer do carrinho
      });
      return itens;
    }, []);
    return {
      carrinho: carrinhoReducer,
      total,
    };
  });
  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalziar compra
        </button>
      </div>
    </div>
  );
};

export default Carrinho;
