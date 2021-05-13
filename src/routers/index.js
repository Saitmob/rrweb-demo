/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-04-28 16:11:49
 * @LastEditors: qxp
 * @LastEditTime: 2021-05-07 11:49:26
 */
import Replay from 'Pages/replay';
import Home from 'Pages/home';

export default [
	{
	  path: "/replay",
      name: 'replay',
	  component: Replay
	},
	{
	  path: "/",
      name: 'home',
	  component: Home
	},
	{
	  path: "*",
      name: '404',
	  component: Home
	}
];
