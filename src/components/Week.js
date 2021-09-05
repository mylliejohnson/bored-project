import React, { useState, useEffect} from 'react';
import axios from 'axios'

function Week(props) {

    let [task, setTask] = useState({})


    useEffect(async function() {
       let res = await axios.get(`https://www.boredapi.com/api/activity/`)
       setTask(res.data)
    }, [])



    return (
        <div>
            {task.activity}
            
        </div>
    );
}

export default Week;