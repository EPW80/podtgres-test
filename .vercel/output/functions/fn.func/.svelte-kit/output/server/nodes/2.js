

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D9VwAVgP.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CnAN6RO0.js","_app/immutable/chunks/entry.B4B0FvmY.js"];
export const stylesheets = ["_app/immutable/assets/2.GKKJsHOD.css"];
export const fonts = [];
