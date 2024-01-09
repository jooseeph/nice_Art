import { INavMenuItemProps } from '../../public';
import { useNavMenuItemStyles } from './nav-menu-item.style';
import { NavLink, useLocation } from 'react-router-dom';

const NavMenuItemComponent = ({ name, link }: INavMenuItemProps) => {
  const classes = useNavMenuItemStyles();
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <li className={classes.item}>
      <NavLink className={`${classes.link} ${isActive ? classes.active : ''}`} to={{ pathname: link }}>
        <div className={classes.itemText}>
          <span>{name}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default NavMenuItemComponent;
