/**
 * @type IRole
 * @description This is a general type for the user roles
 */
export type Role = "Admin" | "Taquilla" | "Desarrollador" | "Influencer" | 'Rifero' | string;

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