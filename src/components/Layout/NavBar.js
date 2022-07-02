import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <img src={`${process.env.PUBLIC_URL}/wavelogo.png`} atl='Wave Logo' />
    </div>
  );
};

console.log(`${process.env.PUBLIC_URL}/wavelogo.png`);

export default NavBar;
