// General interfaces

import { IRaffle, ISeller, IUser, Role, ITripleRaffle } from "./models.interfaces";
import { IRafflesResponse } from "./requests.interfaces";
import { Style } from '@react-pdf/types/style'; 

/**
 * @type BetType
 * @description This type includes all existent types of Bets/Raffles.
 */
export type BetType = 'Triple' | 'Terminal' | 'Infinito' | 'Raffle';

/**
 * @interface IQRCode
 * @description This interface if for component QrGenerator
 */
export interface IQrGenerator {
  value: string;
  type: 'react' | 'pdf';
  style?: React.CSSProperties | Style
}

/**
 * @interface IToBet
 * @description This interface is for the util tool toBet, it is used to change the value to its respective bet/raffle type.
 */
export interface IToBet {
  value: number;
  betType: BetType;
}

/**
 * @interface IRaffleCard
 * @description This interface is for the component IRaffleCard
 */
export interface IRaffleCard {
  raffle: ITripleRaffle;
}

/**
 * @interface ILobbyCard
 * @description This interface is for the component ILobbyCard
 */
export interface ILobbyCard {
  raffle: ITripleRaffle;
  url: string;
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
  title: string;
  label: string;
}

/**
 * @interface IAuthRoute
 * @description This is the interface for the AuthRoute component
 */
export interface IAuthRoute {
  roles: Role[];
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
 * @interface IConfettiProvider
 * @description This is the interface for the ConfettiProvider component
 */
export interface IConfettiProvider {
  children: React.ReactNode;
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
  wildcard?: string
}

/**
 * @interface IRaffleForm
 * @description interface of RaffleForm data of form
 */
export interface IRaffleForm 
extends Pick<
  IRaffle, 
  'title'    | 
  'price'    | 
  'currency' | 
  'numbers'  | 
  'lotery'   | 
  'prizes'
> {
  init_date: Date;
  seller_id: number;
}

/**
 * @interface IRepeatRaffleForm
 * @description interface of RepeatRaffleForm data of form
 */
export interface IRepeatRaffleForm {
  lotery: string;
  init_date: Date | string | null;
  numbers: number;
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
 * @interface IAddSeller
 * @description AddSeller component props interface
 */
export interface IAddSeller {
  onSubmit: (data: IAddSellerForm) => void;
}


/**
 * @interface IAddSellerForm
 * @description SellerForm component props interface
 */
export interface IAddSellerForm extends ISeller {
  password: string;
  password_confirmation: string;
}

/**
 * @interface IConfirmSeller
 * @description ConfirmSeller component props interface
 */
export interface IConfirmSeller {
  data: ISeller | null;
}

/**
 * @type HttpMethod
 * @description This is the type for the HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

// Redux interfaces

/**
 * @interface ConfettiState
 * @description This is the interface for the state of the ConfettiState
 */
export interface ConfettiState {
  isRunning: boolean;
}

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
