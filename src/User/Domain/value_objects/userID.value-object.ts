export class UserID {
    private readonly value: string;

    constructor(value: string) {
        if (!value) {
            throw new Error("El ID de usuario no puede estar vacio")
        }
        this.value = value;
    }

    toString(): string {
        return this.value
    }
}