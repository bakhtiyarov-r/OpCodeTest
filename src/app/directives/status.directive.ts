import { Directive, ElementRef, Renderer2, AfterContentInit, Input } from '@angular/core';

@Directive ({
	selector: '[status]'
})

export class StatusDirective implements AfterContentInit {

	
	@Input() inspectionDesc = "";

	constructor( private elementRef: ElementRef, private renderer: Renderer2 ) {
		
	}


	ngAfterContentInit() {
		switch (this.inspectionDesc) {
			case "REINSPECTION REQUIRED":
				this.renderer.addClass(this.elementRef.nativeElement, 'red');
				break;
			case "SHORTER DATE ADVANCE":
				this.renderer.addClass(this.elementRef.nativeElement, 'orange');
				break;
			case "NO ACTION":
				this.renderer.addClass(this.elementRef.nativeElement, 'green');
				break;
			case "ISSUED PERMIT":
				this.renderer.addClass(this.elementRef.nativeElement, 'blue');
				break;
			default:
				break;
		}
		
	}
}