import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem/TituloComImagem';
import TituloSemImagem from './TituloSemImagem/TituloSemImagem';

const Header = ({ titulo, descricao, imagem, className = '' }) => {
  return (
    <header className={styles.header}>
      {titulo && !imagem ? (
        <TituloSemImagem titulo={titulo} descricao={descricao} />
      ) : (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      )}
    </header>
  );
};

export default Header;
