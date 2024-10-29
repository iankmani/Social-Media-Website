// import Card from "../../src/app/Components/Card";
import NavigationCard from "./Components/NavigationCard";
import PostCard from "./Components/PostCard";
import PostFormCard from "./Components/PostFormCard";
// import Avatar from "./Components/Avatar";
export default function Home() {
  return (
    <div className="flex max-w-4xl mx auto gap-6">
      <div className="w-3/12">
        <NavigationCard />
      </div>
      <div className="w-9/12">
        <PostFormCard />
        <PostCard />
      </div>
    </div>
  );
}
