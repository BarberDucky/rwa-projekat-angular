export class Answer {
    constructor(
        public content: string,
        public points: Number,
        public poster: string,
        public correct: Boolean
    ) {}
}