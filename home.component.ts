import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerImgs = [
    {
      id: 1,
      img: '../../assets/images/banner/p1.png',
    },
    {
      id: 2,
      img: '../../assets/images/banner/p2.png',
    },
    {
      id: 3,
      img: '../../assets/images/banner/p3.png',
    },
  ];

  getCategorisData: any;
  getIndoorProductData: any = [];
  getHangingProductData: any = [];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getCategorisData = this.getData.categoriesData;

    this.getData.productData.filter((ele: any) => {

      if (ele.pdCategory == 'indoor') {
        this.getIndoorProductData.push(ele);
      }
      if (ele.pdCategory == 'hanging') {
        this.getHangingProductData.push(ele);
      }
    });


  }




}





