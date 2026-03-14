// Ambient module declarations for gsap-trial subpath imports.
// gsap-trial ships its types under node_modules/gsap-trial/types/ but does not
// declare the subpath exports map, so TypeScript cannot resolve them by default.
// These declarations forward the symbols to the correct type definitions.

declare module 'gsap-trial/SplitText' {
  export { SplitText } from 'gsap-trial';
}

declare module 'gsap-trial/ScrollSmoother' {
  export { ScrollSmoother } from 'gsap-trial';
}
