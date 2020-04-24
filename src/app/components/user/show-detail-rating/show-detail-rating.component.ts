import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {IDeal} from '../../../interface/deal';

@Component({
  selector: 'app-show-detail-rating',
  templateUrl: './show-detail-rating.component.html',
  styleUrls: ['./show-detail-rating.component.scss']
})
export class ShowDetailRatingComponent implements OnInit {
  // id: string;
  // listRating: any;
  // customerId: number;
  // deal: IDeal = {
  //   danhGia: 0,
  //   phanHoi: '',
  //   house:  {
  //     idNha: 0,
  //   },
  //   customer : {
  //     idCustomer: 0,
  //
  //   }};

  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe( params => {
    //   const idCustomer = params.get('id');
    //   this.componentsService.listRating().subscribe( result2 => {
    //     this.listRating = result2;
    //     this.id = idCustomer;
    //     console.log(idCustomer);
    //   });
    // });
 }
}
