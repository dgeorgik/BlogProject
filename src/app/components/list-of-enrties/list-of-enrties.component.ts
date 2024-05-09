import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from "../../servives/blog-service.service";
import {Blog} from "../../classes/Blog";

@Component({
  selector: 'app-list-of-enrties',
  templateUrl: './list-of-enrties.component.html',
  styleUrls: ['./list-of-enrties.component.css']
})
export class ListOfEnrtiesComponent implements OnInit{

  arrayToBlogRows : Blog[]=[];
  blogServices: BlogServiceService;

  constructor(blogServices: BlogServiceService) {
    this.blogServices = blogServices;
  }

  getAllRowsByEntries(){
    this.arrayToBlogRows = this.blogServices.getAllRowsBlog();
  }

  ngOnInit(): void {
    this.getAllRowsByEntries()
  }

  styled_arch(id?: number) {

    this.blogServices.changeStatedToRow(id, "inArchive")
    console.error(id)

  }

  styled_del(id?: number) {
    this.blogServices.changeStatedToRow(id, "deleted")
    console.error(id)

  }
}
