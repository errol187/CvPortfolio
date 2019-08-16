import { Injectable } from '@angular/core';

// Typescript
import { CvFull } from './cv';

// Exported Data object
import { CVFull } from './mock-cv'

// Registered provider with an injector
@Injectable({ providedIn: 'root' })


export class CvService {

  getCv(): CvFull[] {

    console.log("message", CVFull[0]);

    return CVFull;

  }

};

