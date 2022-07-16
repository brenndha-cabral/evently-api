interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  image?: string;
  adm?: boolean;
}

export default IUser;
