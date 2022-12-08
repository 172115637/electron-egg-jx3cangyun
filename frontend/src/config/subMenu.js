/*
 * @Date: 2022-12-07 17:29:15
 * @LastEditors: 李志祥
 * @LastEditTime: 2022-12-08 15:32:13
 * @FilePath: \electron-egg\frontend\src\config\subMenu.js
 */
/**
 * 子菜单
 */
export default {
	base: {
		'menu_100' : {
			icon: 'alert',
			title: '公告',
			pageName: 'Jx3AlertIndex',
			params: {}
		},
		'menu_200' : {
			icon: 'appstore',
			title: '配装器',
			pageName: 'Jx3PzIndex',
			params: {}
		},
		'menu_300' : {
			icon: 'container',
			title: '攻略',
			pageName: 'Jx3BpsIndex',
			params: {}
		}, 
		'menu_400' : {
			icon: 'hourglass',
			title: '宏库',
			pageName: 'Jx3MacroIndex',
			params: {}
		}                                    
	}
}