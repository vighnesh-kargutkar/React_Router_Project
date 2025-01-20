import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  return (
    <>
      <EventsList events={data} />
    </>
  );
}

export default EventsPage;
