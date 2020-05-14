import React from "react";
import MainNavBar from "./MainNavBar";
import SubNavBar from "./SubNavBar";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const pages = [
    { name: "Home", url: "", list: false },
    {
      name: "Services",
      url: "services",
      list: [
        { name: "Individuals", url: "individuals" },
        { name: "Organizations", url: "organizations" },
        { name: "Academic", url: "academic" },
        { name: "Translation", url: "translation" },
      ],
    },
    { name: "About Us", url: "about", list: false },
    { name: "Blog", url: "blog", list: false },
    { name: "Contact Us", url: "contact", list: false },
    { name: "Shop", url: "shop", list: false },
  ];

  const mainNavbarHeight = 88;

  const currentPageName = location.pathname.split("/")[1];
  const currentPageObject = pages.find((page) => page.url === currentPageName);
  return (
    <>
      <MainNavBar
        mainNavbarHeight={mainNavbarHeight}
        currentPagePath={
          location.pathname.includes("/blogs") ? "/POSTS" : location.pathname
        }
        pages={pages}
      />
      {currentPageObject && currentPageObject.list ? (
        <SubNavBar
          mainNavbarHeight={mainNavbarHeight}
          currentPagePath={location.pathname}
          pageObject={currentPageObject}
        />
      ) : null}
    </>
  );
}
