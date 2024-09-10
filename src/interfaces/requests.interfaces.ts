import { IntegratorUserState, IRaffleForm } from ".";
import { IRaffle, IRaffler, IUser, MoneyType } from "./models.interfaces";

// API responses interfaces

/**
 * @interface ILoginBody
 * @description This is the interface for the body of login endpoint
 */
export interface ILoginBody {
  email: string;
  password: string;
}

/**
 * @interface IRenewTokenResponse
 * @description This is the interface for the response of the renew token endpoint
 */
export interface IRenewTokenResponse {
  token: string;
  exp: string;
  user: IUser["user"];
  header: string;
}

/**
 * @interface ILoginResponse
 * @description This is the interface for the response of the login endpoint
 */
export interface ILoginResponse {
  token: string;
  exp: string;
  user: IUser["user"];
}

/**
 * @interface IRafflesResponse
 * @description This is the interface for the response of the raffles endpoint
 */
export interface IRafflesResponse {
  raffles: IRaffle[],
  metadata: {
    items: number;
    count: number;
    page: number;
    pages: number;
  }
}

/**
 * @interface IGetProgressResponse
 * @description This is the interface for the response of get progress of x100 raffles endpoint
 */
export interface IGetProgressResponse {
  raffle_id: number;
	progress: number;
	current_solds: number;
}

/**
 * @interface IGetRaffles
 * @description Interface of getRaffles request function
 */
export interface IGetRaffles {
  token: string;
  queryType?: 'newest' | 'initialized' | 'to-close' | string | null;
  page: number;
  items: number; 
}

/**
 * @interface IGetTriples
 * @description Interface of getTriples request function
 */
export interface IGetTriples {
  token: string;
}

/**
 * @interface IGetClosedRaffles
 * @description Interface of getClosedRaffles request function
 */
export interface IGetClosedRaffles {
  token: string;
  page: number;
  items: number;
}

/**
 * @interface ISendToApp
 * @description Interface of sendToApp request function
 */
export interface ISendToApp {
  token: string;
  raffle_id: number;
}

/**
 * @interface IRepeatToApp
 * @description Interface of sendToApp request function
 */
export interface IRepeatToApp {
  token: string;
  raffle_id: number;
  data: {
    init_date: Date | null | string;
    numbers: number;
    lotery: string;
  }
}

/**
 * @interface IPayRaffle
 * @description Interface of sendToApp request function
 */
export interface IPayRaffle {
  token: string;
  raffle_id: number;
  data: {
    price: number;
    current: string;
  }
}

/**
 * @interface IAddRaffles
 * @description Interface of addRaffles request function
 */
export interface IAddRaffles {
  token: string;
  data: IRaffleForm;
}

/**
 * @interface IUnpayRaffle
 * @description Interface of addRaffles request function
 */
export interface IUnpayRaffle {
  token: string;
  raffle_id: number;
}


/**
 * @interface IRefundRaffle
 * @description Interface of addRaffles request function
 */
export interface IRefundRaffle {
  token: string;
  raffle_id: number;
}

/**
 * @interface IFilterSeller
 * @description Interface of filterSeller request function
 */
export interface IFilterSeller {
  token: string;
  query: string;
}

/**
 * @interface IUploadAvatar
 * @description Interface of uploadAvatar request function
 */
export interface IUploadAvatar {
  token: string;
  avatar: File;
}

/**
 * @interface IGetTicketId
 * @description Interface of IGetTicketId request function
 */
export interface IGetTicketId {
  token: string;
  raffleId: number;
}

/**
* @interface IGetProgress
* @description Interface of getProgress request function
*/
export interface IGetProgress {
  token: string;
  raffleId: number;
}

/**
 * @interface IGetRafflers
 * @description Interface for getRafflers request function
 */
export interface IGetRafflers {
  token: string;
  page: number;
}

/**
 * @interface IGetCDAPlayer
 * @description Interface for getCDAPlayer request function
 */
export interface IGetCDAPlayer {
  playerId: number;
  currency: MoneyType;
}

/**
 * @interface IRafflersResponse
 * @description Interface for response sent via API of rafflers function
 */
export interface IRafflersResponse {
  rafflers: IRaffler[];
  metadata: {
    page: number;
    count: number;
    items: number;
    pages: number;
  };
}

/**
 * @interface ICDAResponse
 * @description Interface for response sent via API of CDA Integrator
 */
export interface ICDAResponse {
  player_id: number;
  wallet_id: number;
  balance: string;
  currency: MoneyType;
  data: IntegratorUserState;
}
