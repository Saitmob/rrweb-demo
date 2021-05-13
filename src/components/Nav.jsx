import React, { useMemo } from 'react';
import { Button } from 'antd';
import { record, stopRecord, events } from 'Utils/rrweb';
import {
	useHistory,
	useLocation
} from "react-router-dom";

export default function Nav (){
    const history = useHistory();
	const location = useLocation();
	
	const noRecord = useMemo(() => {
		const { pathname } = location;
		return pathname.includes('replay');
	})

    const stopHandle = () => {
		stopRecord()
	}

	const replayHandle = () => {
		history.push('/replay');
	}

    return (
        <div className='rr-block'>
            {!noRecord && (<><Button onClick={record}>record</Button>
			<Button onClick={stopHandle}>stop</Button></>)}
			<Button onClick={replayHandle}>replay</Button>
			<Button onClick={() => console.log('记录的事件数据：', events)}>get event</Button>
			<Button onClick={() => history.push('/')}>back to home</Button>
        </div>
    );
}