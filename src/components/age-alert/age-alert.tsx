import { Component, Host, h, Prop } from '@stencil/core';

let body:HTMLElement;
let componentElement:ShadowRoot;
let closeButton:HTMLElement;
let acceptButton:HTMLElement;
let banner:HTMLDivElement;

@Component({
  tag: 'age-alert',
  styleUrl: 'age-alert.css',
  shadow: true,
})
export class AgeAlert {

  @Prop() heading:string;
  @Prop() text:string;
  @Prop() buttontext:string;
  @Prop() buttontextremove:string;

  render() {
    return (
      <Host>
        <div class="container">
              <p class="heading">{this.heading && <p>{this.heading}</p>}</p>
                <p class="alertText">{this.text && <p>{this.text}</p>}</p>
            <button id="acceptButton" class="buttons">{this.buttontext && <p>{this.buttontext}</p>}</button>
            <button id="closeButton" class="buttons">{this.buttontextremove && <p>{this.buttontextremove}</p>}</button>
        </div>
      </Host>
    );
  }
  componentDidLoad() {
    Initialization();
    body = document.querySelector("body");
    body.style.overflowY="hidden";
  }
}

function Initialization() {
  componentElement =  document.querySelector("age-alert").shadowRoot;
  closeButton = componentElement.querySelector("#closeButton");
  acceptButton = componentElement.querySelector("#acceptButton");
  banner = componentElement.querySelector(".container");

  closeButton.addEventListener("click", reject);
  acceptButton.addEventListener("click", removeAlert);
}

function removeAlert(){
 banner.style.display = "none";
 body.style.overflowY="scroll";
}

function reject () {
  alert("Du bist noch keine 18 Jahre alt, also hast du auf unserer Seite nichts verloren")
}