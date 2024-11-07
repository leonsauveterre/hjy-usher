// src/darkmode-js.d.ts

declare module 'darkmode-js' {
  export default class Darkmode {
    constructor(options?: {
      bottom?: string;
      right?: string;
      left?: string;
      time?: string;
      mixColor?: string;
      backgroundColor?: string;
      buttonColorDark?: string;
      buttonColorLight?: string;
      saveInCookies?: boolean;
      label?: string;
      autoMatchOsTheme?: boolean;
    });
    toggle(): void;
    isActivated(): boolean;
  }
}
