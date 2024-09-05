'use client';

import React from 'react';

import Image from 'next/image';

import { getAllRoutes } from '@/routes';

import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import Icon from "../../general/Icon";
import NavItem from '@/components/general/NavItem';



const routes = getAllRoutes();

const headerBtnsIcon = [
  CiSearch,
  IoMdHeartEmpty,
  IoCartOutline,
  AiOutlineUser
];

export default function Header() {

  return (
    <header id="header" className="w-full flex items-center fixed px-3 py-1 z-10 bg-transparent md:px-5 lg:px-10">

      <div className="app-brand img-cont-wrapper">
        <div className="img-cont size-[100px] relative">
          <Image
            src="/assets/logos/jiaara-white.png"
            alt="brand-logo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="wrapper w-full flex relative">
        
        <nav className="navbar w-[inherit] fixed bottom-0 left-0 lg:static">
          <ul className="nav-items-cont flex justify-around items-center px-3 bg-primaryBackground lg:justify-evenly lg:px-0 lg:py-5 lg:uppercase lg:bg-transparent lg:text-white">
            {routes.map(route => 
              <NavItem
                key={route?.id}
                title={route?.title}
                href={route?.pathname}
                icon={{
                  active: route?.activeIcon,
                  inactive: route?.inactiveIcon
                }}
                linkClass="flex flex-col items-center justify-center gap-2 px-3 py-3 rounded text-primaryFont lg:flex-row lg:gap-2 lg:text-white"
                iconClass="nav-item-icon text-base lg:hidden"
                titleClass="nav-item-title text-xs"
              />
            )}
          </ul>
        </nav>

        <div className="nav-icons-cont grow flex flex-col items-end justify-center py-8 lg:items-baseline">
          <div className="flex gap-4 px-3 text-lg text-white">
            {headerBtnsIcon.map((icon, index) => (
              <button key={index}>
                <Icon icon={icon}/>
              </button>
            ))}
          </div>
        </div>

        <hr className="w-full absolute top-[93%] right-0"/>

      </div>
     
    </header>
  );
}