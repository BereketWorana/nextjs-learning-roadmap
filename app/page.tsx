import Hero from "./components/Hero";
import Announcements from "./components/Announcement";

export default function Home() {
  return (
    <main className="space-y-12 pb-16">
      <Hero />
      <Announcements />
    </main>
  );
}