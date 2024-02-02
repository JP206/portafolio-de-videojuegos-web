import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eco-run',
  templateUrl: './eco-run.component.html',
  styleUrls: ['./eco-run.component.scss']
})
export class EcoRunComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 8000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
	}

  ngOnInit(): void {
  }

}
