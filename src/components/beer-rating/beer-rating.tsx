import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'beer-rating',
  styleUrl: 'beer-rating.css',
  shadow: true,
})
export class BeerRating {

  @State() value:number;

  rateBeer(el:number){
 this.value=el;
 alert("Deine Meinung ist uns wichtig. Du hast dem Bier " + this.value +" von 5 Punkten gegeben")
  }

  render() {
    return (
      <Host>
        <div id="rate-wrapper">
          <h3 class="please-rate">Wie findest du unser Bier?</h3>
          <div class="beer-rating">
          <div onClick={()=>{ this.rateBeer(5)}}>
            <input type="radio" name="rating" id="5-beers" value="5"/>
            </div>
            <label htmlFor="5-beers"class="beer"><img class="top" src="src/components/beer-rating/img/beer.png"></img><img class="bottom" src="src/components/beer-rating/img/beer-bottom.png"></img></label>
            <div onClick={()=>{ this.rateBeer(4)}}>
            <input type="radio" name="rating" id="4-beers" value="4"/>
            </div>
            <label htmlFor="4-beers"class="beer"><img class="top" src="src/components/beer-rating/img/beer.png"></img><img class="bottom" src="src/components/beer-rating/img/beer-bottom.png"></img></label>
            <div onClick={()=>{ this.rateBeer(3)}}>
            <input type="radio" name="rating" id="3-beers" value="3"/>
            </div>
            <label htmlFor="3-beers"class="beer"><img class="top" src="src/components/beer-rating/img/beer.png"></img><img class="bottom" src="src/components/beer-rating/img/beer-bottom.png"></img></label>
            <div onClick={()=>{ this.rateBeer(2)}}>
            <input type="radio" name="rating" id="2-beers" value="2"/>
            </div>
            <label htmlFor="2-beers"class="beer"><img class="top" src="src/components/beer-rating/img/beer.png"></img><img class="bottom" src="src/components/beer-rating/img/beer-bottom.png"></img></label>
            <div onClick={()=>{ this.rateBeer(1)}}>
            <input type="radio" name="rating" id="1-beers" value="1"/>
            </div>
            <label htmlFor="1-beers"class="beer"><img class="top" src="src/components/beer-rating/img/beer.png"></img><img class="bottom" src="src/components/beer-rating/img/beer-bottom.png"></img></label>
          </div>
        </div>
      </Host>
    );
  }

}
