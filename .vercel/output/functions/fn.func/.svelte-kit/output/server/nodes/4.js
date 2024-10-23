import * as server from '../entries/pages/fromDBandComponents/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fromDBandComponents/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/fromDBandComponents/+page.server.js";
export const imports = ["_app/immutable/nodes/4.DZB9umGU.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CnAN6RO0.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/4.Ba6aI_rs.css"];
export const fonts = [];
