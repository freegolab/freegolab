/**
 * Created by gireeshbabu on 20/10/17.
 */
export class Registration implements IRegistration{

    firstName:string
    lastName:string
    age:number

    constructor(reg:IRegistration ){
        this.firstName = reg.firstName
        this.lastName = reg.lastName
        this.age = reg.age
    }
}