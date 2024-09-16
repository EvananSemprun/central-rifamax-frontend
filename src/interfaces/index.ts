import { AxiosResponse } from 'axios';
import { Style } from '@react-pdf/types/style'; 
import { IGetProgressResponse, IRafflesResponse } from "./requests.interfaces";
import { IRaffle, ISeller, IUser, Role, ITripleRaffle, IUserIntegrator, MoneyType, IntegratorType } from "./models.interfaces";
import { MantineColor, MantineSize, MantineSpacing } from '@mantine/core';

// General interfaces

/**
 * @type BetType
 * @description This type includes all existent types of Bets/Raffles.
 */
export type BetType = 'Triple' | 'Terminal' | 'Infinito' | 'Raffle';

/**
 * @type MantineVariantButtons
 * @description This type includes all existent types of variants of buttons in Mantine.
 */
export type MantineVariantButtons = 'subtle' | 'light' | 'default' | 'filled' | 'white'

/**
 * @type IComboData
 * @description This interface includes all existent types of combos.
 */
export interface IComboData {
  value: number;
  price: number;
}

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
  integratorToken?: string;
  isIntegrator: boolean;
}

/**
 * @interface IRaffleCardContent
 * @description This interface is for the component IRaffleCardContent
 */
export interface IRaffleCardContent {
  raffle: ITripleRaffle;
  isPending: boolean;
  request: AxiosResponse<IGetProgressResponse, any> | undefined;
}

/**
 * @interface ILobbyCard
 * @description This interface is for the component ILobbyCard
 */
export interface ILobbyCard {
  raffle: ITripleRaffle;
  url: string;
  integratorToken?: string;
  isIntegrator?: boolean;
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
  integration?: boolean;
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
 * @interface IUseAsyncGenerator
 * @description useAsyncGenerator hook interface
 */
export interface IUseAsyncGenerator<T> {
  data?: T;
  loading: boolean;
  error?: any;
  refetch: () => void;
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
  variant: 'dashed' | 'dotted' | 'default';
}

/**
 * @interface IIntegratorInfo
 * @description IntegratorInfo component props interface
 */
export interface IIntegratorInfo {
  currency?: MoneyType;
  playerId?: string;
  integratorToken?: string;
  integrator?: IntegratorType;
}

/**
 * @interface IRaffleTicket
 * @description IRaffleTicket component props
 */
export interface IRaffleTicket {
  value: number;
  betType: 'Terminal' | 'Triple';
  select?: boolean;
  className?: string;
  onSelect?: () => void;
}

/**
 * @interface IPagyButtons
 * @description PagyButtons component on triples modules props
 */
export interface IPagyButtons {
  onPressedUp?: () => void;
  onPressedDown?: () => void;
  disabledUp: boolean;
  disabledDown: boolean;
  p?: MantineSpacing;
  size?: MantineSize;
  className?: string;
  color?: MantineColor;
  variant?: MantineVariantButtons;
}

/**
 * @interface ICurrencyButtons
 * @description CurrencyButtons component on triples modules props
 */
export interface ICurrencyButtons {
  borders?: boolean;
  bg?: MantineColor;
  size?: MantineSize;
  color?: MantineColor;
  defaultCurrency: MoneyType;
  onChange?: (value: MoneyType) => void;
}

/**
 * @interface ICombosButtons
 * @description CombosButtons component on triples modules props
 */
export interface ICombosButtons {
  p?: MantineSpacing;
  px?: MantineSpacing;
  size?: MantineSize;
  className?: string;
  data: IComboData[];
  color?: MantineColor;
  variant?: MantineVariantButtons;
  onSelect: (price: number, value: number) => void;
}

/**
 * @interface IPriceText
 * @description PriceText component on triples modules props
 */
export interface IPriceText {
  price: number;
}

/**
 * @interface ITouchBar
 * @description TouchBar component on triples modules props
 */
export interface ITouchBar {
  priceText: IPriceText;
  pagyButton: IPagyButtons;
  combosButtons: ICombosButtons;
  currencyButton: ICurrencyButtons;
}

/**
 * @interface IIntegratorHeaders
 * @description IntegratorHeaders component props interface
 */
export interface IIntegratorHeaders {
  integrator: IntegratorType
}

/**
 * @interface IIntegratorPicker
 * @description IntegratorPicker component props interface
 */
export interface IIntegratorPicker {
  onSelect?: (select: IntegratorType) => void
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

/**
 * @interface IntegratorUserState
 * @description This is the auxiliary interface of IntegratorState
 */
export interface IntegratorUserState {
  user: IUserIntegrator
}

/**
 * @interface IntegratorState
 * @description This is interface for the state of integrators in integratorSlice
 */
export interface IntegratorState {
  player_id: number;
  wallet_id: number;
  currency: MoneyType;
  balance: string;
  data: IntegratorUserState
}