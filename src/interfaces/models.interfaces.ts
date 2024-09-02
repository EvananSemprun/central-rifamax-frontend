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
 * @type RaffleType
 * @description This is a general type for the differents raffle type
 */
export type RaffleType = "Infinito" | "Terminal" | "Triple" | "Signo";

/**
 * @type StatusType
 * @description This is a general type for the differents status type
 */
export type StatusType = "En venta" | "Finalizando" | "Cerrado"

/**
 * @type MoneyType
 * @description This is a general type for the differents money type
 */
export type MoneyType = "USD" | "VES" | "COP"

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
  admin_status: string;
  currency: string;
  expired_date: string;
  init_date: Date | string;
  lotery: string;
  numbers: number;
  price: number;
  prizes: IPrize[];
  security: string;
  sell_status: 'active' | 'sent' | 'sold';
  title: string;
  uniq_identifier_serial: string;
  user: IUser["user"];
  seller: IUser["user"];
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
  lotery: string;
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
