/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CaretSortIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import BrandLogo from "../assets/brandlogo";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import NavActions from "../molecule/nav-actions";
import ShimmerButton from "../magicui/shimmer-button";
import WhatsAppIcon from "../assets/whatsapp";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    open && setOpen(false);
  }, [pathname]);

  return (
    <nav id="topPoint" className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white/70 border-b border-gray-200 ">
        <div className="container py-3 flex items-center justify-between">
          <Link href="/">
            <BrandLogo />
          </Link>
          <div className="hidden lg:flex items-center justify-end small-gap">
            <NavigationMenu>
              <NavigationMenuList>
                {Links.map((item: any) => {
                  return (
                    <div key={item.id}>
                      {item.children ? (
                        <NavigationMenuItem>
                          <NavigationMenuTrigger
                            className={`${
                              pathname.includes(item.link)
                                ? "text-secondary font-semibold"
                                : "text-primary"
                            }`}
                          >
                            {item.text}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="grid grid-cols-2 items-start justify-start small-gap p-[25px] min-w-[500px]">
                            {item.children.map((child: any) => {
                              return (
                                <a
                                  key={child.id}
                                  href={child.link}
                                  className={`text-primary hover:text-secondary [&>*]:text-xs ${
                                    pathname === child.link
                                      ? "text-secondary font-semibold"
                                      : "text-primary"
                                  }`}
                                >
                                  {child.text}
                                </a>
                              );
                            })}
                            {item.text === "Services" && (
                              <div className="col-span-2 mt-4 pt-4 border-t border-gray-200">
                                <Link href="/get-a-quote">
                                  <ShimmerButton className="w-full">
                                    Get a Quote
                                  </ShimmerButton>
                                </Link>
                              </div>
                            )}
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      ) : (
                        <NavigationMenuItem>
                          <Link
                            href={item.link}
                            className={`${navigationMenuTriggerStyle()} ${
                              pathname === "/"
                                ? "text-secondary font-semibold"
                                : pathname.includes(item.link)
                                ? "text-secondary font-semibold"
                                : "text-primary"
                            }`}
                          >
                            <span
                              className={`hover:text-secondary ${
                                pathname === item.link
                                  ? "text-secondary font-semibold"
                                  : "text-primary"
                              }`}
                            >
                              {item.text}
                            </span>
                          </Link>
                        </NavigationMenuItem>
                      )}
                    </div>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <NavActions />
            <Link
              href="https://wa.me/+923157001864"
              target="_blank"
              className="ml-4 group border border-secondary bg-secondary hover:bg-indigo-700 h-[40px] w-[40px] rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              <WhatsAppIcon className="w-[24px] h-[24px] stroke-white stroke-[1.6px]" />
            </Link>
          </div>

          <div className="block lg:hidden">
            <div>
              <Menu role="button" onClick={() => setOpen(true)} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "fixed top-0 right-0 bg-black/60  w-[100vw] overflow-hidden transition-opacity ease-in-out duration-500",
          {
            "opacity-100 z-50  delay-0": open,
            "opacity-0 -z-50  delay-150": !open,
          }
        )}
        role="button"
        onClick={() => setOpen(false)}
      >
        <div
          className={clsx(
            "bg-white px-[16px] py-[32px] h-[100dvh] shadow-2xl ml-auto max-w-[300px] min-w-[280px] transition ease-in-out duration-300",
            {
              "block delay-150": open,
              "hidden delay-150": !open,
            }
          )}
        >
          <div className="flex items-center justify-between gap-[10px] pb-[50px]">
            <BrandLogo />
            <X
              className="stroke-[1.3px] stroke-gray-500"
              role="button"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="max-h-[80vh] overflow-auto">
            <ul className="flex flex-col items-start justify-start small-gap">
              {Links.map((linkItem: any) => {
                return (
                  <li key={linkItem.id}>
                    {linkItem.children ? (
                      <Collapsible
                        onClick={(event: any) => event.stopPropagation()}
                      >
                        <CollapsibleTrigger
                          className={`flex items-center justify-start small-gap ${
                            pathname.includes(linkItem.link)
                              ? "text-secondary font-semibold"
                              : "text-primary"
                          }`}
                        >
                          {linkItem.text}
                          <CaretSortIcon className="h-4 w-4" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="flex flex-col items-start justify-start small-gap py-[25px] px-3 border-l">
                            {linkItem.children.map((child: any) => {
                              return (
                                <Link
                                  key={child.id}
                                  href={child.link}
                                  className={
                                    pathname === child.link
                                      ? "text-secondary font-semibold"
                                      : "text-primary"
                                  }
                                >
                                  {child.text}
                                </Link>
                              );
                            })}
                            {linkItem.text === "Services" && (
                              <div className="mt-4 pt-4 border-t border-gray-200 w-full">
                                <Link href="/get-a-quote">
                                  <ShimmerButton className="w-full">
                                    Get a Quote
                                  </ShimmerButton>
                                </Link>
                              </div>
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        href={linkItem.link}
                        className={
                          pathname === linkItem.link
                            ? "text-secondary font-semibold"
                            : "text-primary"
                        }
                      >
                        {linkItem.text}
                      </Link>
                    )}
                  </li>
                );
              })}
              <Link
                href="/dashboard"
                className={
                  pathname.includes("/dashboard")
                    ? "text-secondary font-semibold"
                    : "text-primary"
                }
              >
                Dashboard
              </Link>
            </ul>
            
            {/* Mobile Nav Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <NavActions />
                <Link
                  href="https://wa.me/+923157001864"
                  target="_blank"
                  className="group border border-secondary bg-secondary hover:bg-indigo-700 h-[40px] w-full rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <WhatsAppIcon className="w-[20px] h-[20px] stroke-white stroke-[1.6px] mr-2" />
                  <span className="text-white font-medium">WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Solutions",
    link: "/solutions",
    children: [
      {
        id: 1,
        text: "Learning Management System",
        link: "/solutions/lms",
      },
      {
        id: 2,
        text: "International Calling Dialer",
        link: "/solutions/dialer",
      },
    ],
  },
  {
    id: 3,
    text: "Services",
    link: "/services",
    children: [
      {
        id: 1,
        text: "Web Development",
        link: "/services",
      },
      {
        id: 2,
        text: "UI/UX Design",
        link: "/services",
      },
      {
        id: 3,
        text: "Digital Marketing",
        link: "/services",
      },
      {
        id: 4,
        text: "SEO Services",
        link: "/services",
      },
    ],
  },
  {
    id: 4,
    text: "Pricing",
    link: "/pricing",
  },
  {
    id: 5,
    text: "About us",
    link: "/about-us",
  },
  {
    id: 6,
    text: "Contact us",
    link: "/contact-us",
  },
];
