import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-campeon-waterdeep',
  templateUrl: './campeon-waterdeep.component.html',
  styleUrls: ['./campeon-waterdeep.component.scss']
})
export class CampeonWaterdeepComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 6000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
	}

  ngOnInit(): void {
  }

}
