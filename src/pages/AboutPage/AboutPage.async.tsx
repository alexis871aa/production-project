import { lazy } from 'react';

export const AboutPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!! ДЕЛАЕМ ДЛЯ КУРСА!!!!
				resolve(import('./AboutPage'));
			}, 1500);
		}),
);
