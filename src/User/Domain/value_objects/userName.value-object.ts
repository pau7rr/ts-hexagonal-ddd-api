export class UserName {
    private readonly value: string;

    constructor(value: string) {
        if (!value) {
            throw new Error("El name de usuario no puede estar vacio")
        }
        this.value = value;
    }

    toString(): string {
        return this.value
    }
}