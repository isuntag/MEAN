export class User {
    constructor(
        public fname: string = "",
        public lname: string = "",
        public email: string = "",
        public password: string = "",
        public password_confirm: string = "",
        public street: string = "",
        public unit: string = "",
        public city: string = "",
        public state: string = "",
        public lucky: boolean = null,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
