import {ReadSensors} from "../../services/sensor-services";
import {useEffect, useState} from "react";

export function useFetchSensors(){

    const [sensor, setSensor] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const data = await ReadSensors();
            setSensor(data);
            setLoading(false);
            setError(null);
        }
        getData();
    },[]);
    return [sensor, loading, error]
}