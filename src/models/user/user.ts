export interface User {
  readonly username: string;
  readonly email: string;
  readonly bio: null;
  readonly image: string;
  readonly token: string;
}

export interface UserDto {
  readonly username: string;
  readonly email: string;
  readonly bio: null;
  readonly image: string;
  readonly token: string;
}

// {
//   "user": {
//       "email": "testtest7654321@testtest7654321.ru@testtest654321.ru",
//       "username": "testtest7654321@testtest7654321.ru",
//       "bio": null,
//       "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
//       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdHRlc3Q2NTQzMjFAdGVzdHRlc3Q2NTQzMjEucnUiLCJ1c2VybmFtZSI6InRlc3R0ZXN0NjU0MzIxIn0sImlhdCI6MTY5NjUzMzk0NSwiZXhwIjoxNzAxNzE3OTQ1fQ.W0hNtzIVLsWtTtORyAPahI3Tg00C3-xesQHQQTtNNEs"
//   }
// }

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
