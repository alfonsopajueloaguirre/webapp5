import { Roles } from './roles';
import { Purchase } from './purchase';
import { EventRegister } from './event-register';



export interface Users {
	id: number;
	email: string;
	name: string;
	firstName: string;
	lastName: string;

	passwordHash?: string;
	role?: Roles;

	purchases?: Purchase[];
	events?: EventRegister[];
	authData?: string; 
	roles?: string[];
}
