import Link from 'next/link';

import Icon from "./Icon";

import useRouteActive from "../../utils/hooks/general/useRouteActive";


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
  titleClass = "",
  enabled = true
}) {

  const { isActive } = useRouteActive({ href });

  return (
    (enabled &&
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
    )
  );
}