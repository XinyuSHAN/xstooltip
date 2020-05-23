declare module '*.md' {
  export const value: string;
}

declare module '*.svg' {
  const value: string;
  export default value;
}
