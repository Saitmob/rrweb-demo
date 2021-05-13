/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-04-27 17:50:17
 * @LastEditors: qxp
 * @LastEditTime: 2021-05-07 16:25:30
 */
import { message } from 'antd';
import * as rrweb from 'rrweb';
import rrwebPlayer from 'rrweb-player';


const WIDTH = 1000;
const HEIGHT = 800;

export let events = [];
export let stopRecord = () => {};
var replayer = null;

export const record = () => {
    events = [];
    stopRecord = rrweb.record({
        emit(event) {
            // 将 event 存入 events 数组中
            events.push(event);
        },
    });
    console.log('stopRecord', stopRecord)
}

export const getEvents = () => events;

const genaPlayer = () => {
    if (events.length < 2) {
        message.error('请先录制')
    }

    let dom = document.querySelector('#r-player')

    replayer = new rrwebPlayer({
        target: dom, // 可以自定义 DOM 元素
        // 配置项
        props: {
            events,
            mouseTail: true,
            autoPlay: false
        },
    });

    return replayer;
};

// 清除 replayer 内容
export const cleanPlayer = () => {
    let dom = document.querySelector('#r-player')
    if (replayer) {
        // 清空之前的player
        dom.innerHTML = null;
        replayer = null;
    }
};

// 获取 replayer
export const getPlayer = () => {
    if (replayer) {
        return replayer
    } 

    let p = genaPlayer()
    return p;
}

export const replay = () => {
    if (events.length < 2) {
        return;
    }
    cleanPlayer();
    getPlayer()?.play()
}

// 暂停
export const pause = (pauseTime) => {
    const replayer = getPlayer();

    if (pauseTime) {
        return replayer.pause(pauseTime);
    }

    replayer.pause();
}

export default {
    events,
    getEvents,
    record,
    stopRecord
}