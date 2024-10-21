import styles from './Navbar.module.scss';
// utilizando o proprio svgr do proprio react app para poder importar a logo
// desta maneira estamos importando a imagem diretamente
import logoUrl from '../../assets/logo.svg'; // Importando como URL
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from '../../components/Busca/Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const iconeProps = {
    color: 'white',
    size: 24,
  };

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <img
        src={logoUrl}
        alt="Logo"
        className={styles.logo}
        onClick={() => navigate('/')}
      />{' '}
      {/* Usando img */}
      <div className={styles.links}>
        <div>
          <Link
            to="/"
            // sendo o primeiro parametro a classe que não é condicional
            className={classNames(styles.link, {
              // ao invés de usar o 'window' importamos o location do react-router-dom
              // [styles.selected]: window.location.pathname === '/',
              [styles.selected]: location.pathname === '/',
            })}
          >
            Página inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link href="carrinho" to="/carrinho">
          {location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
