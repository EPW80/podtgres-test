import * as server from '../entries/pages/fromDB/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fromDB/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/fromDB/+page.server.js";
export const imports = ["_app/immutable/nodes/3.ClE8nvqq.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CnAN6RO0.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.Cv2PaPZU.css"];
export const fonts = [];
