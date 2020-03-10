import React, { useState, useEfect } from 'react';
import axios from 'axios'

const ResourceList = () => {
    const [resources, setResources] = useState([]);
    
    const fetcResource = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

        this.setState({ resources: response.data })
    }

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