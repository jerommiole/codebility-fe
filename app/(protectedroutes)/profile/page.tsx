"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs/tabs"
import ProfileInfo from "./components/ProfileInfo"
import { IconClients, IconBell, IconApplicant2, IconBox, IconBoxLine } from "@/public/assets/svgs"
import Notifications from "./components/Notifications"
import Settings from "./components/Settings"
import ActivityLog from "./components/ActivityLog"
import About from "./components/About"
import H1 from "@/Components/shared/dashboard/H1"

const ProfilePage = () => {
  return (
    <div className="flex h-full flex-col gap-6">
      <H1 className="text-[#0E0E0C]">Account Settings</H1>
      <Tabs defaultValue="profile-info" className="flex w-full gap-6">
        <TabsList className="flex h-full min-h-[370px] basis-1/4 flex-col justify-start gap-4">
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <TabsTrigger value="profile-info" className="flex w-full items-center justify-start gap-10 py-2.5">
                <IconClients />
                <span>Profile Info</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex w-full items-center justify-start gap-10 py-2.5">
                <IconBell />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex w-full items-center justify-start gap-10 py-2.5">
                <IconBox />
                <span>Settings</span>
              </TabsTrigger>
              <TabsTrigger value="activity-log" className="flex w-full items-center justify-start gap-10 py-2.5">
                <IconBoxLine />
                <span>Activity Log</span>
              </TabsTrigger>
              <TabsTrigger value="about" className="flex w-full items-center justify-start gap-10 py-2.5">
                <IconApplicant2 />
                <span>About</span>
              </TabsTrigger>
            </div>
            <div className="flex justify-center gap-4 py-4 text-xs md:text-sm">
              <p className="cursor-pointer">Privacy</p>
              <p className="cursor-pointer">Term</p>
              <p className="cursor-pointer">Help</p>
            </div>
          </div>
        </TabsList>
        <div className="basis-3/4  rounded-lg">
          <TabsContent value="profile-info">
            <ProfileInfo />
          </TabsContent>
          <TabsContent value="notifications">
            <Notifications />
          </TabsContent>
          <TabsContent value="settings">
            <Settings />
          </TabsContent>
          <TabsContent value="activity-log">
            <ActivityLog />
          </TabsContent>
          <TabsContent value="about">
            <About />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default ProfilePage
