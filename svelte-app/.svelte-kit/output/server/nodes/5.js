

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/art/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.IgL0dI5f.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/B5dZDVf9.js","_app/immutable/chunks/DWoB3wgL.js","_app/immutable/chunks/Ck1oHsZR.js"];
export const stylesheets = ["_app/immutable/assets/5.B3mEi2eR.css"];
export const fonts = [];
