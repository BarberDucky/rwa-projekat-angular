export class Answer {
    constructor(
        public id: string,
        public content: string,
        public points: Number,
        public poster: string,
        public correct: Boolean
    ) {}
}