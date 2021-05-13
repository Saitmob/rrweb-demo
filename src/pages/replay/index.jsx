import React, { useEffect } from 'react';
import { events, getPlayer, cleanPlayer } from '@/utils/rrweb';
import './style.less';
// import './index.css';

export default function Replay() {
    useEffect(() => {
        // 回放至少需要两个 event
        if (events.length > 2) {
            cleanPlayer();
            const p = getPlayer();

            p.addEventListener('start', (payload) => {
                console.log('回放开始：', payload)
            })
        
            p.addEventListener('finish', (payload) => {
                console.log('回放结束：', payload)
            })

            
            p.play();
        }

        return () => {
            // 播放器并没有 removeEventListener 方法
            // p.removeEventListener('start');
            // p.removeEventListener('finish');
        }
    }, []);

    return (
        <div id="r-player" className={'RRPlayer'}>{!events.length ? '暂无录像' : null}</div>
    );
}