import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-detail-rating',
  templateUrl: './show-detail-rating.component.html',
  styleUrls: ['./show-detail-rating.component.scss']
})
export class ShowDetailRatingComponent implements OnInit {
  id: string;
  listHome: any;
  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
