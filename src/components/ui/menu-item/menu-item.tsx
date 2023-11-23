import { MenuLink } from './styled';

interface IMenuItem {
  children: React.ReactNode;
  to?: string;
  link?: string;
  onClick?: () => void;
  isDark: boolean;
  isDecorated?: boolean;
  $mobileInvisible?: boolean;
}

const MenuItem: React.FC<IMenuItem> = ({
  children,
  to,
  link,
  onClick,
  isDark,
  isDecorated,
  $mobileInvisible,
}) => {
  return (
    <li>
      <MenuLink
        to={to}
        link={link}
        onClick={onClick}
        isDark={isDark}
        isDecorated={isDecorated}
        $mobileInvisible={$mobileInvisible}
      >
        {children}
      </MenuLink>
    </li>
  );
};

export default MenuItem;
