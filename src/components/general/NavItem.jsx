import Link from 'next/link';

import Badge from '@/components/general/Badge';
import Icon from "@/components/general/Icon";

import useRouteActive from "@/utils/hooks/general/useRouteActive";


export default function NavItem({
  title = {
    className: "",
    name: ""
  },
  href = {
    className: "",
    pathname: "#"
  },
  icon = {
    className: "",
    status: {
      general: <></>,
      active: <></>,
      inactive: <></>
    },
    badge: {
      isBadgeEnabled: false
    }
  },
  target = "_self",
  enabled = true
}) {

  const { isActive } = useRouteActive({ href: href?.pathname });
  
  const isIconEnabled = icon?.status?.general || icon?.status?.active || icon?.status?.inactive;
  const requiredIcon = isActive ? icon?.status?.active : icon?.status?.inactive ?? icon?.status?.general;


  return (
    (enabled &&
      <li className="nav-item list-none">
        <Link
          className={`${href?.className ? href?.className : ""} link`}
          href={href?.pathname ? href?.pathname : "#"}
          target={target}
          scroll={false}
        >
          {isIconEnabled && !(icon?.badge?.isBadgeEnabled) ?
            <Icon className={icon?.className} icon={requiredIcon}/>
            :
            <Badge
              icon={{
                icon: requiredIcon
              }}
              {...icon.badge}
            />
          }
          {title?.name &&
            <div className={`${title?.className}`}>
              {title?.name}
            </div>
          }
        </Link>
      </li>
    )
  );
}