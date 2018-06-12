export class User {
    constructor(
        public id: string,
        public password: string,
        public questions: Array<string>,
        public answers: Array<string>
    ) {}
}