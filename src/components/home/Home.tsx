import ExplorePage from "./explore/ExplorePage"
import InboxPage from "./inbox/InboxPage"
import OthersPage from "./otherssay/OthersPage"
import SpecialsPage from "./specials/SpecialsPage"

export default function Home() {
  return (
    <div className="">
        <ExplorePage />
        <SpecialsPage />
        <OthersPage />
        <InboxPage />
    </div>
  )
}
