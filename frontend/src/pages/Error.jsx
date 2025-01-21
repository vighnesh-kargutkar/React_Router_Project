import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage(){
    const error = useRouteError()
    var title = 'An error occurred'
    var message = 'Something went wrong'
    if(error.status === 500){
        message = JSON.parse(error.data).message
    }
    if(error.status === 404){
        title = 'Not found'
        message = 'Could not find response or page'
    }
    return <>
    <PageContent title={title}>
        <h1>{message}</h1>
    </PageContent>
    </>
}