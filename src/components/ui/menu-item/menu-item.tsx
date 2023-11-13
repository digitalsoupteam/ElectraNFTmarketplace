import { MenuLink } from './styled';

interface IMenuItem {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
  isDark: boolean;
  isDecorated?: boolean;
}

const MenuItem: React.FC<IMenuItem> = ({
  children,
  to,
  onClick,
  isDark,
  isDecorated,
}) => {
  return (
    <li>
      <MenuLink
        to={to}
        onClick={onClick}
        isDark={isDark}
        isDecorated={isDecorated}
      >
        {children}
      </MenuLink>
    </li>
  );
};

export default MenuItem;
