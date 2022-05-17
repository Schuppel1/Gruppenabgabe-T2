import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'title-desc',
  styleUrl: 'title-desc.css',
  shadow: true,
})
export class TitleDesc {
@Prop() title: string;
@Prop() desc:string;
@Prop() price:string;
  render() {
    return (
      <Host>
        <slot>
          <h3>{this.title}</h3>
          <p>{this.desc}</p>
          <h4> {this.price}</h4>
        </slot>
      </Host>
    );
  }

}
