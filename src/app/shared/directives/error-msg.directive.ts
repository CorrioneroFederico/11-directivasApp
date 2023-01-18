import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color = 'red';
  private _mensaje = 'Este mensaje si o si es obligatorio';

  elementRef: ElementRef<HTMLElement>;

  @Input() set color(valor:string){
    this._color = valor;
    this.setStyle();
  };

  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  };



  constructor(private element: ElementRef<HTMLElement>) {
    this.elementRef = element;
   }

  ngOnInit(): void {
    this.setStyle();
    this.setMensaje();
  }

   setStyle():void{
    this.elementRef.nativeElement.classList.add('form-text');
    this.elementRef.nativeElement.style.color = this._color;
  }

  setMensaje():void{
    this.elementRef.nativeElement.innerText = this._mensaje;
  }

}
