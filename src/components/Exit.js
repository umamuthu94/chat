import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const ExitCounter = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalid = setInterval(change, 1000, 0);
        setTimeout(() => {
            clearInterval(intervalid);
        }, 5000);
        return () => {
            clearInterval(intervalid)
        };
    }, []);

    useEffect(() => {
        if(count === 0) {
            navigate("/data");
        }
    })

    const change = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <h3 className="counter">{count}...</h3>
        </div>
    )
}

export default ExitCounter;