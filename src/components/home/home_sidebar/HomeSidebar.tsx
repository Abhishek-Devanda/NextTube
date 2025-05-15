import { Separator } from "../../ui/separator"
import { Sidebar, SidebarContent } from "../../ui/sidebar"
import { MoreSection } from "./MoreSection"
import { MainSection } from "./MainSection"
import { ExploreSection } from "./ExploreSection"
import { YouSection } from "./YouSection"


export const HomeSidebar = () => {

  return (
    <Sidebar className="pt-16 z-40 border-none" >
      <SidebarContent className="bg-background youtube-scrollbar">
        <MainSection />
        <Separator />
        <YouSection />
        <Separator />
        <ExploreSection />
        <Separator />
        <MoreSection />
        <Separator />
      </SidebarContent>

    </Sidebar>
  )
}