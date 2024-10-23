import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: ".row.svelte-xyyea4{display:flex;background-color:#eee}.id.svelte-xyyea4,.shipname.svelte-xyyea4,.size.svelte-xyyea4,.date.svelte-xyyea4{margin:5px}.id.svelte-xyyea4{font-weight:bold;flex:1}.size.svelte-xyyea4{text-align:right;flex:0 0 50px}.date.svelte-xyyea4{flex:0 0 100px;text-align:center}.shipname.svelte-xyyea4{flex:1;color:#999}",
  map: '{"version":3,"file":"ContainerSummaryRow.svelte","sources":["ContainerSummaryRow.svelte"],"sourcesContent":["<script>\\n\\texport let container;\\n<\/script>\\n\\n<div class=\\"row\\">\\n\\t<div class=\\"id\\">{container.containernumber}</div>\\n\\t<div class=\\"shipname\\">{container.nameofship}</div>\\n\\t<div class=\\"date\\">{container.datecontainershipped}</div>\\n\\t<div class=\\"size\\">{container.containersize}</div>\\n</div>\\n\\n<style>\\n\\t.row {\\n\\t\\tdisplay: flex;\\n\\t\\tbackground-color: #eee;\\n\\t}\\n\\t.id,\\n\\t.shipname,\\n\\t.size,\\n\\t.date {\\n\\t\\tmargin: 5px;\\n\\t}\\n\\t.id {\\n\\t\\tfont-weight: bold;\\n\\t\\tflex: 1;\\n\\t}\\n\\t.size {\\n\\t\\ttext-align: right;\\n\\t\\tflex: 0 0 50px;\\n\\t}\\n\\t.date {\\n\\t\\tflex: 0 0 100px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\t.shipname {\\n\\t\\tflex: 1;\\n\\t\\tcolor: #999;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAYC,kBAAK,CACJ,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,IACnB,CACA,iBAAG,CACH,uBAAS,CACT,mBAAK,CACL,mBAAM,CACL,MAAM,CAAE,GACT,CACA,iBAAI,CACH,WAAW,CAAE,IAAI,CACjB,IAAI,CAAE,CACP,CACA,mBAAM,CACL,UAAU,CAAE,KAAK,CACjB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IACX,CACA,mBAAM,CACL,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CACf,UAAU,CAAE,MACb,CACA,uBAAU,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IACR"}'
};
const ContainerSummaryRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { container } = $$props;
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  $$result.css.add(css$1);
  return `<div class="row svelte-xyyea4"><div class="id svelte-xyyea4">${escape(container.containernumber)}</div> <div class="shipname svelte-xyyea4">${escape(container.nameofship)}</div> <div class="date svelte-xyyea4">${escape(container.datecontainershipped)}</div> <div class="size svelte-xyyea4">${escape(container.containersize)}</div> </div>`;
});
const css = {
  code: ".row.svelte-1ert4cz{margin:5px;border:1px solid black}",
  map: `{"version":3,"file":"ContainerTable.svelte","sources":["ContainerTable.svelte"],"sourcesContent":["<script>\\n    import ContainerSummaryRow from './ContainerSummaryRow.svelte';\\n\\texport let containers = [];\\n    export let onContainerClicked = () => {};\\n<\/script>\\n\\n<h3>A PseudoTable Component</h3>\\n\\n<p>This is an example of Svelte containers, NOT the best way to create a simple table. It probably should be done in the ContainerTable component so that it it is easy to add callbacks for people clicking the shipname or id or...</p>\\n\\n<p>Notice that tab order is set correctly with the index into the container object.</p>\\n{#each containers as container, ix}\\n\\t<div\\n        role=\\"button\\"\\n\\t\\ttabindex={ix+1}\\n\\t\\ton:keydown={(e) => e.key === 'Enter' && onContainerClicked(container, e)}\\n\\t\\ton:click={(e) => onContainerClicked(container, e)}>\\n\\n        <div class=row>\\n            <ContainerSummaryRow {container}/>\\n        </div>\\n\\t</div>\\n{/each}\\n\\n<style>\\n    .row {\\n        margin: 5px;\\n        border: 1px solid black;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAyBI,mBAAK,CACD,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACtB"}`
};
const ContainerTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { containers = [] } = $$props;
  let { onContainerClicked = () => {
  } } = $$props;
  if ($$props.containers === void 0 && $$bindings.containers && containers !== void 0)
    $$bindings.containers(containers);
  if ($$props.onContainerClicked === void 0 && $$bindings.onContainerClicked && onContainerClicked !== void 0)
    $$bindings.onContainerClicked(onContainerClicked);
  $$result.css.add(css);
  return `<h3 data-svelte-h="svelte-1bmvfts">A PseudoTable Component</h3> <p data-svelte-h="svelte-1jt4pbm">This is an example of Svelte containers, NOT the best way to create a simple table. It probably should be done in the ContainerTable component so that it it is easy to add callbacks for people clicking the shipname or id or...</p> <p data-svelte-h="svelte-18yfsl">Notice that tab order is set correctly with the index into the container object.</p> ${each(containers, (container, ix) => {
    return `<div role="button"${add_attribute("tabindex", ix + 1, 0)}><div class="row svelte-1ert4cz">${validate_component(ContainerSummaryRow, "ContainerSummaryRow").$$render($$result, { container }, {}, {})}</div> </div>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let clickedContainerNumber = "none";
  function containerClicked(container) {
    console.log("Container clicked:", container.containernumber);
    if (container) {
      clickedContainerNumber = container.containernumber;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-z0eir">Leaning into Svelte&#39;s approach: Components for UI elements</h1> ${validate_component(ContainerTable, "ContainerTable").$$render(
    $$result,
    {
      containers: data.containers,
      onContainerClicked: containerClicked
    },
    {},
    {}
  )} <span class="i">Last container clicked: ${escape(clickedContainerNumber)}</span>`;
});
export {
  Page as default
};
