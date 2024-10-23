import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const css = {
  code: ".note.svelte-1tzj8ef{font-style:italic}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { goto } from '$app/navigation';\\n<\/script>\\n\\n\\n<h1>Welcome to simple Client/DB site</h1>\\n<p>Bits and pieces to get started in Svelte and Sveltekit</p>\\n<p>SvelteKit using PostgreSQL for a database</p>\\n\\n<p>Step 1: See how to use a PostgreSQL database</p>\\n<span class=note>(For this to work, you MUST create a file called .env at the project root, and it must have the following parameter in: \\"PGCONNECT\\")</span>\\n<br/>\\n<button on:click={() => {goto('/fromDB')}}>Use Database</button>\\n\\n\\n<p>Step 2: See how to create Svelte components</p>\\n<span class=note>(uses db, so create the .env file as above)</span>\\n<br/>\\n<button on:click={() => {goto('/fromDBandComponents')}}>Use Components</button>\\n\\n\\n<style>\\n    .note {\\n        font-style: italic;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAsBI,oBAAM,CACF,UAAU,CAAE,MAChB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-1xbl4qy">Welcome to simple Client/DB site</h1> <p data-svelte-h="svelte-13051py">Bits and pieces to get started in Svelte and Sveltekit</p> <p data-svelte-h="svelte-1wn4p76">SvelteKit using PostgreSQL for a database</p> <p data-svelte-h="svelte-1uclxdu">Step 1: See how to use a PostgreSQL database</p> <span class="note svelte-1tzj8ef" data-svelte-h="svelte-1ng031b">(For this to work, you MUST create a file called .env at the project root, and it must have the following parameter in: &quot;PGCONNECT&quot;)</span> <br> <button data-svelte-h="svelte-zhnanb">Use Database</button> <p data-svelte-h="svelte-1q9ypjx">Step 2: See how to create Svelte components</p> <span class="note svelte-1tzj8ef" data-svelte-h="svelte-h0argj">(uses db, so create the .env file as above)</span> <br> <button data-svelte-h="svelte-1vl40w9">Use Components</button>`;
});
export {
  Page as default
};
