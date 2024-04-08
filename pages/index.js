import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";
import EventsSearch from "../components/events/EventsSearch";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsSearch />
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
