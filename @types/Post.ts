import { Author } from './Author';

export interface Posts {
	id: number;
	title: string;
	content: string;
	author: Author;
	author_id: number;
	createdAt: Date;
	updatedAt: Date;
}
