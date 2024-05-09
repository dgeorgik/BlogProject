export class Blog {
  id?: number;
  autor?: string;
  title?: string;
  comments?: string;
  category?: string;
  arhiveFlag?: string;

  constructor(id: number, autor: string, title: string, comments: string, category: string, arhiveFlag: string) {
    this.id = id;
    this.autor = autor;
    this.title = title;
    this.comments = comments;
    this.category = category;
    this.arhiveFlag = arhiveFlag;
  }

}
