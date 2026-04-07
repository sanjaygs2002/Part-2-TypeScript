namespace Auth {
  export interface User {
    name: string;
    age: number;
  }

  export const login = (user: User) => {
    console.log(user.name);
  };
}

console.log(Auth.login);

