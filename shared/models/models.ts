export interface Base {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Auth extends Base {
  email: string;
  password: string;
  name: string;
}
