export class BannerFormModel {
  image: File | undefined;
  url: string;

  constructor() {
    this.image = undefined;
    this.url = '';
  }
}
