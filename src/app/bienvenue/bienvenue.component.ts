import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-sql';
import * as Prism from 'prismjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bienvenue',
  imports: [],
  templateUrl: './bienvenue.component.html',
  styleUrl: './bienvenue.component.css'
})
export class BienvenueComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
