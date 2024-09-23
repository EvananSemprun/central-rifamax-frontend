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
 * @interface IGetTripleById
 * @description Interface of getTripleById request function
 */
export interface IGetTripleById {
  token: string;
  raffleId: number;
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
    currency: string;
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


/**
 * @interface IPrize
 * @description Interface que define los detalles de un premio en un sorteo
 */
export interface IPrize {
  year: number | null;  
  award: string;        
  plate: string | null; 
  is_money: boolean;    
  wildcard: boolean;   
}

/**
 * @interface ISecurity
 * @description Interface que representa la seguridad relacionada a un sorteo o premio
 */
export interface ISecurity {
  position: number;    
  wildcard: string;
}

/**
 * @interface ISeller
 * @description Interface que define los detalles de un vendedor asociado a un sorteo
 */
export interface ISeller {
  id: number;                
  avatar: string | null;     
  name: string;              
  email: string;              
  dni: string;                
  is_active: boolean;         
  phone: string;              
  influencer_id: number | null;  
  content_code: string | null;   
  role: string;               
  is_first_entry: boolean;  
}

/**
 * @interface IUnclosedRaffle
 * @description Interface que define los detalles de un sorteo no cerrado
 */
export interface IUnclosedRaffle {
  id: number;                     
  title: string;                  
  init_date: string;              
  expired_date: string;           
  prizes: IPrize[];               
  price: number;                  
  numbers: number;               
  currency: string;               
  lotery: string;                 
  sell_status: string;            
  admin_status: string;           
  uniq_identifier_serial: string; 
  user_id: number;                
  seller_id: number;              
  seller: ISeller;               
  created_at: string;             
  updated_at: string;           
  security: ISecurity;            
}

/**
 * @interface ICloseDayResponse
 * @description Interface to get request function for close day table
 */
export interface ICloseDayResponse {
  message: string;  
  closed: IUnclosedRaffle[];   
  unclosed: IUnclosedRaffle[];
}

/**
 * @interface IGetCloseDayInfo
 * @description Interface for the request function to get close day info
 */
export interface IGetCloseDayInfo {
  token: string;
}

/**
 * @interface ICloseDayInfo
 * @description Interface for the response data from close day info
 */
export interface ICloseDayInfo {
  usd: number;
  ves: number;
  cop: number;
}
