import Header from '@/components/Header/Header';
import styles from './Carrinho.module.scss';
import { useSelector } from 'react-redux';
import Item from '@/components/Item/Item';

const Carrinho = () => {
  // pegando o estado de carrinho
  const carrinho = useSelector((state) => {
    // pequando o reducer desse carrinho, para assim modificar o valor dele
    // itens = o primeiro item do array é o próprio array que estamos criando.
    // O segundo parâmetro é cada item que tem dentro do carrinho
    const carrinhoReducer = state.carrinho.reduce((itens, itemNoCarrinho) => {
      // aqui estamos percorrendo o estado de iten e usando o find para encontrar o id do que bate com o item que tem no carrinho (itemNoCarrinho)
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);

      itens.push({
        ...item, //pequando todas as informações que esta dentro do reducer de itens
        qauntidade: itemNoCarrinho.quantidade, //pequando a quantidade que esta dentro de reducer do carrinho
      });
      return itens;
    }, []);
    return carrinhoReducer;
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
            Subtotal: <strong>R$ {}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
