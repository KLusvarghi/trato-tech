import styles from './Footer.module.scss';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  // para evitar que recarregue várias vezes a mesma coisa, ciramos uma constante que será recarregada uma unica vez e será aplicada para todos os icones
  const iconeProps = {
    color: 'white',
    size: 24,
  };

  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconeProps} />
        <FaTwitter {...iconeProps} />
        <FaInstagram {...iconeProps} />
      </div>
      <span>Desenvolvido por Kauã Lusvarghi</span>
    </footer>
  );
};

export default Footer;
