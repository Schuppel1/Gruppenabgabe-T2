import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'scroll-button',
  styleUrl: 'scroll-button.css',
  shadow: true,
})
export class scrollbutton {
  @Element() scrollEl: HTMLElement;

  handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div>
        <button type="button" class="button" onClick={() => this.handleClick()}>
        ↑
        </button>
      </div>
    );
  }
}