/**
 * Created by gireeshbabu on 08/11/17.
 */
export class User implements IUser{

    name:string
    password:string
    profession:string
    id:number

    constructor(user:IUser){
        this.name = user.name
        this.password = user.password
        this.profession = user.profession
        this.id = user.id
    }
}