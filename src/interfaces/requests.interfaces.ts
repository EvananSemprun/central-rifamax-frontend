// API responses interfaces

import { IRaffleForm } from ".";
import { IRaffle, IUser } from "./models.interfaces";

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
  raffle_id: number;
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