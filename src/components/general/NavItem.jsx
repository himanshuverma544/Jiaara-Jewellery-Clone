import Link from 'next/link';

import Icon from "./Icon";

import useLinkActive from "../../utils/hooks/general/useLinkActive";


export default function NavItem({
  title = "",
  href = "#",
  icon = {
    general: <></>,
    active: <></>,
    inactive: <></>
  },
  target = "_self",
  linkClass = "",
  iconClass = "",
  titleClass = ""
}) {

  const { isActive } = useLinkActive({ href });

  return (
    <li className="nav-item list-none">
      <Link
        className={`${linkClass}`}
        href={href}
        target={target}
      >
        {(icon.general || icon.active || icon.inactive) &&
          <Icon
            className={`${iconClass}`}
            icon={isActive ? icon?.active : icon?.inactive ?? icon?.general}
          />
        }
        {title &&
          <div className={`${titleClass}`}>
            {title}
          </div>
        }
      </Link>
    </li>  
  );
}