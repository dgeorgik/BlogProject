import { Component, OnInit } from '@angular/core';
import {Blog} from "../../classes/Blog";
import {BlogServiceService} from "../../servives/blog-service.service";

@Component({
  selector: 'app-list-of-archive',
  templateUrl: './list-of-archive.component.html',
  styleUrls: ['./list-of-archive.component.css']
})
export class ListOfArchiveComponent implements OnInit {

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

}
