import Navbar from '../../components/Navbar/Navbar';
import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const PaginaPadrao = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Utilizando a sub classe dentro de container */}
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PaginaPadrao;
