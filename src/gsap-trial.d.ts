// Ambient module declarations for GSAP plugin subpath imports.
// GSAP provides its types under node_modules/gsap/types but
// sometimes TypeScript cannot resolve plugin subpaths correctly.
// These declarations forward the symbols to the main GSAP types.

declare module 'gsap/SplitText' {
  export { SplitText } from 'gsap';
}

declare module 'gsap/ScrollSmoother' {
  export { ScrollSmoother } from 'gsap';
}