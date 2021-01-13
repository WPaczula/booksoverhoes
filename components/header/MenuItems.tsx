import React from "react";
import MenuItem from "./MenuItem";

interface Props {
    onNavigation?: () => void;
}

const MenuItems = ({ onNavigation }: Props) => (
  <>
    <MenuItem onNavigation={onNavigation} href="/">Books</MenuItem>
    <MenuItem onNavigation={onNavigation} href="/publishers">Publishers</MenuItem>
  </>
);

export default MenuItems;