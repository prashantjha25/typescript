interface User{
    name:string,
    id:number,
}

class UserAccount{
    name:string
    id:number
    
    userName() :string{
        return this.name;
    }
    
    constructor(name:string, id:number){
        this.name = name;
        this.id = id;
    }
}

const user:User = new UserAccount('Prashant', 1321);
console.log(user);

const anotherUser:UserAccount = new UserAccount('mohan', 1221);
console.log(anotherUser.userName());

function deleteUser(user: User) {
  console.log('user deleted!!');
}

deleteUser(user);