import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".id.svelte-1huuvy9{margin-right:10px;font-weight:bold}.name.svelte-1huuvy9{color:#999}.i.svelte-1huuvy9{font-style:italic}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\texport let data;\\n\\t//console.log({data});\\n\\n<\/script>\\n\\n<h1>Fetched from Database</h1>\\n\\n{#each data.containers as container}\\n\\t<div>\\n\\t\\t<span class=\\"id\\">{container.containernumber}</span>\\n\\t\\t<span class=\\"name\\">{container.nameofship}</span>\\n\\t\\t<span class=\\"size\\">{container.containersize}</span>\\n\\t\\t<span class=\\"date\\">{container.datecontainershipped}</span>\\n\\t</div>\\n{/each}\\n\\n<span class=i>(database lives in PostgreSQL)</span>\\n\\n<style>\\n\\t.id {\\n\\t\\tmargin-right: 10px;\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\t.name {\\n\\t\\tcolor: #999;\\n\\t}\\n\\t.i {\\n\\t\\tfont-style: italic;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoBC,kBAAI,CACH,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IACd,CACA,oBAAM,CACL,KAAK,CAAE,IACR,CACA,iBAAG,CACF,UAAU,CAAE,MACb"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-1gxw4ca">Fetched from Database</h1> ${each(data.containers, (container) => {
    return `<div><span class="id svelte-1huuvy9">${escape(container.containernumber)}</span> <span class="name svelte-1huuvy9">${escape(container.nameofship)}</span> <span class="size">${escape(container.containersize)}</span> <span class="date">${escape(container.datecontainershipped)}</span> </div>`;
  })} <span class="i svelte-1huuvy9" data-svelte-h="svelte-13gl9g8">(database lives in PostgreSQL)</span>`;
});
export {
  Page as default
};
