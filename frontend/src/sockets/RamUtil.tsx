import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";

import AreaChartGraph from '../graphs/AreaChartGraph';
import Spinner from '../shared/Spinner';
import { isRamUtil } from '../types/types';

import classes from './shared.module.css'

// COMPONENT
const RamUtil: React.FC = () => {

    const [data, setData] = useState<isRamUtil[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // connect the socket
    useEffect(() => {

        const socket = socketIOClient("http://192.167.0.119:4001/");

        socket.on("ramUsage", (data: isRamUtil[]) => {
            setData(data);
            setIsLoading(false)
        });

        socket.on("disconnect", () => {
            setIsLoading(true)
        })

        // Clean up the socket connection when the component unmounts
        return () => {
            setIsLoading(true)
            socket.disconnect();
        };

    }, [])

    return (
            <div className={classes.parent}>
                <h1>Ram Utilization</h1>
                {isLoading && <Spinner />}
                {!isLoading && <AreaChartGraph data={data} dataLabel='RAM utilisation'/>}
            </div>
    )
}

export default RamUtil