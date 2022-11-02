export class MessageFormModel {
  category: [];
  minister: string;
  // related: [];
  title: string;
  message: File | undefined;

  constructor() {
    this.category = [];
    this.minister = '';
    // this.related = [];
    this.title = '';
    this.message = undefined;
  }
}
