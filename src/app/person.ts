export class Person {

  firstName: string;
  lastName: string;
  birth: string;
  country: string;
  city: string;
  address: string;
  zip: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  
  constructor(firstName: string, lastName: string, birth: string,
              country: string, city: string, address: string,
              zip: string, phone: string, email: string,
              createdAt: string, updatedAt: string) {
            
    this.firstName = firstName;
    this.lastName = lastName;
    this.birth = birth;
    this.country = country;
    this.city = city;
    this.address = address;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}