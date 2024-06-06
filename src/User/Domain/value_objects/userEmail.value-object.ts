export class UserEmail {
    private readonly value: string
  
    constructor(value: string) {
      if (!UserEmail.isValid(value)) {
        throw new Error('Invalid email')
      }
      this.value = value
    }
  
    static isValid(email: string): boolean {
      const expression: RegExp =
        /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
  
      return expression.test(email)
    }
  
    toString(): string {
      return this.value
    }
  }
  