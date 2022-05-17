import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'price-table',
  styleUrl: 'price-table.css',
  shadow: true,
})
export class PriceTable {
  @Prop() product: string;
  @Prop() producttwo: string;
  @Prop() productthree: string;
  @Prop() detailone: string;
  @Prop() detailtwo: string;
  @Prop() detailthree: string;
  @Prop() detailoneone: string;
  @Prop() detailonetwo: string;
  @Prop() detailonethree: string;
  @Prop() detailtwoone: string;
  @Prop() detailtwotwo: string;
  @Prop() detailtwothree: string;
  @Prop() detailthreeone: string;
  @Prop() detailthreetwo: string;
  @Prop() detailthreethree: string;
  







  render() {
    return (
      <Host>
        <slot>
          <table>
            
            <tr>
            <th> </th>
              <th>{this.product}</th>
              <th>{this.producttwo}</th>
              <th>{this.productthree}</th>

            </tr>
            <tr>
              <td>{this.detailone}</td>
              <td>{this.detailoneone}</td>
              <td>{this.detailonetwo}</td>
              <td>{this.detailonethree}</td>

            </tr>
            <tr>
              <td>{this.detailtwo}</td>
              <td>{this.detailtwoone}</td>
              <td>{this.detailtwotwo}</td>
              <td>{this.detailtwothree}</td>
            </tr>
            <tr>
              <td>{this.detailthree}</td>
              <td>{this.detailthreeone}</td>
              <td>{this.detailthreetwo}</td>
              <td>{this.detailthreethree}</td>

            </tr>
          </table>
        </slot>
      </Host>
    );
  }
}
