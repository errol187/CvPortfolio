import { Component, OnInit } from '@angular/core';

import {CvFull, Technology} from '../cv';
// import { Contracts } from '../cv';
import { CvService } from '../cv.service';

// Exported Data object
// import { CVFull } from '../mock-cv';

@Component({

  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']

})

export class PortfolioComponent implements OnInit {

  // Assignment of CV as an object
  name: string;

  cvfull: CvFull[];

  // Service call
  getCv(): void {

    this.cvfull = this.cvService.getCv();
    console.log(this.cvfull);
  }

  // Type definitions for data
  constructor(private cvService: CvService) {

    // TODO: define variables for custom assignment .e.g contacts, personal_details

  }

  // Initiation of components - like onReady??
  // TODO: investigate and get a deeper understanding of ngOnInit
  ngOnInit() {

    this.getCv();

    this.name =  this['cvfull'][0]['personal_details'].name;
    // let contracted = this['cvfull'][0]['contracts'];
    //
    // // duties}}</p>
    // // <p id="contractTechnology">{{technology}}</p>
    // console.log("contracts:: ", this.cvfull["contracts"]);
    // console.log("contract:: ", contracted);

    // Example to get data value from contracts
    // TODO: refactor to only retrieve specific keys e.g. contracts
    // console.log("ngOnInit", this['cvfull'][0]['contracts'][0].company_name)

  }

}
