// General interfaces

import { IPrize, IRaffle, IUser } from "./models.interfaces";
import { IRafflesResponse } from "./requests.interfaces";

export interface ILoginBody {
  email: string;
  password: string;
}

/**
 * @type BetType
 * @description This type includes all existent types of Bets/Raffles.
 */
export type BetType = 'Triple' | 'Terminal' | 'Infinito' | 'Raffle';

/**
 * @interface IToBet
 * @description This interface is for the util tool toBet, it is used to change the value to its respective bet/raffle type.
 */
export interface IToBet {
  value: number;
  betType: BetType;
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
 * @interface IAuthRoute
 * @description This is the interface for the AuthRoute component
 */
export interface IAuthRoute {
  roles: string[]
}

/**
 * @interface IRafflesAccordion
 * @description RafflesAccordion component props interface 
 */
export interface IRafflesAccordion {
  step: number
  data: IRafflesResponse["raffles"]
}

/**
 * @interface IAddRaffleForm
 * @description AddRaffleForm component props interface
 */
export interface IAddRaffleForm {
  onNext?: (raffle: IRaffleForm) => void;
  onBack?: () => void;
}

/**
 * @interface IAccordionSteps
 * @description interface of AccordionSteps (StepOne and StepTwo)
 */
export interface IAccordionSteps {
  raffle_id: number;
}

/**
 * @interface IRaffleForm
 * @description interface of RaffleForm data of hook
 */
export interface IRaffleForm {
  title: string;
  init_date: Date;
  price: number;
  currency: string;
  numbers: number;
  lotery: string;
  seller_id: number;
  prizes: IPrize[];
}

/**
 * @interface ICardRaffle
 * @description CardRaffle component props interface
 */
export interface ICardRaffle {
  raffle: IRaffle;
}

/**
 * @interface ITicketRaffle
 * @description TicketRaffle dup of CardRaffle for verify step component props interface
 */
export interface ITicketRaffle {
  raffle: IRaffleForm | null
}


/**
 * @interface ILoaderBlur
 * @description This is the interface for the LoaderBlur component
 */
export interface ILoaderBlur {
  label?: string;
}

/**
 * @interface IInfoRafflesAccordion
 * @description InfoRafflesAccordion component props interface
 */
export interface IInfoRafflesAccordion {
  title: string;
  init_date: string;
  seller: string;
}

/**
 * @interface IStacksRaffle
 * @description IStacksRaffle component props interface
 */
export interface IStacksRaffle {
  color: string;
  number: number;
  title: string;
} 

/**
 * @interface ICardTitle
 * @description CardTitle component props interface
 */
export interface ICardTitle {
  content: string | number;
  title: string;
};

/**
 * @interface ITitlesRafflesAccordion
 * @description TitlesRafflesAccordion component props interface
 */
export interface ITitlesRafflesAccordion {
  id: number;
  numbers: number;
}

/**
 * @interface IWoodTitle
 * @description WoodTitle component props interface
 */
export interface IWoodTitle {
  title: string;
  variant: 'dashed' | 'dotted' | 'default'
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
