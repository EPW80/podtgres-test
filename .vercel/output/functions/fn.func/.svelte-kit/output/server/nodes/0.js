

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CA-ALgrU.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CnAN6RO0.js"];
export const stylesheets = ["_app/immutable/assets/0.DZHUY3ro.css"];
export const fonts = [];
