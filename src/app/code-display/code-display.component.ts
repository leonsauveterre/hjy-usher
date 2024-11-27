import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as Prism from 'prismjs';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-sql';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css'],
  imports: []
})
export class CodeDisplayComponent implements AfterViewInit {
  @Input() code: string = '';
  @Input() language: string = 'java';
  @ViewChild('codeElement') codeElement!: ElementRef<HTMLElement>;
  copied: boolean = false;

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngAfterViewInit(): void {
    this.rerender();
  }

  rerender(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.cdr.detectChanges();
    const codeElement = this.codeElement.nativeElement;
    const preElement = codeElement.parentElement as HTMLElement;
    preElement.classList.add('line-numbers');
    codeElement.textContent = this.code;
    Prism.highlightElement(codeElement);
  }

  copyToClipboard(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    try {
      navigator.clipboard.writeText(this.code)
        .then(() => {
          this.copied = true;
        });
    } catch (e) {
      const area = document.createElement('textarea');
      area.innerHTML = this.code;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');  // for compatibility
      document.body.removeChild(area);
      this.copied = true;
    }
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
