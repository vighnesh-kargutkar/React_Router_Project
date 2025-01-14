// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import EventsPage from "./components/EventsPage";
import EventDetailPage from "./components/EventDetailPage";
import NewEventPage from "./components/NewEventPage";
import EditEventPage from "./components/EditEventPage";
import MainNavigation from "./components/MainNavigation";

const router =createBrowserRouter([
  { path : '/',
    element: <MainNavigation/>,
    children: [
      { path:'' ,element: <Home/> },
      { path:'/events' ,element: <EventsPage/>},
      { path:'/events/:id' ,element: <EventDetailPage/>},
      { path:'/events/new' ,element: <NewEventPage/>},
      { path:'/events/:id' ,element: <EditEventPage/>}
    ]
  },
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
