import {Friend} from './friend';

export class User{
  firstName: String;
  lastName: String;
  age: number;
  username: String;
  password: String;
  friends: Friend[];
  messages: String[];
  imageURL: String;
}
