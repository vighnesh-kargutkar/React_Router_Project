import { useEffect } from "react";
import axios from "axios";

export default function EventsPage() {
  useEffect(() => {
    const data = axios.get("http://localhost:8080/events");
    console.log(data);
  }, [[]]);
  return (
    <>
      <h1>Events Page</h1>
    </>
  );
}
