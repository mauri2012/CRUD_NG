import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-product-by-date',
  standalone: true,
  imports: [],
  templateUrl: './view-all-product-by-date.component.html',
  styleUrl: './view-all-product-by-date.component.css'
})
export class ViewAllProductByDateComponent implements OnInit {
  searchDate='';
  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=> {
      this.searchDate=data['date'];
    })
  }
}
