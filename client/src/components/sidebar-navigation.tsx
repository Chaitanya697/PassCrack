import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  WalletCards, 
  DollarSign, 
  PieChart, 
  Settings, 
  Menu, 
  User 
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: DollarSign,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: PieChart,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function SidebarNavigation() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const MobileNav = () => (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 pt-10">
        <div className="flex flex-col h-full">
          <div className="px-3 py-2">
            <h1 className="text-xl font-semibold text-primary flex items-center gap-2">
              <WalletCards className="h-6 w-6" />
              <span>Budget Tracker</span>
            </h1>
          </div>
          <Separator className="my-2" />
          <nav className="flex-1">
            <ul className="space-y-1 p-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <div
                      className={cn(
                        "flex items-center py-2 px-3 text-base font-medium rounded-lg cursor-pointer",
                        location === item.href
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Separator className="my-2" />
          <div className="p-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <User className="h-4 w-4" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">User</p>
                <p className="text-xs text-gray-500">user@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <>
      <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between md:hidden">
        <h1 className="text-xl font-semibold text-primary flex items-center gap-2">
          <WalletCards className="h-6 w-6" />
          <span>Budget Tracker</span>
        </h1>
        <MobileNav />
      </header>
      
      <aside className="hidden md:flex md:w-64 flex-col bg-white border-r border-gray-200 shadow-sm h-screen">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-primary flex items-center gap-2">
            <WalletCards className="h-6 w-6" />
            <span>Budget Tracker</span>
          </h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <div
                    className={cn(
                      "flex items-center py-2 px-3 text-base font-medium rounded-lg cursor-pointer",
                      location === item.href
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              <User className="h-4 w-4" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">User</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
