import type React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lightning-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        name?: string;
        accent?: string;
        to?: string;
        image?: string;
        amounts?: string;
        labels?: string;
        debug?: boolean;
      };
    }
  }
}

export {};
