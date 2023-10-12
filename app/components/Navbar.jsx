import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {AcmeLogo} from "./Navbar/logo";
import {SearchIcon} from "./Navbar/search";

export default function Nav() {
  return (
    <Navbar maxWidth="2xl" className="bg-gradient-to-b from-blue-900 to-blue-800 w-full fixed top-0 z-50 justify-center" isBordered>
      <NavbarContent justify='center'>
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-black text-inherit text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl">
    Kahani
  </p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-6 justify-center">
          <NavbarItem>
            <Link color="foreground" href="#" color="primary" underline="hover" size='lg'>  
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary" underline="hover" size='lg'>
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='success' href="#" underline="hover" size='lg'>
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10 color-gray-900 dark:color-gray-100",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-800/20",
          }}
          placeholder="Type to search..."
          size="md"
          startContent={<SearchIcon size={30} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Ojas"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat"className="text-black" >
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">dubeyojas16@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
