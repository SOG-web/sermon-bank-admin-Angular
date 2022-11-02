export class CategoryFormModel {
  name: string;
  icon: File | undefined;

  constructor() {
    this.name = '';
    this.icon = undefined;
  }
}
