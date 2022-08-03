import React from 'react'
import Image from 'next/image'
import cup from '../public/cup.png'
import user from '../public/user.png'
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
            <Image
              src={cup}
              alt="cup"
            />
            
        </div>
        <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
        <button className="text-white hidden xl:inline ml-auto bg-[#c1311c] rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#800200]">Flex</button>
        <div className="text-[#000000] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5">
        <Image
              src={user}
              alt="user"
              height="30px"
              width="30px"
            />
          <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Paul-Simon</h4>
          <p className="text-[#6e767d]">@ptbysr</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
        </div>
    </div>
  )
}

export default Sidebar