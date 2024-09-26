import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-sm">
      <Link href="/">
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </Link>
      <div className="relative">
        <Input placeholder="検索" className="pl-10" />
        <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
      </div>
      <div className="space-x-4">
        <Button>Sign In</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
}
