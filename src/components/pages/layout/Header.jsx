'use client';

import { useContext } from 'react';
import { context } from "@/context-API/context";

import Image from 'next/image';
import Link from 'next/link';

import { getAllRoutes } from '@/routes';

import AutoSelect from '@/components/general/AutoSelect';
import HamburgerMenu from '@/components/general/HamburgerMenu';

import NavItem from '@/components/general/NavItem';

import useWindowSize from '@/utils/hooks/general/useWindowSize';
import useRouteActive from '@/utils/hooks/general/useRouteActive';


const { HOME, SHOP, CATEGORIES, COLLECTIONS, CART, WISHLIST, SEARCH } = getAllRoutes();

const brandLogo = {
  white: "/assets/logos/jiaara-white.png",
  black: "/assets/logos/jiaara-black.png"
};


export default function Header() {

  const { screenWidth, breakpoints: { md, lg } } = useWindowSize();


  const { isActive: isHomepage } = useRouteActive({ href: HOME?.pathname });
  
  const { data: { triggered } = {}, data: { states } = {} } = useContext(context) || {};
  
  const isHeroSecVisible = isHomepage && (triggered && states?.isHeroSecVisible);


  const disableNavItem = (currentRoute, routes, breakpoint = md) => {

    if (!currentRoute || !currentRoute.id || !Array.isArray(routes)) return false;
    return !(routes.some(route => route.id === currentRoute.id) && screenWidth >= breakpoint);
  };
  
  const enableNavItem = (currentRoute, routes, breakpoint = md) => {

    if (!currentRoute || !currentRoute.id || !Array.isArray(routes)) return true;
    return !(routes.some(route => route.id === currentRoute.id) && screenWidth < breakpoint);
  };


  const [isOpen, setIsOpen]
    = triggered && Array.isArray(states?.layoutSidebar) ? states?.layoutSidebar : [false, () => {}];

  const toggleSidebar = () => setIsOpen(!isOpen);
  

  return (
    <header
      id="header"
      className={`
        w-full flex items-center fixed px-3 py-1 z-20
        ${isHeroSecVisible ? "bg-transparent" : "bg-secondaryBackground"}
        md:px-5 lg:px-10
      `}
    >

      <Link className="app-brand img-cont-wrapper" href={HOME?.pathname}>
        <div className="img-cont size-[100px] relative">
          <Image
            fill
            src={isHeroSecVisible ? brandLogo?.white : brandLogo?.black}
            alt="brand-logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </Link>

      <div className="wrapper w-full flex relative">
        
        <nav className="navbar w-[inherit] fixed bottom-0 left-0 lg:static">
          <ul className={`
            nav-items-cont
            flex justify-around items-center px-3
            bg-secondaryBackground
            lg:justify-evenly lg:px-0 lg:py-5 lg:uppercase lg:bg-transparent
          `}>
            {[HOME, SEARCH, SHOP].map(route => 
              <NavItem
                key={route?.id}
                title={route?.title}
                href={route?.pathname}
                icon={{
                  active: route?.activeIcon,
                  inactive: route?.inactiveIcon,
                  general: route?.generalIcon
                }}
                linkClass={`
                  flex flex-col items-center justify-center gap-2 px-3 py-3
                  rounded
                  lg:flex-row lg:gap-2
                `}
                iconClass={`
                  nav-item-icon
                  text-base
                  text-primaryFont
                  lg:hidden
                  ${isHeroSecVisible ? "lg:text-white" : "lg:text-primaryFont"}
                `}
                titleClass={`
                  nav-item-title
                  text-xs
                  text-primaryFont
                  ${isHeroSecVisible ? "lg:text-white" : "lg:text-primaryFont"}
                `}
                enabled={disableNavItem(route, [SEARCH], lg)}
              />
            )}

          </ul>
        </nav>

        <nav className="nav-icons-cont grow flex flex-col items-end justify-center py-8 lg:items-baseline">
          <ul className={`
            flex justify-center items-center gap-4 px-3
            text-lg
            ${isHeroSecVisible ? "text-white" : "text-primaryFont"}
          `}>
            {[SEARCH, WISHLIST, CART].map(route =>
              <NavItem
                key={route?.id}
                href={route?.pathname}
                icon={{
                  active: route?.activeIcon,
                  inactive: route?.inactiveIcon,
                  general: route?.generalIcon
                }}
                enabled={enableNavItem(route, [SEARCH], lg)}
              />
            )}
            <HamburgerMenu
              innerClassName={`w-4 h-px my-1 ${isHeroSecVisible ? "bg-white" : "bg-primaryFont"}`}
              isOpen={isOpen}
              onClick={toggleSidebar}
            />
          </ul>

          <hr className={`
            design-line
            w-full absolute top-[93%] right-0
            ${isHeroSecVisible ? "border-white" : "border-primaryFont"}
          `}/>
        </nav>

      </div>
    </header>
  );
}