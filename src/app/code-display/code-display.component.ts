import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import * as Prism from 'prismjs';
import { isPlatformBrowser, NgIf } from '@angular/common';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-sql';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class CodeDisplayComponent implements AfterViewInit {
  @Input() code: string = '';
  @Input() language: string = 'java';
  copied: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.code)
      .then(
        () => {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        },
        (err) => console.error("Could not copy text: ", err)
      );
  }
}
