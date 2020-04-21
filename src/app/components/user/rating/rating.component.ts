import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IDeal} from '../../../interface/deal';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';
import {IHouse} from '../../../interface/house';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  id: string;
  listHome: any;
  customerId: number;
  deal: IDeal = {
     danhGia: 0,
     phanHoi: '',
    house:  {
      idNha: 0,
    },
    customer : {
       idCustomer: 0,

  }};
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  formGroup = new FormGroup({
    danhGia: new FormControl(),
    phanHoi: new FormControl(),
  });
  constructor(private componentsService: ComponentsService , private route: ActivatedRoute ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const idHome = params.get('id');
      this.id = idHome;
      this.componentsService.findById(idHome).subscribe( result => {
        this.listHome = result;
        console.log(this.listHome);
      });
    });
  }
  rating() {
    this.customerId = Number(localStorage.getItem('customerId'));
    this.isLoading = true;
    this.deal.danhGia = this.formGroup.get('danhGia').value;
    this.deal.phanHoi = this.formGroup.get('phanHoi').value;
    this.deal.customer.idCustomer = this.customerId;
    this.deal.house.idNha = this.listHome.idNha;
    console.log(this.deal);
    this.componentsService.addRating(this.deal).subscribe( result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Đánh giá thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Đánh giá giá thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }
}
