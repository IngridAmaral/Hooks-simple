import React, { useState, useEffect } from 'react';
import axios from 'axios'

const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    
    const fetcResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

        setResources(response.data)
    }

    useEffect(() => {
        fetcResource(resource)
    }, [resource]) //every time the resource changes the component updates with a new value 'posts' or 'todos', and a new request is made
    //if you use an empty array it is like calling comonentDidMount()

    return resources
} 

const ResourceList = ({ resource }) => {
    const resources = useResources(resource)

    return (
        <ul>{resources.map(record => {
            return <li key={record.id}>{record.title}</li>
        })}</ul>
    )
}

export default ResourceList;