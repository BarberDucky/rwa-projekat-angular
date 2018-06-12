export class Answer {
    constructor(
        public content: String,
        public votes: Number,
        public user: String,
        public chosen: Boolean
    ) {}
}