// This types were auto-generated. Any manual changes will be overwritten.
/* eslint-disable */

import type { LocalizedString } from 'typesafe-i18n'

export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = {
	/**
	 * Click on the button: <button>{buttonText}</button>
	 * @param {LocalizedString} buttonText
	 */
	'localized': RequiredParams1<'buttonText'>
}

export type TranslationFunctions = {
	/**
	 * Click on the button: <button>{buttonText}</button>
	 */
	'localized': (arg: { buttonText: LocalizedString }) => LocalizedString
}

export type Formatters = {}


type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>