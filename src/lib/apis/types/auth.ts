export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: number;
    nickname: string;
    createdAt: string;
    updatedAt: string;
    image: string | null;
    teamId: string;
    email: string;
  };
  accessToken: string;
  refreshToken: string;
}
