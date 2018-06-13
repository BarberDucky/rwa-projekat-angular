import { Answer } from "./answer";

export class Question {
    constructor(
        public id: string,
        public title: string,
        public content: string,
        public answers: Array<Answer>,
        public correct: string,
        public points: Number,
        public tags: Array<string>,
        public poster: string
    ) {}
}