// General interfaces

import { IUser } from "./models.interfaces";

export interface ILoginBody {
  email: string;
  password: string;
}

/**
 * @interface ILinksList
 * @description This is the interface for the LinksList component of navbar
 */
export interface ILinksList {
  position?: 'left' | 'right' | 'top' | 'bottom';
}

/**
 * @interface INotifications
 * @description This is the interface for the notifications component of navbar
 */
export interface INotifications {
  position?: 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  title: string
  label: string;
}


/**
 * @interface ILoaderBlur
 * @description This is the interface for the LoaderBlur component
 */
export interface ILoaderBlur {
  label?: string;
}

/**
 * @type HttpMethod
 * @description This is the type for the HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

// Redux interfaces

/**
 * @interface TokenState
 * @description This is the interface for the state of the token in userSlice
 */
export interface TokenState {
  token: string | null;
}

/**
 * @interface TrustState
 * @description This is the interface for the state of the trustInDevice in userSlice
 */
export interface TrustState {
  trustInDevice: boolean;
}

/**
 * @interface UserState
 * @description This is the interface for the state of the user in userSlice
 */
export interface UserState {
  user: IUser["user"] | null;
}