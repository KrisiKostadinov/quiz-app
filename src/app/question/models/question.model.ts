import { Answer } from './answer.model';

export class Question {
    id?: string;
    title: string;
    answers?: Array<Answer>;
}