import { Person } from "./PostAnswer"

export interface CommentAnswer {
    id: number;
    commenter: Person;
    created_at: string;
    message: string;
}