import { json, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  // const data = useLoaderData()
  const data = useRouteLoaderData('event-detail')
  return (
    <>
    <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;
export async function loader({request,params}){
  console.log(request.url);
  const id = params.eventId  
  const response = await fetch('http://localhost:8080/events/'+id)
  if(!response.ok){
    return json({message: 'Could not fetch details data'},{status:500})
  }
  return response
}