import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
})

export class headerComponent {

  @Prop({reflect:true, mutable:true})
  @Prop() firstnav:string;
  @Prop() secondnav:string;
 
  render() {
    return (

      <Host>
       <nav>
        <h2>Bier-Blog</h2>
          <ul>
            <li><a href={`"# ${this.firstnav}"`}>{this.firstnav}</a></li>
            <li><a href={`"# ${this.secondnav}"`}>{this.secondnav}</a></li>
          </ul>
        </nav>

      </Host>
    );
  }

}