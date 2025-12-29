"use client"

import * as React from "react"
import {
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import logoIcon from "@/public/logo-icon.svg"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"

export interface JoinedRoom {
  id: string;
  created_at: string;
  room: {
    id: string;
    room_title: string;
    creator?: {
      name: string;
    }
  } | null;
}

interface ClientSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: { name: string; email: string } | null;
  joinedRooms?: JoinedRoom[];
}

export function ClientSidebar({ user, joinedRooms, ...props }: ClientSidebarProps) {
  const { open } = useSidebar();
  console.log("Joined Rooms:", joinedRooms);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        {open ? (
          <div className="flex gap-4 p-2 items-center">
            <div className="bg-foreground flex justify-center items-center rounded-md w-8 h-8">
              <Image src={logoIcon} alt="PreppleAI Logo" width={16} height={16} />
            </div>
            <div className="flex flex-col">
              <h1>PreppleAI</h1>
              <p className="text-xs">Candidate Portal</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto mt-2">
            <div className="bg-foreground flex justify-center items-center rounded-sm w-6 h-6">
              <Image src={logoIcon} alt="PreppleAI Logo" width={12} height={12} />
            </div>
          </div>
        )}
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup className="-p-2">
          <SidebarGroupLabel>Joined Rooms</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
              {joinedRooms?.map((record) => (
                <SidebarMenuItem key={record.id}>
                  <SidebarMenuButton asChild className="h-full">
                    {/* Assuming we have a route to view the interview details/result */}
                    <Link href={`/client/interview/${record.room?.id}/join`}>
                      <div className="flex gap-2 items-center justify-center">
                        <FileText className="mr-2 h-4 w-4" />
                        <div className="flex flex-col">
                          <p>{record.room?.room_title.slice(0, 22) + (record.room?.room_title.length > 20 ? "..." : "") || "Unknown Room"}</p>
                          <p className="text-xs text-muted-foreground">{record.room?.creator?.name || "Unknown Creator"}</p>
                        </div>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {(!joinedRooms || joinedRooms.length === 0) && (
                <div className="px-2 py-1.5 text-sm text-muted-foreground">
                  No rooms joined yet.
                </div>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {user && <NavUser user={user} />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
