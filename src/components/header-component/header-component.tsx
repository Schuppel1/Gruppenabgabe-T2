import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
})

export class headerComponent {

  @Prop() firstnav:string;
  @Prop() secondnav:string;
  @Prop() thirdnav:string;
 
  render() {
    return (

      <Host>
       <nav>
        <h2>Bier-Blog</h2>
          <ul>
            <li><a href="ON-your-styleguide/index.html" >{this.firstnav}</a></li>
            <li><a href="ON-your-styleguide/shop.html">{this.secondnav}</a></li>
            <li><a href="#contact">{this.thirdnav}</a></li>
          </ul>
        </nav>
 
      </Host>
    );
  }

}