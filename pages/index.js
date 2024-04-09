import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";
import EventsSearch from "../components/events/EventsSearch";
import { useRouter } from "next/router";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
