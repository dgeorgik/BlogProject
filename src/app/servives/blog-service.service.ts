import { Injectable } from '@angular/core';
import {Blog} from "../classes/Blog";

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  arrayToBlogRows: Blog[] = [];
  arrayToBlogRowsArhived: Blog[] = [];
  arrayToBlogRowsToEntries: Blog[] = [];

  constructor() { }


  pushNewRowToBlog(autor, title, comments, category, arhiveFlag){

      let newBlog = new Blog(this.arrayToBlogRows.length+1, autor, title, comments, category, arhiveFlag)
    console.log("Новая запись добавлена!")
    this.arrayToBlogRows.push(newBlog);

  }

  getAllRowsBlog(): Blog[]{
    return this.arrayToBlogRows;
  }

  changeStatedToRow(id, state){
    this.arrayToBlogRows.forEach((element, index) => {
      if(element.id == id){
        console.log(element[index] + " добавлен в архив");
        element.arhiveFlag = state;
      }
    });
  }
}
