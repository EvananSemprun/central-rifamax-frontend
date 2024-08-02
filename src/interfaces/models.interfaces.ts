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
    role: "Admin" | "Taquilla" | "Desarrollador" | "Influencer" | 'Rifero';
    content_code: string | null;
    is_first_entry: boolean;
  }
}
