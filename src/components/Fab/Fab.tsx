import "./Fab.scss";
import imgCode from '../../assets/icons/code.svg';

const Fab = () => {
  return (
    <a id="fab" href="https://github.com/J-P-Dorman/company_website" target="_blank">
      <img src={imgCode} />
      <span>See code...</span>
    </a>
  );
};

export default Fab;
