import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { MoreVertical, SearchIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white flex items-center justify-between p-4 shadow-sm">
      <Link href="/">
        <h1 className="md:text-2xl font-bold">Task Manager</h1>
      </Link>
      <div className="relative">
        <Input placeholder="検索" className="pl-10" />
        <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
      </div>
      <div className="space-x-4 hidden md:block">
        <Button>Sign In</Button>
        <Button>Login</Button>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Sign In</DropdownMenuItem>
            <DropdownMenuItem>Login</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
