import { Directive, ElementRef, OnInit } from "@angular/core"
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Directive({
    selector: '[imediateClick]'
})
export class ImediateClickDirective implements OnInit {
    constructor(
        private element: ElementRef<any>,
        private platFormDetector: PlatformDetectorService) { }

    ngOnInit(){
        this.platFormDetector.isPlatformBrowser &&
        this.element.nativeElement.click();
    }
}