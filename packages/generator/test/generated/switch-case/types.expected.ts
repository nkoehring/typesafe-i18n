// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = {
	/**
	 * {0|{yes:JA,no:NEIN}}
	 * @param {'no' | 'yes'} 0
	 */
	'switch1': RequiredParams1<`0|{yes:${string},no:${string}}`>
	/**
	 * {option|{yes:JA,no:NEIN}}
	 * @param {'no' | 'yes'} option
	 */
	'keyed': RequiredParams1<`option|{yes:${string},no:${string}}`>
	/**
	 * {0|{  yes : JA , no : NEIN }}
	 * @param {'no' | 'yes'} 0
	 */
	'switch2': RequiredParams1<`0|{  yes :${string}, no :${string}}`>
	/**
	 * {0|{y: yes, n: no }|uppercase}
	 * @param {'n' | 'y'} 0
	 */
	'switchFormatter': RequiredParams1<`0|{y:${string}, n:${string}}|uppercase`>
	/**
	 * {0|uppercase|{Y: yes, N: no }}
	 * @param {unknown} 0
	 */
	'formatterSwitch': RequiredParams1<`0|uppercase|{Y:${string}, N:${string}}`>
	/**
	 * {0|uppercase|{Y: yes, N: no }|uppercase}
	 * @param {unknown} 0
	 */
	'formatterSwitchFormatter': RequiredParams1<`0|uppercase|{Y:${string}, N:${string}}|uppercase`>
	/**
	 * {0|{1: one, 2: two}}
	 * @param {'1' | '2'} 0
	 */
	'number': RequiredParams1<`0|{1:${string}, 2:${string}}`>
	/**
	 * {0|{yes:JA, * : NEIN}}
	 * @param {string | 'yes'} 0
	 */
	'fallback': RequiredParams1<`0|{yes:${string}, * :${string}}`>
	/**
	 * {0|{test:, * : nothing}}
	 * @param {string | 'test'} 0
	 */
	'emptyNoFallback': RequiredParams1<`0|{test:${string}, * :${string}}`>
	/**
	 * {0|{a b c: begin, *:rest}}
	 * @param {string | 'a b c'} 0
	 */
	'spacesInKey': RequiredParams1<`0|{a b c:${string}, *:${string}}`>
	/**
	 * {0|{a-b-c: begin, *:rest}}
	 * @param {string | 'a-b-c'} 0
	 */
	'dashesInKey': RequiredParams1<`0|{a-b-c:${string}, *:${string}}`>
	/**
	 * {0|{y:yes,n:no}}
	 * @param {string} 0
	 */
	'withType': RequiredParams1<`0|{y:${string},n:${string}}`>
}

export type TranslationFunctions = {
	/**
	 * {0|{yes:JA,no:NEIN}}
	 */
	'switch1': (arg0: 'no' | 'yes') => LocalizedString
	/**
	 * {option|{yes:JA,no:NEIN}}
	 */
	'keyed': (arg: { option: 'no' | 'yes' }) => LocalizedString
	/**
	 * {0|{  yes : JA , no : NEIN }}
	 */
	'switch2': (arg0: 'no' | 'yes') => LocalizedString
	/**
	 * {0|{y: yes, n: no }|uppercase}
	 */
	'switchFormatter': (arg0: 'n' | 'y') => LocalizedString
	/**
	 * {0|uppercase|{Y: yes, N: no }}
	 */
	'formatterSwitch': (arg0: unknown) => LocalizedString
	/**
	 * {0|uppercase|{Y: yes, N: no }|uppercase}
	 */
	'formatterSwitchFormatter': (arg0: unknown) => LocalizedString
	/**
	 * {0|{1: one, 2: two}}
	 */
	'number': (arg0: '1' | '2') => LocalizedString
	/**
	 * {0|{yes:JA, * : NEIN}}
	 */
	'fallback': (arg0: string | 'yes') => LocalizedString
	/**
	 * {0|{test:, * : nothing}}
	 */
	'emptyNoFallback': (arg0: string | 'test') => LocalizedString
	/**
	 * {0|{a b c: begin, *:rest}}
	 */
	'spacesInKey': (arg0: string | 'a b c') => LocalizedString
	/**
	 * {0|{a-b-c: begin, *:rest}}
	 */
	'dashesInKey': (arg0: string | 'a-b-c') => LocalizedString
	/**
	 * {0|{y:yes,n:no}}
	 */
	'withType': (arg0: string) => LocalizedString
}

export type Formatters = {
	'uppercase': (value: 'n' | 'y' | unknown) => unknown
}

type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>