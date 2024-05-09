import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from "../../servives/blog-service.service";
import {ListOfEnrtiesComponent} from "../list-of-enrties/list-of-enrties.component";

@Component({
  selector: 'app-form-addition',
  templateUrl: './form-addition.component.html',
  styleUrls: ['./form-addition.component.css']
})
export class FormAdditionComponent{
  autorsName?: string = "";
  titelName?: string = "";
  category?: string = "";
  commentName?: string = "";
  errorEx : string="";
  rowsRumber?: number;
  blogServices : BlogServiceService;
  getAllRows : ListOfEnrtiesComponent;
  constructor(blogServices: BlogServiceService) {
    this.blogServices = blogServices;
  }

  functionToAddNewBlogRow() {

    if (this.autorsName == "" || this.titelName == "" || this.category == "" || this.commentName == "") {
      this.errorEx = "Вы не заполнили форму!";

    } else {
      this.errorEx = "";

      // private id:number;
      // private autor:string;
      // private title:string;
      // private comments:string;
      // private  category:string;
      // private arhiveFlag:string;
      this.blogServices.pushNewRowToBlog(this.autorsName!, this.titelName!, this.category!, this.commentName!, "inPublich")
      let getAllEntriesComponent = new ListOfEnrtiesComponent(this.blogServices);

      getAllEntriesComponent.getAllRowsByEntries();
    }
  }
}
