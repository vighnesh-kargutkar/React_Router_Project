import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return<>
  <EventForm/>  
  </>
}
export default NewEventPage;
export async function action ({request,params}){
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    date: data.get('date'),
    image: data.get('image'),
    description: data.get('description')
  }
  
  const response = await fetch('http://localhost:8080/events',{
    method: 'POST',
    headers : {
      'content-Type': 'application/json'
    },
    body:  JSON.stringify(eventData)
  })
  if(!response.ok){
    throw json({message: 'Could not save data'},{status:500})
  }
  return redirect('/events')
}