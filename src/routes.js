export const HOME = {
  id: 1,
  title: "Home",
  pathName: "/"
}

export const JEWELLERY = {
  id: 2,
  title: "Jewellery",
  pathName: "#"
}

export const ABOUT = {
  id: 3,
  title: "About",
  pathName: "#"
}

export const CONTACT = {
  id: 4,
  title: "Contact",
  pathName: "#"
}

export const SALE = {
  id: 5,
  title: "Sale",
  pathName: "#"
}


export function getAllRoutes() {

  return ([
    HOME,
    JEWELLERY,
    ABOUT,
    SALE
  ]); 
}