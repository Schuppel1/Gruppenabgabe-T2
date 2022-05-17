import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'contact-component',
  styleUrl: 'contact-component.css',
  shadow: true,
})


export class ContactComponent {

  @Prop() namelabel: string;
  @Prop() emaillabel: string;
  @Prop() msglabel: string;
  @Prop() dsgvotext: string;
  @Prop() mailtarget: string;
  @Prop() mailfrom: string;
  @Prop() secondheader:string;

  render() {
    return (
      <Host>

<div>
          <h1 class="contact">{this.secondheader}</h1>
          </div>

        <form id="ft-form" method="POST" accept-charset="UTF-8">
          <fieldset>
            <label>
              {this.namelabel}
              <input type="text" name="Name" required></input>
            </label>
            <label>
              {this.emaillabel}
              <input type="email" name="E-Mail" required></input>
            </label>
            <label>
              {this.msglabel}
              <textarea name="Nachricht" required></textarea>
            </label>
            <div>
              <label>
                <input type="checkbox" name="Datenverarbeitung bestätigt" value="Ja" required></input>
                {this.dsgvotext}
              </label>
            </div>
          </fieldset>
          <div class="btns">
            <input type="submit" value="Absenden"></input>
          </div>
        </form>
        <slot></slot>
      </Host>
    );
  }
  componentDidLoad() {
    initializEventlistener()
  }
}

function submitData(){
  alert("Die Email wurde versendet!. Vielen Dank")
}


function initializEventlistener() {
  const componentElement =  document.querySelector("contact-component").shadowRoot;
  componentElement.querySelector("#ft-form").addEventListener("submit",submitData);

}

