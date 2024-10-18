import styles from './Navbar.module.scss';
// utilizando o proprio svgr do proprio react app para poder importar a logo
// desta maneira estamos importando a imagem diretamente
import logoUrl from '../../assets/logo.svg'; // Importando como URL
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from '../../components/Busca/Busca';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const iconeProps = {
    color: 'white',
    size: 24,
  };
  const navigate = useNavigate()

  return (
    <nav className={styles.nav}>
      <img src={logoUrl} alt="Logo" className={styles.logo} />{' '}
      {/* Usando img */}
      <div className={styles.links}>
        <div>
          <span
            onClick={() => navigate('/')}
            // sendo o primeiro parametro a classe que não é condicional
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
            })}
          >
            Página inicial
          </span>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <a href="carrinho">
          {window.location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
