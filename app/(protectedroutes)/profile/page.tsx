"use client"

import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs/tabs"
import { profileTabsLinks } from "@/constants"
import Image from "next/image"
import { useState } from "react"
import { About, ActivityLog, Notifications, ProfileInfo, Settings } from "./components"

interface ProfileTab {
  value: string
  icon: string
  label: string
}

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile-info")

  const handleTabChange = (value: any) => {
    setActiveTab(value)
  }

  return (
    <div className="flex h-full flex-col gap-6">
      <H1>Account Settings</H1>

      <Tabs defaultValue={activeTab} className="flex w-full gap-6" onChange={handleTabChange}>
        <TabsList className="flex h-full min-h-[400px] basis-[25%] flex-col gap-2">
          <Box className="flex h-full w-full flex-col justify-between">
            <div className="flex flex-col gap-2">
              {profileTabsLinks.map((tab: ProfileTab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                  className={`flex w-full items-center justify-start gap-6 py-2.5 ${
                    activeTab === tab.value ? "active" : ""
                  }`}
                >
                  <Image
                    src={`/assets/svgs/icon-${tab.icon.toLowerCase()}.svg`}
                    alt={tab.label}
                    width={20}
                    height={20}
                    className={`h-[20px] w-[20px] ${activeTab === tab.value ? "" : "invert dark:invert-0"}`}
                  />
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </div>
            <div className="flex justify-center gap-4 py-4 text-sm">
              <p>Privacy</p>
              <p>Term</p>
              <p>Help</p>
            </div>
          </Box>
        </TabsList>

        <div className="basis-[75%] rounded-lg">
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
