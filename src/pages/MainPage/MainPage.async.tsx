import { lazy } from 'react';

export const MainPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!! ДЕЛАЕМ ДЛЯ КУРСА!!!!
				resolve(import('./MainPage'));
			}, 1500);
		}),
);
