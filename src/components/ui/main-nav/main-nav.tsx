import { StyledMainNav } from './styled';
import MenuItem from '../menu-item/menu-item';

interface ImenuItems {
  title: React.ReactNode;
  to: string;
  isDecorated?: boolean;
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
              key={index}
              onClick={onClick}
              isDark={isDark ? isDark : false}
              isDecorated={item.isDecorated}
            >
              {item.title}
            </MenuItem>
          );
        })}
    </StyledMainNav>
  );
};

export default MainNav;
