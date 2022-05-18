import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'card-flip',
  styleUrl: 'card-flip.css',
  shadow: true
})

export class cardFlip {

  @Prop() imgsrc: string;
  @Prop() altimgtext: string;
  @Prop() text: string;

  constructor() {
  }

  render() {
    return (
      <Host>

          <div class="card">
            <div class="front">
                <img src={this.imgsrc} alt={this.altimgtext} id="myCard" />
            </div>
            <div class="back">
                {this.text}
            </div>
          </div>
        
      </Host>
    );
  }  
}


