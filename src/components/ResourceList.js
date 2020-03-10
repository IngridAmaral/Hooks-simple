import React, { useState, useEfect, useEffect } from 'react';
import axios from 'axios'

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);
    
    const fetcResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

        setResources(response.data)
    }

    useEffect(() => {
        fetcResource(resource)
    }, [])

    // async componentDidUpdate(prevPros) {
    //     //console.log(prevPros)
    //     if (prevPros.resource !== this.props.resource) {
    //         const response  = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

    //         this.setState({ resources: response.data })
    //     }
    // }

    return (
        <div>{resources.length}</div>
    )
}

export default ResourceList;