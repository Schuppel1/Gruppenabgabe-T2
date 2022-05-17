import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'title-desc',
  styleUrl: 'title-desc.css',
  shadow: true,
})
export class TitleDesc {
@Prop() texttitle: string;
@Prop() desc:string;
@Prop() price:string;
  render() {
    return (
      <Host>
        <slot>
          <h3>{this.texttitle}</h3>
          <p>{this.desc}</p>
          <h4> {this.price}</h4>
        </slot>
      </Host>
    );
  }

}
