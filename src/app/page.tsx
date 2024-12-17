import Hero from "@/components/Hero";
import TopPicks from "@/components/topicks";
import NewArrival from "@/components/newArrival";
import Blogs from "@/components/blog";
import Instagram from "@/components/instagram";

export default function Home() {
  return (
    <div>
       <Hero />
       <TopPicks />
       <NewArrival />
       <Blogs />
       <Instagram />
    </div>
  );
}
