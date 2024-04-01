import EventItem from "./EventItem";
import styles from "./EventList.module.css";
function EventList(props) {
  const { events } = props;
  return (
    <ul>
      {events.map((event) => (
        <li className={styles.list}>
          <EventItem
            key={event.id}
            id={event.id}
            title={event.tile}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        </li>
      ))}
    </ul>
  );
}

export default EventList;
