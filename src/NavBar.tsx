import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
// import classNames from "classnames";
import "./navbar.css";

const NavBar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        {/* Home */}
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link to="/" className="NavigationMenuLink">
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* Help dropdown */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Get Started For Free <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List">
              <ListItem title="Instructions" to="/instructions">
                Learn how to install and use WebGA.
              </ListItem>
              <ListItem title="Documentation" to="/documentation">
                Technical details and config setup.
              </ListItem>
              <ListItem title="Checklist" to="/checklist">
                Quick setup checklist for WebGA.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* External link */}
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <a
              className="NavigationMenuLink"
              href="https://store.zoal.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Early Access
            </a>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

type ListItemProps = {
  title: string;
  to: string;
  children: React.ReactNode;
};

const ListItem = ({ title, to, children }: ListItemProps) => (
  <li>
    <NavigationMenu.Link asChild>
      <Link to={to} className="ListItemLink">
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </Link>
    </NavigationMenu.Link>
  </li>
);

export default NavBar;
