import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[breezeController]'
})
export class HighlightBreezeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#dbedff');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
  }

  @HostListener('mousedown') onMouseDown() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#c6e1ff');
  }

  @HostListener('mouseup') onMouseUp() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#dbedff');
    // copy the text to clipboard
    const text = this.el.nativeElement.innerText;
    try {
      navigator.permissions.query({ name: 'clipboard-write' as PermissionName }).then(permissionStatus => {
        console.log(`Clipboard write permission: ${permissionStatus.state}`);
      });
      navigator.clipboard.writeText(text);
    } catch (e) {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }

    this.el.nativeElement.innerText = '🫡 Copied!';
    setTimeout(() => {
      this.el.nativeElement.innerText = text;
    }, 1000);
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid blue');
  }
}
