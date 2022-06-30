import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <header>Wave Challenge</header>
      <div className={classes.nav_options}>
        <a>Customers</a>
      </div>
    </div>
  );
};

export default NavBar;
