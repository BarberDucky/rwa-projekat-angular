import { Answer } from "./answer";

export class Question {
    constructor(
        public title: String,
        public content: String,
        public answers: Array<Answer>,
        public correct: String,
        public points: Number,
        public tags: Array<String>
    ) {}
}