import { Button } from "@/components/ui/button";
import { sideBarItems } from "@/constants";
import { SquareArrowDown } from "lucide-react";

export default function SideBar() {
  return (
    <nav className="sticky top-20 h-full md:w-64 p-6">
      <ul className="space-y-2">
        {sideBarItems.map((item) => (
          <li key={item.id}>
            <Button className="w-full gap-2">
              <SquareArrowDown />
              <span className="hidden md:inline">{item.title}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
