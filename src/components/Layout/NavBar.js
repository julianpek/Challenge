import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <img src={`${process.env.PUBLIC_URL}/wavelogo.png`} alt='Wave Logo' />
    </div>
  );
};

export default NavBar;
