import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "a.svelte-d328gi{margin-top:20px;margin-right:10px}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<h1>Svelte+SvelteKit+PostgreSQL Starter Kit</h1>\\n<slot />\\n\\n<hr/>\\n<a href=\\"/\\">Home</a>\\n\\n<style>\\n    a {\\n        margin-top: 20px;\\n        margin-right: 10px;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAOI,eAAE,CACE,UAAU,CAAE,IAAI,CAChB,YAAY,CAAE,IAClB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-lp5ofj">Svelte+SvelteKit+PostgreSQL Starter Kit</h1> ${slots.default ? slots.default({}) : ``} <hr> <a href="/" class="svelte-d328gi" data-svelte-h="svelte-5a0zws">Home</a>`;
});
export {
  Layout as default
};
