type typeOfGeo = {
  lat: string;
  lng: string;
};

type typeOfAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: typeOfGeo;
};

type typeOfCompnay = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface typeOfUser {
  name: string;
  id: number;
  username: string;
  email: string;
  address: typeOfAddress;
  phone: string;
  website: string;
  company: typeOfCompnay;
}

export interface typeOfTodo {
  title: string;
  id: number;
  userId: number;
  completed: string;
}

export interface typeOfData {
  newData: any[];
  term: string;
}
