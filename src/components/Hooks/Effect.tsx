import { Fragment, useEffect, useState } from "react";
import { json } from "stream/consumers";

export default function SocialMedia() {

    const [resourceType, setResourceType] = useState(() => {
        return 'posts'
    })



    const [data, setData] = useState(() => {
        return []
    })



    function updateResource(resource: string): void {
        setResourceType(resource)
    }


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json =>{
                setData(json)
            })
            return () => {
                setData([])
            }
    }, [resourceType])

    return (
        <Fragment>
           <div>
                <button onClick={() => updateResource('posts')}>Posts</button>
                <button onClick={() => updateResource('users')}>Users</button>
                <button onClick={() => updateResource('comments')}>Comments</button>
            </div>
            <h5>Total {data.length} {resourceType}</h5>
        </Fragment>
    )
}