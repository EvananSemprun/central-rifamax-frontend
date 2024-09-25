/**
 * @type Role
 * @description This is a general type for the user roles
 */
export type Role = "Admin" | "Taquilla" | "Desarrollador" | "Influencer" | 'Rifero' | string;

/**
 * @type DrawType
 * @description This is a general type for the differents draw types
 */
export type DrawType = "Infinito" | "Fecha limite" | "Progresiva";

/**
 * @type DevType
 * @description This is a general type for the differents dev tools types
 */
export type DevType = "Showed" | "Hidden" | "Hover";

/**
 * @type RaffleType
 * @description This is a general type for the differents raffle type
 */
export type RaffleType = "Infinito" | "Terminal" | "Triple" | "Signo";

/**
 * @type StatusType
 * @description This is a general type for the differents statues type
 */
export type StatusType = "En venta" | "Finalizando" | "Cerrado";

/**
 * @type AdminStatusType
 * @description This is a general type for the differents admin statues type
 */
export type AdminStatusType = "pending" | "payed" | "unpayed" | "refunded";

/**
 * @type SellStatusType
 * @description This is a general type for the differents sell statues type
 */
export type SellStatusType = "active" | "sent" | "sold";

/**
 * @type LoteryType
 * @description This is a general type for the differents loteries type
 */
export type LoteryType = "Zulia 7A" | "Zulia 7B" | "Triple Pelotica";

/**
 * @type MoneyType
 * @description This is a general type for the differents money type
 */
export type MoneyType = "USD" | "VES" | "COP";

/**
 * @type IntegratorType
 * @description This is a general type for the differents integrators type
 */
export type IntegratorType = "CDA" | "BetFM4";

/**
 * @interface IUser
 * @description This is a general interface for the user object
 */
export interface IUser {
  user: {
    id: number;
    avatar: string | null;
    name: string;
    email: string;
    dni: string | null;
    influencer_id: number | null;
    is_active: boolean;
    phone: string;
    role: Role;
    content_code: string | null;
    is_first_entry: boolean;
  }
}

/**
 * @interface IFullUser
 * @description This is a general interface for full user model
 */
export interface IFullUser {
  id: number,
  avatar: {
    url: null
  },
  name: string,
  role: Role,
  dni: string,
  email: string,
  phone: string,
  is_active: boolean,
  rifero_ids: number[],
  module_assigned: number[],
  created_at: Date | string,
  updated_at: string,
  is_integration: boolean,
  is_first_entry: boolean
}

/**
 * @interface IPrize
 * @description This is a general interface for prizes on rifamax module
 */
export interface IPrize {
  award: string;
  plate: string | null;
  year: number | null;
  is_money: boolean;
  wildcard: boolean;
}

/**
 * @interface ITriplePrize
 * @description This is a general interface for prizes on triple module
 */
export interface ITriplePrize {
  name: string;
  days_to_award: number;
  prize_position: number;
}

/**
 * @interface ICombo
 * @description This is a general interface for combos on triple module
 */
export interface ICombo {
  price: number
  quantity: number
}

/**
 * @interface IRaffle
 * @description This is a general interface for raffles on rifamax module
 */
export interface IRaffle {
  id: number;
  admin_status: AdminStatusType;
  currency: MoneyType;
  expired_date: string | null;
  init_date: Date | string;
  lotery: LoteryType;
  numbers: number;
  price: number;
  prizes: IPrize[];
  security: string;
  sell_status: SellStatusType;
  title: string;
  uniq_identifier_serial: string;
  user: IUser["user"];
  seller: IUser["user"];
  created_at: string;
}

/**
 * @interface IAd
 * @description This is a general interface of adnoucemnts of triples module
 */
export interface IAd {
  url: string;
  url_parser: string;
}

/**
 * @interface ITripleRaffle
 * @description This is a general interface for raffles on triples module
 */
export interface ITripleRaffle {
  id: number;
  ad: IAd;
  title: string;
  draw_type: DrawType;
  init_date: Date | string;
  expired_date: Date | string | null;
  status: StatusType;
  raffle_type: RaffleType;
  tickets_count: number;
  limit: number | null;
  money: MoneyType;
  price_unit: number;
  lotery: LoteryType;
  prizes: ITriplePrize[];
  winners: null;
  has_winners: boolean;
  automatic_taquillas_ids: number[];
  agency: IFullUser;
  combos: ICombo[];
  created_at: Date | string;
  updated_at: Date | string;
}

/**
 * @interface ISeller
 * @description This is a general interface for sellers on rifamax module
 */
export interface ISeller {
  name: string;
  lastname: string;
  dni: string;
  phone: string;
  email: string;
}

/**
 * @interface ITicket
 * @description This is a general interface for Ticket on rifamax module
 */
export interface ITicket {
  id: number;
  wildcard: string;
  is_sold: boolean;
}


/**
 * @interface IRaffler
 * @description This is a general interface for Raffler on rifamax module
 */
export interface IRaffler {
  id: number;
  avatar: { url: string | null };
  name: string;
  role: string;
  dni: string;
  email: string;
  phone: string;
  is_active: boolean;
  is_first_entry: boolean;
}

/**
 * @interface IUserIntegrator
 * @description This is a general interface for UserIntegrator on triple module
 */
export interface IUserIntegrator {
  username: string;
  name: string;
  lastname: string;
  email: string;
  status: boolean;
}
