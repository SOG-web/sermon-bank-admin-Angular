export class MinisterFormModel {
  image: File | undefined;
  name: string;
  dob: Date | string;
  country: {};
  about: string;

  constructor() {
    this.image = undefined;
    this.name = '';
    this.dob = '';
    this.country = {};
    this.about = '';
  }
}
