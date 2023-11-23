import { StyledMainNav } from './styled';
import MenuItem from '../menu-item/menu-item';

interface ImenuItems {
  title: React.ReactNode;
  link?: string;
  to?: string;
  isDecorated?: boolean;
  mobileInvisible?: boolean;
}

interface IMainNav {
  className?: string;
  onClick?: () => void;
  menuItems: ImenuItems[];
  isDark?: boolean;
}

const MainNav: React.FC<IMainNav> = ({
  className,
  onClick,
  menuItems,
  isDark,
}) => {
  return (
    <StyledMainNav className={className}>
      {menuItems &&
        menuItems.length &&
        menuItems.map((item, index) => {
          return (
            <MenuItem
              to={item.to}
              link={item.link}
              key={index}
              onClick={onClick}
              isDark={isDark ? isDark : false}
              isDecorated={item.isDecorated}
              $mobileInvisible={item.mobileInvisible}
            >
              {item.title}
            </MenuItem>
          );
        })}
    </StyledMainNav>
  );
};

export default MainNav;
