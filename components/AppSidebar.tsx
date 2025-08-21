import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  LogOut,
  Plus,
  Projector,
  Search,
  Settings,
  User,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";

const AppSidebar = () => {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "/",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "/",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "/",
      icon: Search,
    },
    {
      title: "Settings",
      url: "/",
      icon: Settings,
    },
  ];
  return (
    <Sidebar collapsible="icon" side="left">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span>Admin Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>23</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Projector />
                    See all Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Plus />
                    Add Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  Help
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/">
                        <Projector />
                        See all Projects
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/">
                        <Plus />
                        Add Project
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel asChild>Nested Item</SidebarGroupLabel>

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Projector />
                    See all Projects
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/">
                        <Plus />
                        Add Project
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/">
                        <Plus />
                        Add Category
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenuSubItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 />
                John Doe <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                <Link href="/profile">Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                <Link href="/logout">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuSubItem>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
