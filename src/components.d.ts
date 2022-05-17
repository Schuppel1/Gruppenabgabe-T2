/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AgeAlert {
        "buttontext": string;
        "buttontextremove": string;
        "header": string;
        "text": string;
    }
    interface CardFlip {
        "imgSrc": string;
    }
    interface ContactComponent {
        "dsgvotext": string;
        "emaillabel": string;
        "mailfrom": string;
        "mailtarget": string;
        "msglabel": string;
        "namelabel": string;
    }
    interface CookieBanner {
        "buttontext": string;
        "buttontextremove": string;
        "header": string;
        "link": string;
        "linkguide": string;
        "text": string;
    }
    interface CustomButton {
        "color"?: string;
        "text": string;
    }
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
    }
    interface HeaderComponent {
        "firstnav": string;
        "secondnav": string;
    }
    interface ImpressumComponent {
        "firstfooterlink": string;
        "secondfooterlink": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface QrGenerator {
        "link": string;
    }
    interface TitleDesc {
        "desc": string;
        "price": string;
        "texttitle": string;
    }
}
declare global {
    interface HTMLAgeAlertElement extends Components.AgeAlert, HTMLStencilElement {
    }
    var HTMLAgeAlertElement: {
        prototype: HTMLAgeAlertElement;
        new (): HTMLAgeAlertElement;
    };
    interface HTMLCardFlipElement extends Components.CardFlip, HTMLStencilElement {
    }
    var HTMLCardFlipElement: {
        prototype: HTMLCardFlipElement;
        new (): HTMLCardFlipElement;
    };
    interface HTMLContactComponentElement extends Components.ContactComponent, HTMLStencilElement {
    }
    var HTMLContactComponentElement: {
        prototype: HTMLContactComponentElement;
        new (): HTMLContactComponentElement;
    };
    interface HTMLCookieBannerElement extends Components.CookieBanner, HTMLStencilElement {
    }
    var HTMLCookieBannerElement: {
        prototype: HTMLCookieBannerElement;
        new (): HTMLCookieBannerElement;
    };
    interface HTMLCustomButtonElement extends Components.CustomButton, HTMLStencilElement {
    }
    var HTMLCustomButtonElement: {
        prototype: HTMLCustomButtonElement;
        new (): HTMLCustomButtonElement;
    };
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLHeaderComponentElement extends Components.HeaderComponent, HTMLStencilElement {
    }
    var HTMLHeaderComponentElement: {
        prototype: HTMLHeaderComponentElement;
        new (): HTMLHeaderComponentElement;
    };
    interface HTMLImpressumComponentElement extends Components.ImpressumComponent, HTMLStencilElement {
    }
    var HTMLImpressumComponentElement: {
        prototype: HTMLImpressumComponentElement;
        new (): HTMLImpressumComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLQrGeneratorElement extends Components.QrGenerator, HTMLStencilElement {
    }
    var HTMLQrGeneratorElement: {
        prototype: HTMLQrGeneratorElement;
        new (): HTMLQrGeneratorElement;
    };
    interface HTMLTitleDescElement extends Components.TitleDesc, HTMLStencilElement {
    }
    var HTMLTitleDescElement: {
        prototype: HTMLTitleDescElement;
        new (): HTMLTitleDescElement;
    };
    interface HTMLElementTagNameMap {
        "age-alert": HTMLAgeAlertElement;
        "card-flip": HTMLCardFlipElement;
        "contact-component": HTMLContactComponentElement;
        "cookie-banner": HTMLCookieBannerElement;
        "custom-button": HTMLCustomButtonElement;
        "example-component": HTMLExampleComponentElement;
        "header-component": HTMLHeaderComponentElement;
        "impressum-component": HTMLImpressumComponentElement;
        "my-component": HTMLMyComponentElement;
        "qr-generator": HTMLQrGeneratorElement;
        "title-desc": HTMLTitleDescElement;
    }
}
declare namespace LocalJSX {
    interface AgeAlert {
        "buttontext"?: string;
        "buttontextremove"?: string;
        "header"?: string;
        "text"?: string;
    }
    interface CardFlip {
        "imgSrc"?: string;
    }
    interface ContactComponent {
        "dsgvotext"?: string;
        "emaillabel"?: string;
        "mailfrom"?: string;
        "mailtarget"?: string;
        "msglabel"?: string;
        "namelabel"?: string;
    }
    interface CookieBanner {
        "buttontext"?: string;
        "buttontextremove"?: string;
        "header"?: string;
        "link"?: string;
        "linkguide"?: string;
        "text"?: string;
    }
    interface CustomButton {
        "color"?: string;
        "text"?: string;
    }
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface HeaderComponent {
        "firstnav"?: string;
        "secondnav"?: string;
    }
    interface ImpressumComponent {
        "firstfooterlink"?: string;
        "secondfooterlink"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface QrGenerator {
        "link"?: string;
    }
    interface TitleDesc {
        "desc"?: string;
        "price"?: string;
        "texttitle"?: string;
    }
    interface IntrinsicElements {
        "age-alert": AgeAlert;
        "card-flip": CardFlip;
        "contact-component": ContactComponent;
        "cookie-banner": CookieBanner;
        "custom-button": CustomButton;
        "example-component": ExampleComponent;
        "header-component": HeaderComponent;
        "impressum-component": ImpressumComponent;
        "my-component": MyComponent;
        "qr-generator": QrGenerator;
        "title-desc": TitleDesc;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "age-alert": LocalJSX.AgeAlert & JSXBase.HTMLAttributes<HTMLAgeAlertElement>;
            "card-flip": LocalJSX.CardFlip & JSXBase.HTMLAttributes<HTMLCardFlipElement>;
            "contact-component": LocalJSX.ContactComponent & JSXBase.HTMLAttributes<HTMLContactComponentElement>;
            "cookie-banner": LocalJSX.CookieBanner & JSXBase.HTMLAttributes<HTMLCookieBannerElement>;
            "custom-button": LocalJSX.CustomButton & JSXBase.HTMLAttributes<HTMLCustomButtonElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "header-component": LocalJSX.HeaderComponent & JSXBase.HTMLAttributes<HTMLHeaderComponentElement>;
            "impressum-component": LocalJSX.ImpressumComponent & JSXBase.HTMLAttributes<HTMLImpressumComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "qr-generator": LocalJSX.QrGenerator & JSXBase.HTMLAttributes<HTMLQrGeneratorElement>;
            "title-desc": LocalJSX.TitleDesc & JSXBase.HTMLAttributes<HTMLTitleDescElement>;
        }
    }
}
