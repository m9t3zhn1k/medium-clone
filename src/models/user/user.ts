// "email": "testtest7654321@testtest7654321.ru",
// "username": "testtest7654321@testtest7654321.ru",

export interface User {
  username: string;
  email: string;
  bio: string | null;
  image: string;
  token: string;
}

export interface UserDto {
  readonly username: string;
  readonly email: string;
  readonly bio: string | null;
  readonly image: string;
  readonly token: string;
}

export interface RegisterParams {
  readonly email: string;
  readonly password: string;
  readonly username: string;
}

export interface AuthResponse {
  readonly user: UserDto;
}

export interface LoginParams {
  readonly email: string;
  readonly password: string;
}

export interface UserUpdateParams {
  readonly username: string;
  readonly email: string;
  readonly bio: string | null;
  readonly image: string;
  readonly password: string;
}

export interface UserUpdateForm {
  readonly username: string;
  readonly email: string;
  readonly bio: string;
  readonly image: string;
  readonly password: string;
}
