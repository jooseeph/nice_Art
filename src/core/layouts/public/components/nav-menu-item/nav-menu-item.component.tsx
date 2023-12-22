import { INavMenuItemProps } from '../../public';
import { useNavMenuItemStyles } from './nav-menu-item.style';
import { NavLink } from 'react-router-dom';

const NavMenuItemComponent = ({ name, link }: INavMenuItemProps) => {
  const classes = useNavMenuItemStyles();
  return (
    <li className={classes.item}>
      <NavLink className={`${classes.link}`} to={{ pathname: link }}>
        <div className={classes.itemText}>
          <span>{name}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default NavMenuItemComponent;
