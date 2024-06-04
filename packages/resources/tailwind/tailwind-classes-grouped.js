let tailwindCSSGrouped = [
  // MARK: Layout

  /* Aspect Ratio */
  ["aspect-auto","aspect-video","aspect-square"],

  /* Container */
  ["container","mx-auto","max-width","min-width"],

  /* Columns */
  ["columns-1","columns-2","columns-3","columns-4","columns-5","columns-6","columns-7","columns-8","columns-9","columns-10","columns-11","columns-12","columns-auto","columns-3xs","columns-2xs","columns-xs","columns-sm","columns-md","columns-lg","columns-xl","columns-2xl","columns-3xl","columns-4xl","columns-5xl","columns-6xl","columns-7xl"],


  /* Break After */
  ["break-after-auto","break-after-avoid","break-after-all","break-after-avoid-page","break-after-page","break-after-left","break-after-right","break-after-column"],

  /* Break Before */
  ["break-before-auto","break-before-avoid","break-before-all","break-before-avoid-page","break-before-page","break-before-left","break-before-right","break-before-column"],

  /* Break Inside */
  ["break-inside-auto","break-inside-avoid","break-inside-avoid-page","break-inside-avoid-column"],

  /* Box Decoration Break */
  ["box-decoration-clone","box-decoration-slice"],

  /* Box Sizing */
  ["box-border","box-content"],

  /* Display */
  ["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],

  /* Floats */
  ["float-right","float-left","float-none"],

  /* Clear */
  ["clear-left","clear-right","clear-both","clear-none"],

  /* Isolation */
  ["isolate","isolation-auto"],

  /* Object Fit */
  ["object-contain","object-cover","object-fill","object-none","object-scale-down"],

  /* Object Position */
  ["object-bottom","object-center","object-left","object-left-bottom","object-left-top","object-right","object-right-bottom","object-right-top","object-top"],

  /* Overflow */
  ["overflow-auto","overflow-hidden","overflow-clip","overflow-visible","overflow-scroll","overflow-x-auto","overflow-y-auto","overflow-x-hidden","overflow-y-hidden","overflow-x-clip","overflow-y-clip","overflow-x-visible","overflow-y-visible","overflow-x-scroll","overflow-y-scroll"],

  /* Overscroll Behavior */
  ["overscroll-auto","overscroll-contain","overscroll-none","overscroll-y-auto","overscroll-y-contain","overscroll-y-none","overscroll-x-auto","overscroll-x-contain","overscroll-x-none"],

  /* Position */
  ["static","fixed","absolute","relative","sticky"],


  /* Top / Right / Bottom / Left */
  [
    "inset-px","inset-x-px","inset-y-px","start-px","end-px","top-px","right-px","bottom-px","left-px",
    "inset-0","inset-x-0","inset-y-0","start-0","end-0","top-0","right-0","bottom-0","left-0",
    "inset-0.5","inset-x-0.5","inset-y-0.5","start-0.5","end-0.5","top-0.5","right-0.5","bottom-0.5","left-0.5",
    "inset-1","inset-x-1","inset-y-1","start-1","end-1","top-1","right-1","bottom-1","left-1",
    "inset-1.5","inset-x-1.5","inset-y-1.5","start-1.5","end-1.5","top-1.5","right-1.5","bottom-1.5","left-1.5",
    "inset-2","inset-x-2","inset-y-2","start-2","end-2","top-2","right-2","bottom-2","left-2",
    "inset-2.5","inset-x-2.5","inset-y-2.5","start-2.5","end-2.5","top-2.5","right-2.5","bottom-2.5","left-2.5",
    "inset-3","inset-x-3","inset-y-3","start-3","end-3","top-3","right-3","bottom-3","left-3",
    "inset-3.5","inset-x-3.5","inset-y-3.5","start-3.5","end-3.5","top-3.5","right-3.5","bottom-3.5","left-3.5",
    "inset-4","inset-x-4","inset-y-4","start-4","end-4","top-4","right-4","bottom-4","left-4",
    "inset-5","inset-x-5","inset-y-5","start-5","end-5","top-5","right-5","bottom-5","left-5",
    "inset-6","inset-x-6","inset-y-6","start-6","end-6","top-6","right-6","bottom-6","left-6",
    "inset-7","inset-x-7","inset-y-7","start-7","end-7","top-7","right-7","bottom-7","left-7",
    "inset-8","inset-x-8","inset-y-8","start-8","end-8","top-8","right-8","bottom-8","left-8",
    "inset-9","inset-x-9","inset-y-9","start-9","end-9","top-9","right-9","bottom-9","left-9",
    "inset-10","inset-x-10","inset-y-10","start-10","end-10","top-10","right-10","bottom-10","left-10",
    "inset-11","inset-x-11","inset-y-11","start-11","end-11","top-11","right-11","bottom-11","left-11",
    "inset-12","inset-x-12","inset-y-12","start-12","end-12","top-12","right-12","bottom-12","left-12",
    "inset-14","inset-x-14","inset-y-14","start-14","end-14","top-14","right-14","bottom-14","left-14",
    "inset-16","inset-x-16","inset-y-16","start-16","end-16","top-16","right-16","bottom-16","left-16",
    "inset-20","inset-x-20","inset-y-20","start-20","end-20","top-20","right-20","bottom-20","left-20",
    "inset-24","inset-x-24","inset-y-24","start-24","end-24","top-24","right-24","bottom-24","left-24",
    "inset-28","inset-x-28","inset-y-28","start-28","end-28","top-28","right-28","bottom-28","left-28",
    "inset-32","inset-x-32","inset-y-32","start-32","end-32","top-32","right-32","bottom-32","left-32",
    "inset-36","inset-x-36","inset-y-36","start-36","end-36","top-36","right-36","bottom-36","left-36",
    "inset-44","inset-x-44","inset-y-44","start-44","end-44","top-44","right-44","bottom-44","left-44",
    "inset-48","inset-x-48","inset-y-48","start-48","end-48","top-48","right-48","bottom-48","left-48",
    "inset-52","inset-x-52","inset-y-52","start-52","end-52","top-52","right-52","bottom-52","left-52",
    "inset-56","inset-x-56","inset-y-56","start-56","end-56","top-56","right-56","bottom-56","left-56",
    "inset-60","inset-x-60","inset-y-60","start-60","end-60","top-60","right-60","bottom-60","left-60",
    "inset-64","inset-x-64","inset-y-64","start-64","end-64","top-64","right-64","bottom-64","left-64",
    "inset-72","inset-x-72","inset-y-72","start-72","end-72","top-72","right-72","bottom-72","left-72",
    "inset-80","inset-x-80","inset-y-80","start-80","end-80","top-80","right-80","bottom-80","left-80",
    "inset-96","inset-x-96","inset-y-96","start-96","end-96","top-96","right-96","bottom-96","left-96",

    "inset-auto","inset-1/2","inset-1/3","inset-2/3","inset-1/4","inset-2/4","inset-3/4","inset-full",

    "inset-x-auto","inset-x-1/2","inset-x-1/3","inset-x-2/3","inset-x-1/4","inset-x-2/4","inset-x-3/4","inset-x-full",

    "inset-y-auto","inset-y-1/2","inset-y-1/3","inset-y-2/3","inset-y-1/4","inset-y-2/4","inset-y-3/4","inset-y-full",

    "start-auto","start-1/2","start-1/3","start-2/3","start-1/4","start-2/4","start-3/4","start-full",

    "end-auto","end-1/2","end-1/3","end-2/3","end-1/4","end-2/4","end-3/4","end-full",

    "top-auto","top-1/2","top-1/3","top-2/3","top-1/4","top-2/4","top-3/4","top-full",

    "right-auto","right-1/2","right-1/3","right-2/3","right-1/4","right-2/4","right-3/4","right-full",

    "bottom-auto","bottom-1/2","bottom-1/3","bottom-2/3","bottom-1/4","bottom-2/4","bottom-3/4","bottom-full",

    "left-auto","left-1/2","left-1/3","left-2/3","left-1/4","left-2/4","left-3/4","left-full"
  ],

  /* Visibility */
  ["visible","invisible","collapse"],

  /* Z-Index */
  ["z-0","z-10","z-20","z-30","z-40","z-50","z-auto"],

  // MARK: Flexbox & Grid

  /* Flex Basis */
  [
    "basis-0","basis-1","basis-2","basis-3","basis-4","basis-5","basis-6","basis-7","basis-8","basis-9",
    "basis-10","basis-11","basis-12","basis-14","basis-16","basis-20","basis-24","basis-28","basis-32","basis-36",
    "basis-40","basis-44","basis-48","basis-52","basis-56","basis-60","basis-64","basis-72","basis-80","basis-96",
    "basis-auto","basis-px","basis-0.5","basis-1.5","basis-2.5","basis-3.5",
    "basis-1/2","basis-1/3","basis-2/3","basis-1/4","basis-2/4","basis-3/4",
    "basis-1/5","basis-2/5","basis-3/5","basis-4/5","basis-1/6","basis-2/6","basis-3/6","basis-4/6","basis-5/6",
    "basis-1/12","basis-2/12","basis-3/12","basis-4/12","basis-5/12","basis-6/12","basis-7/12","basis-8/12","basis-9/12","basis-10/12","basis-11/12",
    "basis-full"
  ],

  /* Flex Direction */
  ["flex-row","flex-row-reverse","flex-col","flex-col-reverse"],

  /* Flex Wrap */
  ["flex-wrap","flex-wrap-reverse","flex-nowrap"],

  /* Flex */
  ["flex-1","flex-auto","flex-initial","flex-none"],

  /* Flex Grow */
  ["grow","grow-0"],

  /* Flex Shrink */
  ["shrink","shrink-0"],

  /* Order */
  [
    "order-1","order-2","order-3","order-4","order-5","order-6","order-7","order-8","order-9",
    "order-10","order-11","order-12","order-first","order-last","order-none"
  ],

  /* Grid Template Columns */
  ["grid-cols-1","grid-cols-2","grid-cols-3","grid-cols-4","grid-cols-5","grid-cols-6","grid-cols-7","grid-cols-8","grid-cols-9","grid-cols-10","grid-cols-11","grid-cols-12","grid-cols-none"],

  /* Grid Column Start / End */
  [
    "col-auto","col-span-1","col-span-2","col-span-3","col-span-4","col-span-5","col-span-6","col-span-7","col-span-8","col-span-9",
    "col-span-10","col-span-11","col-span-12","col-span-full",
    "col-start-1","col-start-2","col-start-3","col-start-4","col-start-5","col-start-6","col-start-7","col-start-8","col-start-9",
    "col-start-10","col-start-11","col-start-12","col-start-13","col-start-auto",
    "col-end-1","col-end-2","col-end-3","col-end-4","col-end-5","col-end-6","col-end-7","col-end-8","col-end-9",
    "col-end-10","col-end-11","col-end-12","col-end-13","col-end-auto"
  ],


  /* Grid Template Rows */
  ["grid-rows-1","grid-rows-2","grid-rows-3","grid-rows-4","grid-rows-5","grid-rows-6","grid-rows-none"],

  /* Grid Row Start / End */
  [
    "row-auto","row-span-1","row-span-2","row-span-3","row-span-4","row-span-5","row-span-6","row-span-full",
    "row-start-1","row-start-2","row-start-3","row-start-4","row-start-5","row-start-6","row-start-7","row-start-auto",
    "row-end-1","row-end-2","row-end-3","row-end-4","row-end-5","row-end-6","row-end-7","row-end-auto"
  ],

  /* Grid Auto Flow */
  ["grid-flow-row","grid-flow-col","grid-flow-dense","grid-flow-row-dense","grid-flow-col-dense"],

  /* Grid Auto Columns */
  ["auto-cols-auto","auto-cols-min","auto-cols-max","auto-cols-fr"],

  /* Grid Auto Rows */
  ["auto-rows-auto","auto-rows-min","auto-rows-max","auto-rows-fr"],

  /* Gap */
  [
    "gap-0","gap-px","gap-0.5","gap-1","gap-1.5","gap-2","gap-2.5","gap-3","gap-3.5","gap-4","gap-5","gap-6","gap-7","gap-8","gap-9","gap-10","gap-11","gap-12",
    "gap-14","gap-16","gap-20","gap-24","gap-28","gap-32","gap-36","gap-40","gap-44","gap-48","gap-52","gap-56","gap-60","gap-64","gap-72","gap-80","gap-96",

    "gap-x-0","gap-x-px","gap-x-0.5","gap-x-1","gap-x-1.5","gap-x-2","gap-x-2.5","gap-x-3","gap-x-3.5","gap-x-4","gap-x-5","gap-x-6","gap-x-7","gap-x-8","gap-x-9","gap-x-10","gap-x-11","gap-x-12",
    "gap-x-14","gap-x-16","gap-x-20","gap-x-24","gap-x-28","gap-x-32","gap-x-36","gap-x-40","gap-x-44","gap-x-48","gap-x-52","gap-x-56","gap-x-60","gap-x-64","gap-x-72","gap-x-80","gap-x-96",

    "gap-y-0","gap-y-px","gap-y-0.5","gap-y-1","gap-y-1.5","gap-y-2","gap-y-2.5","gap-y-3","gap-y-3.5","gap-y-4","gap-y-5","gap-y-6","gap-y-7","gap-y-8","gap-y-9","gap-y-10","gap-y-11","gap-y-12",
    "gap-y-14","gap-y-16","gap-y-20","gap-y-24","gap-y-28","gap-y-32","gap-y-36","gap-y-40","gap-y-44","gap-y-48","gap-y-52","gap-y-56","gap-y-60","gap-y-64","gap-y-72","gap-y-80","gap-y-96"
  ],


  /* Justify Content */
  ["justify-normal","justify-start","justify-end","justify-center","justify-between","justify-around","justify-evenly","justify-stretch"],

  /* Justify Items */
  ["justify-items-start","justify-items-end","justify-items-center","justify-items-stretch"],

  /* Justify Self */
  ["justify-self-auto","justify-self-start","justify-self-end","justify-self-center","justify-self-stretch"],

  /* Align Content */
  ["content-normal","content-center","content-start","content-end","content-between","content-around","content-evenly","content-baseline","content-stretch"],

  /* Align Items */
  ["items-start","items-end","items-center","items-baseline","items-stretch"],

  /* Align Self */
  ["self-auto","self-start","self-end","self-center","self-stretch","self-baseline"],

  /* Place Content */
  ["place-content-center","place-content-start","place-content-end","place-content-between","place-content-around","place-content-evenly","place-content-baseline","place-content-stretch"],

  /* Place Items */
  ["place-items-start","place-items-end","place-items-center","place-items-baseline","place-items-stretch"],

  /* Place Self */
  ["place-self-auto","place-self-start","place-self-end","place-self-center","place-self-stretch"],


  // MARK: Spacing

  /* Padding */

  [
    "p-0","p-px","p-0.5","p-1","p-1.5","p-2","p-2.5","p-3","p-3.5","p-4","p-5","p-6","p-7","p-8","p-9","p-10","p-11","p-12",
    "p-14","p-16","p-20","p-24","p-28","p-32","p-36","p-40","p-44","p-48","p-52","p-56","p-60","p-64","p-72","p-80","p-96",

    "px-0","px-px","px-0.5","px-1","px-1.5","px-2","px-2.5","px-3","px-3.5","px-4","px-5","px-6","px-7","px-8","px-9","px-10","px-11","px-12",
    "px-14","px-16","px-20","px-24","px-28","px-32","px-36","px-40","px-44","px-48","px-52","px-56","px-60","px-64","px-72","px-80","px-96",

    "py-0","py-px","py-0.5","py-1","py-1.5","py-2","py-2.5","py-3","py-3.5","py-4","py-5","py-6","py-7","py-8","py-9","py-10","py-11","py-12",
    "py-14","py-16","py-20","py-24","py-28","py-32","py-36","py-40","py-44","py-48","py-52","py-56","py-60","py-64","py-72","py-80","py-96",

    "ps-0","ps-px","ps-0.5","ps-1","ps-1.5","ps-2","ps-2.5","ps-3","ps-3.5","ps-4","ps-5","ps-6","ps-7","ps-8","ps-9","ps-10","ps-11","ps-12",
    "ps-14","ps-16","ps-20","ps-24","ps-28","ps-32","ps-36","ps-40","ps-44","ps-48","ps-52","ps-56","ps-60","ps-64","ps-72","ps-80","ps-96",

    "pe-0","pe-px","pe-0.5","pe-1","pe-1.5","pe-2","pe-2.5","pe-3","pe-3.5","pe-4","pe-5","pe-6","pe-7","pe-8","pe-9","pe-10","pe-11","pe-12",
    "pe-14","pe-16","pe-20","pe-24","pe-28","pe-32","pe-36","pe-40","pe-44","pe-48","pe-52","pe-56","pe-60","pe-64","pe-72","pe-80","pe-96",

    "pt-0","pt-px","pt-0.5","pt-1","pt-1.5","pt-2","pt-2.5","pt-3","pt-3.5","pt-4","pt-5","pt-6","pt-7","pt-8","pt-9","pt-10","pt-11","pt-12",
    "pt-14","pt-16","pt-20","pt-24","pt-28","pt-32","pt-36","pt-40","pt-44","pt-48","pt-52","pt-56","pt-60","pt-64","pt-72","pt-80","pt-96",

    "pr-0","pr-px","pr-0.5","pr-1","pr-1.5","pr-2","pr-2.5","pr-3","pr-3.5","pr-4","pr-5","pr-6","pr-7","pr-8","pr-9","pr-10","pr-11","pr-12",
    "pr-14","pr-16","pr-20","pr-24","pr-28","pr-32","pr-36","pr-40","pr-44","pr-48","pr-52","pr-56","pr-60","pr-64","pr-72","pr-80","pr-96",

    "pb-0","pb-px","pb-0.5","pb-1","pb-1.5","pb-2","pb-2.5","pb-3","pb-3.5","pb-4","pb-5","pb-6","pb-7","pb-8","pb-9","pb-10","pb-11","pb-12",
    "pb-14","pb-16","pb-20","pb-24","pb-28","pb-32","pb-36","pb-40","pb-44","pb-48","pb-52","pb-56","pb-60","pb-64","pb-72","pb-80","pb-96",

    "pl-0","pl-px","pl-0.5","pl-1","pl-1.5","pl-2","pl-2.5","pl-3","pl-3.5","pl-4","pl-5","pl-6","pl-7","pl-8","pl-9","pl-10","pl-11","pl-12",
    "pl-14","pl-16","pl-20","pl-24","pl-28","pl-32","pl-36","pl-40","pl-44","pl-48","pl-52","pl-56","pl-60","pl-64","pl-72","pl-80","pl-96"
  ],

  /* Margin */
  [
    "m-0","m-px","m-0.5","m-1","m-1.5","m-2","m-2.5","m-3","m-3.5","m-4","m-5","m-6","m-7","m-8","m-9","m-10","m-11","m-12",
    "m-14","m-16","m-20","m-24","m-28","m-32","m-36","m-40","m-44","m-48","m-52","m-56","m-60","m-64","m-72","m-80","m-96",

    "mx-0","mx-px","mx-0.5","mx-1","mx-1.5","mx-2","mx-2.5","mx-3","mx-3.5","mx-4","mx-5","mx-6","mx-7","mx-8","mx-9","mx-10","mx-11","mx-12",
    "mx-14","mx-16","mx-20","mx-24","mx-28","mx-32","mx-36","mx-40","mx-44","mx-48","mx-52","mx-56","mx-60","mx-64","mx-72","mx-80","mx-96",

    "my-0","my-px","my-0.5","my-1","my-1.5","my-2","my-2.5","my-3","my-3.5","my-4","my-5","my-6","my-7","my-8","my-9","my-10","my-11","my-12",
    "my-14","my-16","my-20","my-24","my-28","my-32","my-36","my-40","my-44","my-48","my-52","my-56","my-60","my-64","my-72","my-80","my-96",

    "ms-0","ms-px","ms-0.5","ms-1","ms-1.5","ms-2","ms-2.5","ms-3","ms-3.5","ms-4","ms-5","ms-6","ms-7","ms-8","ms-9","ms-10","ms-11","ms-12",
    "ms-14","ms-16","ms-20","ms-24","ms-28","ms-32","ms-36","ms-40","ms-44","ms-48","ms-52","ms-56","ms-60","ms-64","ms-72","ms-80","ms-96",

    "me-0","me-px","me-0.5","me-1","me-1.5","me-2","me-2.5","me-3","me-3.5","me-4","me-5","me-6","me-7","me-8","me-9","me-10","me-11","me-12",
    "me-14","me-16","me-20","me-24","me-28","me-32","me-36","me-40","me-44","me-48","me-52","me-56","me-60","me-64","me-72","me-80","me-96",

    "mt-0","mt-px","mt-0.5","mt-1","mt-1.5","mt-2","mt-2.5","mt-3","mt-3.5","mt-4","mt-5","mt-6","mt-7","mt-8","mt-9","mt-10","mt-11","mt-12",
    "mt-14","mt-16","mt-20","mt-24","mt-28","mt-32","mt-36","mt-40","mt-44","mt-48","mt-52","mt-56","mt-60","mt-64","mt-72","mt-80","mt-96",

    "mr-0","mr-px","mr-0.5","mr-1","mr-1.5","mr-2","mr-2.5","mr-3","mr-3.5","mr-4","mr-5","mr-6","mr-7","mr-8","mr-9","mr-10","mr-11","mr-12",
    "mr-14","mr-16","mr-20","mr-24","mr-28","mr-32","mr-36","mr-40","mr-44","mr-48","mr-52","mr-56","mr-60","mr-64","mr-72","mr-80","mr-96",

    "mb-0","mb-px","mb-0.5","mb-1","mb-1.5","mb-2","mb-2.5","mb-3","mb-3.5","mb-4","mb-5","mb-6","mb-7","mb-8","mb-9","mb-10","mb-11","mb-12",
    "mb-14","mb-16","mb-20","mb-24","mb-28","mb-32","mb-36","mb-40","mb-44","mb-48","mb-52","mb-56","mb-60","mb-64","mb-72","mb-80","mb-96",

    "ml-0","ml-px","ml-0.5","ml-1","ml-1.5","ml-2","ml-2.5","ml-3","ml-3.5","ml-4","ml-5","ml-6","ml-7","ml-8","ml-9","ml-10","ml-11","ml-12",
    "ml-14","ml-16","ml-20","ml-24","ml-28","ml-32","ml-36","ml-40","ml-44","ml-48","ml-52","ml-56","ml-60","ml-64","ml-72","ml-80","ml-96"
  ],

  /* Space Between */
  [
    "space-x-0","space-x-px","space-x-0.5","space-x-1","space-x-1.5","space-x-2","space-x-2.5","space-x-3","space-x-3.5","space-x-4","space-x-5","space-x-6","space-x-7","space-x-8","space-x-9","space-x-10","space-x-11","space-x-12",
    "space-x-14","space-x-16","space-x-20","space-x-24","space-x-28","space-x-32","space-x-36","space-x-40","space-x-44","space-x-48","space-x-52","space-x-56","space-x-60","space-x-64","space-x-72","space-x-80","space-x-96",

    "space-y-0","space-y-px","space-y-0.5","space-y-1","space-y-1.5","space-y-2","space-y-2.5","space-y-3","space-y-3.5","space-y-4","space-y-5","space-y-6","space-y-7","space-y-8","space-y-9","space-y-10","space-y-11","space-y-12",
    "space-y-14","space-y-16","space-y-20","space-y-24","space-y-28","space-y-32","space-y-36","space-y-40","space-y-44","space-y-48","space-y-52","space-y-56","space-y-60","space-y-64","space-y-72","space-y-80","space-y-96",

    "space-x-reverse","space-y-reverse"
  ],


  // MARK: Sizing

  /* Width */
  [
    "w-0","w-px","w-0.5","w-1","w-1.5","w-2","w-2.5","w-3","w-3.5","w-4","w-5","w-6","w-7","w-8","w-9","w-10","w-11","w-12",
    "w-14","w-16","w-20","w-24","w-28","w-32","w-36","w-40","w-44","w-48","w-52","w-56","w-60","w-64","w-72","w-80","w-96",

    "w-1/2","w-1/3","w-2/3","w-1/4","w-2/4","w-3/4",
    "w-1/5","w-2/5","w-3/5","w-4/5","w-1/6","w-2/6","w-3/6","w-4/6","w-5/6",
    "w-1/12","w-2/12","w-3/12","w-4/12","w-5/12","w-6/12","w-7/12","w-8/12","w-9/12","w-10/12","w-11/12",

    "w-auto","w-full","w-screen","w-min","w-max","w-fit"
  ],

  /* Min-Width */
  ["min-w-0","min-w-full","min-w-min","min-w-max","min-w-fit"],

  /* Max-Width */
  [
    "max-w-0","max-w-none","max-w-xs","max-w-sm","max-w-md","max-w-lg","max-w-xl","max-w-2xl","max-w-3xl","max-w-4xl","max-w-5xl","max-w-6xl","max-w-7xl",
    "max-w-full","max-w-min","max-w-max","max-w-fit","max-w-prose","max-w-screen-sm","max-w-screen-md","max-w-screen-lg","max-w-screen-xl","max-w-screen-2xl"
  ],

  /* Height */
  [
    "h-0","h-px","h-0.5","h-1","h-1.5","h-2","h-2.5","h-3","h-3.5","h-4","h-5","h-6","h-7","h-8","h-9","h-10","h-11","h-12",
    "h-14","h-16","h-20","h-24","h-28","h-32","h-36","h-40","h-44","h-48","h-52","h-56","h-60","h-64","h-72","h-80","h-96",

    "h-1/2","h-1/3","h-2/3","h-1/4","h-2/4","h-3/4",
    "h-1/5","h-2/5","h-3/5","h-4/5","h-1/6","h-2/6","h-3/6","h-4/6","h-5/6",

    "h-auto","h-full","h-screen","h-min","h-max","h-fit"
  ],

  /* Min-Height */
  ["min-h-0","min-h-full","min-h-screen","min-h-min","min-h-max","min-h-fit"],

  /* Max-Height */
  [
    "max-h-0","max-h-px","max-h-0.5","max-h-1","max-h-1.5","max-h-2","max-h-2.5","max-h-3","max-h-3.5","max-h-4","max-h-5","max-h-6","max-h-7","max-h-8","max-h-9","max-h-10","max-h-11","max-h-12",
    "max-h-14","max-h-16","max-h-20","max-h-24","max-h-28","max-h-32","max-h-36","max-h-40","max-h-44","max-h-48","max-h-52","max-h-56","max-h-60","max-h-64","max-h-72","max-h-80","max-h-96",

    "max-h-none","max-h-full","max-h-screen","max-h-min","max-h-max","max-h-fit"
  ],


  // MARK: Typography

  /* Font Family */
  ["font-sans","font-serif","font-mono"],

  /* Font Size */
  ["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl","text-6xl","text-7xl","text-8xl","text-9xl"],

  /* Font Smoothing */
  ["antialiased","subpixel-antialiased"],

  /* Font Style */
  ["italic","not-italic"],

  /* Font Weight */
  ["font-thin","font-extralight","font-light","font-normal","font-medium","font-semibold","font-bold","font-extrabold","font-black"],

  /* Font Variant Numeric */
  ["normal-nums","ordinal","slashed-zero","lining-nums","oldstyle-nums","proportional-nums","tabular-nums","diagonal-fractions","stacked-fractions"],

  /* Letter Spacing */
  ["tracking-tighter","tracking-tight","tracking-normal","tracking-wide","tracking-wider","tracking-widest"],

  /* Line Clamp */
  ["line-clamp-1","line-clamp-2","line-clamp-3","line-clamp-4","line-clamp-5","line-clamp-6","line-clamp-none"],

  /* Line Height */
  [
    "leading-3","leading-4","leading-5","leading-6","leading-7","leading-8","leading-9","leading-10",
    "leading-none","leading-tight","leading-snug","leading-normal","leading-relaxed","leading-loose"
  ],

  /* List Style Image */
  ["list-image-none"],

  /* List Style Position */
  ["list-inside","list-outside"],

  /* List Style Type */
  ["list-none","list-disc","list-decimal"],

  /* Text Align */
  ["text-left","text-center","text-right","text-justify","text-start","text-end"],

  /* Text Color */
  [
    "text-inherit","text-current","text-transparent","text-black","text-white",
    "text-slate-50","text-slate-100","text-slate-200","text-slate-300","text-slate-400","text-slate-500","text-slate-600","text-slate-700","text-slate-800","text-slate-900","text-slate-950",
    "text-gray-50","text-gray-100","text-gray-200","text-gray-300","text-gray-400","text-gray-500","text-gray-600","text-gray-700","text-gray-800","text-gray-900","text-gray-950",
    "text-zinc-50","text-zinc-100","text-zinc-200","text-zinc-300","text-zinc-400","text-zinc-500","text-zinc-600","text-zinc-700","text-zinc-800","text-zinc-900","text-zinc-950",
    "text-neutral-50","text-neutral-100","text-neutral-200","text-neutral-300","text-neutral-400","text-neutral-500","text-neutral-600","text-neutral-700","text-neutral-800","text-neutral-900","text-neutral-950",
    "text-stone-50","text-stone-100","text-stone-200","text-stone-300","text-stone-400","text-stone-500","text-stone-600","text-stone-700","text-stone-800","text-stone-900","text-stone-950",
    "text-red-50","text-red-100","text-red-200","text-red-300","text-red-400","text-red-500","text-red-600","text-red-700","text-red-800","text-red-900","text-red-950",
    "text-orange-50","text-orange-100","text-orange-200","text-orange-300","text-orange-400","text-orange-500","text-orange-600","text-orange-700","text-orange-800","text-orange-900","text-orange-950",
    "text-amber-50","text-amber-100","text-amber-200","text-amber-300","text-amber-400","text-amber-500","text-amber-600","text-amber-700","text-amber-800","text-amber-900","text-amber-950",
    "text-yellow-50","text-yellow-100","text-yellow-200","text-yellow-300","text-yellow-400","text-yellow-500","text-yellow-600","text-yellow-700","text-yellow-800","text-yellow-900","text-yellow-950",
    "text-lime-50","text-lime-100","text-lime-200","text-lime-300","text-lime-400","text-lime-500","text-lime-600","text-lime-700","text-lime-800","text-lime-900","text-lime-950",
    "text-green-50","text-green-100","text-green-200","text-green-300","text-green-400","text-green-500","text-green-600","text-green-700","text-green-800","text-green-900","text-green-950",
    "text-emerald-50","text-emerald-100","text-emerald-200","text-emerald-300","text-emerald-400","text-emerald-500","text-emerald-600","text-emerald-700","text-emerald-800","text-emerald-900","text-emerald-950",
    "text-teal-50","text-teal-100","text-teal-200","text-teal-300","text-teal-400","text-teal-500","text-teal-600","text-teal-700","text-teal-800","text-teal-900","text-teal-950",
    "text-cyan-50","text-cyan-100","text-cyan-200","text-cyan-300","text-cyan-400","text-cyan-500","text-cyan-600","text-cyan-700","text-cyan-800","text-cyan-900","text-cyan-950",
    "text-sky-50","text-sky-100","text-sky-200","text-sky-300","text-sky-400","text-sky-500","text-sky-600","text-sky-700","text-sky-800","text-sky-900","text-sky-950",
    "text-blue-50","text-blue-100","text-blue-200","text-blue-300","text-blue-400","text-blue-500","text-blue-600","text-blue-700","text-blue-800","text-blue-900","text-blue-950",
    "text-indigo-50","text-indigo-100","text-indigo-200","text-indigo-300","text-indigo-400","text-indigo-500","text-indigo-600","text-indigo-700","text-indigo-800","text-indigo-900","text-indigo-950",
    "text-violet-50","text-violet-100","text-violet-200","text-violet-300","text-violet-400","text-violet-500","text-violet-600","text-violet-700","text-violet-800","text-violet-900","text-violet-950",
    "text-purple-50","text-purple-100","text-purple-200","text-purple-300","text-purple-400","text-purple-500","text-purple-600","text-purple-700","text-purple-800","text-purple-900","text-purple-950",
    "text-fuchsia-50","text-fuchsia-100","text-fuchsia-200","text-fuchsia-300","text-fuchsia-400","text-fuchsia-500","text-fuchsia-600","text-fuchsia-700","text-fuchsia-800","text-fuchsia-900","text-fuchsia-950",
    "text-pink-50","text-pink-100","text-pink-200","text-pink-300","text-pink-400","text-pink-500","text-pink-600","text-pink-700","text-pink-800","text-pink-900","text-pink-950",
    "text-rose-50","text-rose-100","text-rose-200","text-rose-300","text-rose-400","text-rose-500","text-rose-600","text-rose-700","text-rose-800","text-rose-900","text-rose-950"
  ],

  /* Text Decoration */
  ["underline","overline","line-through","no-underline"],

  /* Text Decoration Color */
  [
    "decoration-inherit","decoration-current","decoration-transparent","decoration-black","decoration-white",
    "decoration-slate-50","decoration-slate-100","decoration-slate-200","decoration-slate-300","decoration-slate-400","decoration-slate-500","decoration-slate-600","decoration-slate-700","decoration-slate-800","decoration-slate-900","decoration-slate-950",
    "decoration-gray-50","decoration-gray-100","decoration-gray-200","decoration-gray-300","decoration-gray-400","decoration-gray-500","decoration-gray-600","decoration-gray-700","decoration-gray-800","decoration-gray-900","decoration-gray-950",
    "decoration-zinc-50","decoration-zinc-100","decoration-zinc-200","decoration-zinc-300","decoration-zinc-400","decoration-zinc-500","decoration-zinc-600","decoration-zinc-700","decoration-zinc-800","decoration-zinc-900","decoration-zinc-950",
    "decoration-neutral-50","decoration-neutral-100","decoration-neutral-200","decoration-neutral-300","decoration-neutral-400","decoration-neutral-500","decoration-neutral-600","decoration-neutral-700","decoration-neutral-800","decoration-neutral-900","decoration-neutral-950",
    "decoration-stone-50","decoration-stone-100","decoration-stone-200","decoration-stone-300","decoration-stone-400","decoration-stone-500","decoration-stone-600","decoration-stone-700","decoration-stone-800","decoration-stone-900","decoration-stone-950",
    "decoration-red-50","decoration-red-100","decoration-red-200","decoration-red-300","decoration-red-400","decoration-red-500","decoration-red-600","decoration-red-700","decoration-red-800","decoration-red-900","decoration-red-950",
    "decoration-orange-50","decoration-orange-100","decoration-orange-200","decoration-orange-300","decoration-orange-400","decoration-orange-500","decoration-orange-600","decoration-orange-700","decoration-orange-800","decoration-orange-900","decoration-orange-950",
    "decoration-amber-50","decoration-amber-100","decoration-amber-200","decoration-amber-300","decoration-amber-400","decoration-amber-500","decoration-amber-600","decoration-amber-700","decoration-amber-800","decoration-amber-900","decoration-amber-950",
    "decoration-yellow-50","decoration-yellow-100","decoration-yellow-200","decoration-yellow-300","decoration-yellow-400","decoration-yellow-500","decoration-yellow-600","decoration-yellow-700","decoration-yellow-800","decoration-yellow-900","decoration-yellow-950",
    "decoration-lime-50","decoration-lime-100","decoration-lime-200","decoration-lime-300","decoration-lime-400","decoration-lime-500","decoration-lime-600","decoration-lime-700","decoration-lime-800","decoration-lime-900","decoration-lime-950",
    "decoration-green-50","decoration-green-100","decoration-green-200","decoration-green-300","decoration-green-400","decoration-green-500","decoration-green-600","decoration-green-700","decoration-green-800","decoration-green-900","decoration-green-950",
    "decoration-emerald-50","decoration-emerald-100","decoration-emerald-200","decoration-emerald-300","decoration-emerald-400","decoration-emerald-500","decoration-emerald-600","decoration-emerald-700","decoration-emerald-800","decoration-emerald-900","decoration-emerald-950",
    "decoration-teal-50","decoration-teal-100","decoration-teal-200","decoration-teal-300","decoration-teal-400","decoration-teal-500","decoration-teal-600","decoration-teal-700","decoration-teal-800","decoration-teal-900","decoration-teal-950",
    "decoration-cyan-50","decoration-cyan-100","decoration-cyan-200","decoration-cyan-300","decoration-cyan-400","decoration-cyan-500","decoration-cyan-600","decoration-cyan-700","decoration-cyan-800","decoration-cyan-900","decoration-cyan-950",
    "decoration-sky-50","decoration-sky-100","decoration-sky-200","decoration-sky-300","decoration-sky-400","decoration-sky-500","decoration-sky-600","decoration-sky-700","decoration-sky-800","decoration-sky-900","decoration-sky-950",
    "decoration-blue-50","decoration-blue-100","decoration-blue-200","decoration-blue-300","decoration-blue-400","decoration-blue-500","decoration-blue-600","decoration-blue-700","decoration-blue-800","decoration-blue-900","decoration-blue-950",
    "decoration-indigo-50","decoration-indigo-100","decoration-indigo-200","decoration-indigo-300","decoration-indigo-400","decoration-indigo-500","decoration-indigo-600","decoration-indigo-700","decoration-indigo-800","decoration-indigo-900","decoration-indigo-950",
    "decoration-violet-50","decoration-violet-100","decoration-violet-200","decoration-violet-300","decoration-violet-400","decoration-violet-500","decoration-violet-600","decoration-violet-700","decoration-violet-800","decoration-violet-900","decoration-violet-950",
    "decoration-purple-50","decoration-purple-100","decoration-purple-200","decoration-purple-300","decoration-purple-400","decoration-purple-500","decoration-purple-600","decoration-purple-700","decoration-purple-800","decoration-purple-900","decoration-purple-950",
    "decoration-fuchsia-50","decoration-fuchsia-100","decoration-fuchsia-200","decoration-fuchsia-300","decoration-fuchsia-400","decoration-fuchsia-500","decoration-fuchsia-600","decoration-fuchsia-700","decoration-fuchsia-800","decoration-fuchsia-900","decoration-fuchsia-950",
    "decoration-pink-50","decoration-pink-100","decoration-pink-200","decoration-pink-300","decoration-pink-400","decoration-pink-500","decoration-pink-600","decoration-pink-700","decoration-pink-800","decoration-pink-900","decoration-pink-950",
    "decoration-rose-50","decoration-rose-100","decoration-rose-200","decoration-rose-300","decoration-rose-400","decoration-rose-500","decoration-rose-600","decoration-rose-700","decoration-rose-800","decoration-rose-900","decoration-rose-950"
  ],

  /* Text Decoration Style */
  ["decoration-solid","decoration-double","decoration-dotted","decoration-dashed","decoration-wavy"],

  /* Text Decoration Thickness */
  ["decoration-auto","decoration-from-font","decoration-0","decoration-1","decoration-2","decoration-4","decoration-8"],

  /* Text Underline Offset */
  ["underline-offset-auto","underline-offset-0","underline-offset-1","underline-offset-2","underline-offset-4","underline-offset-8"],

  /* Text Transform */
  ["uppercase","lowercase","capitalize","normal-case"],

  /* Text Overflow */
  ["truncate","text-ellipsis","text-clip"],

  /* Text Indent */
  [
    "indent-0","indent-px","indent-0.5","indent-1","indent-1.5","indent-2","indent-2.5","indent-3","indent-3.5",
    "indent-4","indent-5","indent-6","indent-7","indent-8","indent-9","indent-10","indent-11","indent-12",
    "indent-14","indent-16","indent-20","indent-24","indent-28","indent-32","indent-36","indent-40","indent-44",
    "indent-48","indent-52","indent-56","indent-60","indent-64","indent-72","indent-80","indent-96"
  ],

  /* Vertical Align */
  ["align-baseline","align-top","align-middle","align-bottom","align-text-top","align-text-bottom","align-sub","align-super"],

  /* Whitespace */
  ["whitespace-normal","whitespace-nowrap","whitespace-pre","whitespace-pre-line","whitespace-pre-wrap","whitespace-break-spaces"],

  /* Word Break */
  ["break-normal","break-words","break-all","break-keep"],

  /* Hyphens */
  ["hyphens-none","hyphens-manual","hyphens-auto"],

  /* Content */
  ["content-none"],


  // MARK: Backgrounds

  /* Background Attachment */
  ["bg-fixed","bg-local","bg-scroll"],

  /* Background Clip */
  ["bg-clip-border","bg-clip-padding","bg-clip-content","bg-clip-text"],

  /* Background Color */
  [
    "bg-inherit","bg-current","bg-transparent","bg-black","bg-white",
    "bg-slate-50","bg-slate-100","bg-slate-200","bg-slate-300","bg-slate-400","bg-slate-500","bg-slate-600","bg-slate-700","bg-slate-800","bg-slate-900","bg-slate-950",
    "bg-gray-50","bg-gray-100","bg-gray-200","bg-gray-300","bg-gray-400","bg-gray-500","bg-gray-600","bg-gray-700","bg-gray-800","bg-gray-900","bg-gray-950",
    "bg-zinc-50","bg-zinc-100","bg-zinc-200","bg-zinc-300","bg-zinc-400","bg-zinc-500","bg-zinc-600","bg-zinc-700","bg-zinc-800","bg-zinc-900","bg-zinc-950",
    "bg-neutral-50","bg-neutral-100","bg-neutral-200","bg-neutral-300","bg-neutral-400","bg-neutral-500","bg-neutral-600","bg-neutral-700","bg-neutral-800","bg-neutral-900","bg-neutral-950",
    "bg-stone-50","bg-stone-100","bg-stone-200","bg-stone-300","bg-stone-400","bg-stone-500","bg-stone-600","bg-stone-700","bg-stone-800","bg-stone-900","bg-stone-950",
    "bg-red-50","bg-red-100","bg-red-200","bg-red-300","bg-red-400","bg-red-500","bg-red-600","bg-red-700","bg-red-800","bg-red-900","bg-red-950",
    "bg-orange-50","bg-orange-100","bg-orange-200","bg-orange-300","bg-orange-400","bg-orange-500","bg-orange-600","bg-orange-700","bg-orange-800","bg-orange-900","bg-orange-950",
    "bg-amber-50","bg-amber-100","bg-amber-200","bg-amber-300","bg-amber-400","bg-amber-500","bg-amber-600","bg-amber-700","bg-amber-800","bg-amber-900","bg-amber-950",
    "bg-yellow-50","bg-yellow-100","bg-yellow-200","bg-yellow-300","bg-yellow-400","bg-yellow-500","bg-yellow-600","bg-yellow-700","bg-yellow-800","bg-yellow-900","bg-yellow-950",
    "bg-lime-50","bg-lime-100","bg-lime-200","bg-lime-300","bg-lime-400","bg-lime-500","bg-lime-600","bg-lime-700","bg-lime-800","bg-lime-900","bg-lime-950",
    "bg-green-50","bg-green-100","bg-green-200","bg-green-300","bg-green-400","bg-green-500","bg-green-600","bg-green-700","bg-green-800","bg-green-900","bg-green-950",
    "bg-emerald-50","bg-emerald-100","bg-emerald-200","bg-emerald-300","bg-emerald-400","bg-emerald-500","bg-emerald-600","bg-emerald-700","bg-emerald-800","bg-emerald-900","bg-emerald-950",
    "bg-teal-50","bg-teal-100","bg-teal-200","bg-teal-300","bg-teal-400","bg-teal-500","bg-teal-600","bg-teal-700","bg-teal-800","bg-teal-900","bg-teal-950",
    "bg-cyan-50","bg-cyan-100","bg-cyan-200","bg-cyan-300","bg-cyan-400","bg-cyan-500","bg-cyan-600","bg-cyan-700","bg-cyan-800","bg-cyan-900","bg-cyan-950",
    "bg-sky-50","bg-sky-100","bg-sky-200","bg-sky-300","bg-sky-400","bg-sky-500","bg-sky-600","bg-sky-700","bg-sky-800","bg-sky-900","bg-sky-950",
    "bg-blue-50","bg-blue-100","bg-blue-200","bg-blue-300","bg-blue-400","bg-blue-500","bg-blue-600","bg-blue-700","bg-blue-800","bg-blue-900","bg-blue-950",
    "bg-indigo-50","bg-indigo-100","bg-indigo-200","bg-indigo-300","bg-indigo-400","bg-indigo-500","bg-indigo-600","bg-indigo-700","bg-indigo-800","bg-indigo-900","bg-indigo-950",
    "bg-violet-50","bg-violet-100","bg-violet-200","bg-violet-300","bg-violet-400","bg-violet-500","bg-violet-600","bg-violet-700","bg-violet-800","bg-violet-900","bg-violet-950",
    "bg-purple-50","bg-purple-100","bg-purple-200","bg-purple-300","bg-purple-400","bg-purple-500","bg-purple-600","bg-purple-700","bg-purple-800","bg-purple-900","bg-purple-950",
    "bg-fuchsia-50","bg-fuchsia-100","bg-fuchsia-200","bg-fuchsia-300","bg-fuchsia-400","bg-fuchsia-500","bg-fuchsia-600","bg-fuchsia-700","bg-fuchsia-800","bg-fuchsia-900","bg-fuchsia-950",
    "bg-pink-50","bg-pink-100","bg-pink-200","bg-pink-300","bg-pink-400","bg-pink-500","bg-pink-600","bg-pink-700","bg-pink-800","bg-pink-900","bg-pink-950",
    "bg-rose-50","bg-rose-100","bg-rose-200","bg-rose-300","bg-rose-400","bg-rose-500","bg-rose-600","bg-rose-700","bg-rose-800","bg-rose-900","bg-rose-950"
  ],

  /* Background Origin */
  ["bg-origin-border","bg-origin-padding","bg-origin-content"],

  /* Background Position */
  ["bg-bottom","bg-center","bg-left","bg-left-bottom","bg-left-top","bg-right","bg-right-bottom","bg-right-top","bg-top"],

  /* Background Repeat */
  ["bg-repeat","bg-no-repeat","bg-repeat-x","bg-repeat-y","bg-repeat-round","bg-repeat-space"],

  /* Background Size */
  ["bg-auto","bg-cover","bg-contain"],

  /* Background Image */
  ["bg-none","bg-gradient-to-t","bg-gradient-to-tr","bg-gradient-to-r","bg-gradient-to-br","bg-gradient-to-b","bg-gradient-to-bl","bg-gradient-to-l","bg-gradient-to-tl"],

  /* Gradient Color Stops */
  ["from-inherit","from-current","from-transparent","from-black"],


  // MARK: Borders

  /* Border Radius */
  [
    "rounded-none","rounded-sm","rounded","rounded-md","rounded-lg","rounded-xl","rounded-2xl","rounded-3xl","rounded-full",
    "rounded-s-none","rounded-s-sm","rounded-s","rounded-s-md","rounded-s-lg","rounded-s-xl","rounded-s-2xl","rounded-s-3xl","rounded-s-full",
    "rounded-e-none","rounded-e-sm","rounded-e","rounded-e-md","rounded-e-lg","rounded-e-xl","rounded-e-2xl","rounded-e-3xl","rounded-e-full",
    "rounded-t-none","rounded-t-sm","rounded-t","rounded-t-md","rounded-t-lg","rounded-t-xl","rounded-t-2xl","rounded-t-3xl","rounded-t-full",
    "rounded-r-none","rounded-r-sm","rounded-r","rounded-r-md","rounded-r-lg","rounded-r-xl","rounded-r-2xl","rounded-r-3xl","rounded-r-full",
    "rounded-b-none","rounded-b-sm","rounded-b","rounded-b-md","rounded-b-lg","rounded-b-xl","rounded-b-2xl","rounded-b-3xl","rounded-b-full",
    "rounded-l-none","rounded-l-sm","rounded-l","rounded-l-md","rounded-l-lg","rounded-l-xl","rounded-l-2xl","rounded-l-3xl","rounded-l-full",

    "rounded-ss-none","rounded-ss-sm","rounded-ss","rounded-ss-md","rounded-ss-lg","rounded-ss-xl","rounded-ss-2xl","rounded-ss-3xl","rounded-ss-full",
    "rounded-se-none","rounded-se-sm","rounded-se","rounded-se-md","rounded-se-lg","rounded-se-xl","rounded-se-2xl","rounded-se-3xl","rounded-se-full",
    "rounded-ee-none","rounded-ee-sm","rounded-ee","rounded-ee-md","rounded-ee-lg","rounded-ee-xl","rounded-ee-2xl","rounded-ee-3xl","rounded-ee-full",
    "rounded-es-none","rounded-es-sm","rounded-es","rounded-es-md","rounded-es-lg","rounded-es-xl","rounded-es-2xl","rounded-es-3xl","rounded-es-full",

    "rounded-tl-none","rounded-tl-sm","rounded-tl","rounded-tl-md","rounded-tl-lg","rounded-tl-xl","rounded-tl-2xl","rounded-tl-3xl","rounded-tl-full",
    "rounded-tr-none","rounded-tr-sm","rounded-tr","rounded-tr-md","rounded-tr-lg","rounded-tr-xl","rounded-tr-2xl","rounded-tr-3xl","rounded-tr-full",

    "rounded-br-none","rounded-br-sm","rounded-br","rounded-br-md","rounded-br-lg","rounded-br-xl","rounded-br-2xl","rounded-br-3xl","rounded-br-full",
    "rounded-bl-none","rounded-bl-sm","rounded-bl","rounded-bl-md","rounded-bl-lg","rounded-bl-xl","rounded-bl-2xl","rounded-bl-3xl","rounded-bl-full"
  ],


  /* Border Width */
  [
    "border-0","border-2","border-4","border-8","border",
    "border-x-0","border-x-2","border-x-4","border-x-8","border-x",
    "border-y-0","border-y-2","border-y-4","border-y-8","border-y",
    "border-s-0","border-s-2","border-s-4","border-s-8","border-s",
    "border-e-0","border-e-2","border-e-4","border-e-8","border-e",
    "border-t-0","border-t-2","border-t-4","border-t-8","border-t",
    "border-r-0","border-r-2","border-r-4","border-r-8","border-r",
    "border-b-0","border-b-2","border-b-4","border-b-8","border-b",
    "border-l-0","border-l-2","border-l-4","border-l-8","border-l"
  ],

  /* Border Color */
  ["border-inherit","border-current","border-transparent","border-black","border-white"],
  "border-slate-50","border-slate-100","border-slate-200","border-slate-300","border-slate-400","border-slate-500","border-slate-600","border-slate-700","border-slate-800","border-slate-900","border-slate-950",
  "border-gray-50","border-gray-100","border-gray-200","border-gray-300","border-gray-400","border-gray-500","border-gray-600","border-gray-700","border-gray-800","border-gray-900","border-gray-950",
  "border-zinc-50","border-zinc-100","border-zinc-200","border-zinc-300","border-zinc-400","border-zinc-500","border-zinc-600","border-zinc-700","border-zinc-800","border-zinc-900","border-zinc-950",
  "border-neutral-50","border-neutral-100","border-neutral-200","border-neutral-300","border-neutral-400","border-neutral-500","border-neutral-600","border-neutral-700","border-neutral-800","border-neutral-900","border-neutral-950",
  "border-stone-50","border-stone-100","border-stone-200","border-stone-300","border-stone-400","border-stone-500","border-stone-600","border-stone-700","border-stone-800","border-stone-900","border-stone-950",
  "border-red-50","border-red-100","border-red-200","border-red-300","border-red-400","border-red-500","border-red-600","border-red-700","border-red-800","border-red-900","border-red-950",
  "border-orange-50","border-orange-100","border-orange-200","border-orange-300","border-orange-400","border-orange-500","border-orange-600","border-orange-700","border-orange-800","border-orange-900","border-orange-950",
  "border-amber-50","border-amber-100","border-amber-200","border-amber-300","border-amber-400","border-amber-500","border-amber-600","border-amber-700","border-amber-800","border-amber-900","border-amber-950",
  "border-yellow-50","border-yellow-100","border-yellow-200","border-yellow-300","border-yellow-400","border-yellow-500","border-yellow-600","border-yellow-700","border-yellow-800","border-yellow-900","border-yellow-950",
  "border-lime-50","border-lime-100","border-lime-200","border-lime-300","border-lime-400","border-lime-500","border-lime-600","border-lime-700","border-lime-800","border-lime-900","border-lime-950",
  "border-green-50","border-green-100","border-green-200","border-green-300","border-green-400","border-green-500","border-green-600","border-green-700","border-green-800","border-green-900","border-green-950",
  "border-emerald-50","border-emerald-100","border-emerald-200","border-emerald-300","border-emerald-400","border-emerald-500","border-emerald-600","border-emerald-700","border-emerald-800","border-emerald-900","border-emerald-950",
  "border-teal-50","border-teal-100","border-teal-200","border-teal-300","border-teal-400","border-teal-500","border-teal-600","border-teal-700","border-teal-800","border-teal-900","border-teal-950",
  "border-cyan-50","border-cyan-100","border-cyan-200","border-cyan-300","border-cyan-400","border-cyan-500","border-cyan-600","border-cyan-700","border-cyan-800","border-cyan-900","border-cyan-950",
  "border-sky-50","border-sky-100","border-sky-200","border-sky-300","border-sky-400","border-sky-500","border-sky-600","border-sky-700","border-sky-800","border-sky-900","border-sky-950",
  "border-blue-50","border-blue-100","border-blue-200","border-blue-300","border-blue-400","border-blue-500","border-blue-600","border-blue-700","border-blue-800","border-blue-900","border-blue-950",
  "border-indigo-50","border-indigo-100","border-indigo-200","border-indigo-300","border-indigo-400","border-indigo-500","border-indigo-600","border-indigo-700","border-indigo-800","border-indigo-900","border-indigo-950",
  "border-violet-50","border-violet-100","border-violet-200","border-violet-300","border-violet-400","border-violet-500","border-violet-600","border-violet-700","border-violet-800","border-violet-900","border-violet-950",
  "border-purple-50","border-purple-100","border-purple-200","border-purple-300","border-purple-400","border-purple-500","border-purple-600","border-purple-700","border-purple-800","border-purple-900","border-purple-950",
  "border-fuchsia-50","border-fuchsia-100","border-fuchsia-200","border-fuchsia-300","border-fuchsia-400","border-fuchsia-500","border-fuchsia-600","border-fuchsia-700","border-fuchsia-800","border-fuchsia-900","border-fuchsia-950",
  "border-pink-50","border-pink-100","border-pink-200","border-pink-300","border-pink-400","border-pink-500","border-pink-600","border-pink-700","border-pink-800","border-pink-900","border-pink-950",
  "border-rose-50","border-rose-100","border-rose-200","border-rose-300","border-rose-400","border-rose-500","border-rose-600","border-rose-700","border-rose-800","border-rose-900","border-rose-950",


  "border-x-inherit","border-x-current","border-x-transparent","border-x-black","border-x-white",
  "border-x-slate-50","border-x-slate-100","border-x-slate-200","border-x-slate-300","border-x-slate-400","border-x-slate-500","border-x-slate-600","border-x-slate-700","border-x-slate-800","border-x-slate-900","border-x-slate-950",
  "border-x-gray-50","border-x-gray-100","border-x-gray-200","border-x-gray-300","border-x-gray-400","border-x-gray-500","border-x-gray-600","border-x-gray-700","border-x-gray-800","border-x-gray-900","border-x-gray-950",
  "border-x-zinc-50","border-x-zinc-100","border-x-zinc-200","border-x-zinc-300","border-x-zinc-400","border-x-zinc-500","border-x-zinc-600","border-x-zinc-700","border-x-zinc-800","border-x-zinc-900","border-x-zinc-950",
  "border-x-neutral-50","border-x-neutral-100","border-x-neutral-200","border-x-neutral-300","border-x-neutral-400","border-x-neutral-500","border-x-neutral-600","border-x-neutral-700","border-x-neutral-800","border-x-neutral-900","border-x-neutral-950",
  "border-x-stone-50","border-x-stone-100","border-x-stone-200","border-x-stone-300","border-x-stone-400","border-x-stone-500","border-x-stone-600","border-x-stone-700","border-x-stone-800","border-x-stone-900","border-x-stone-950",
  "border-x-red-50","border-x-red-100","border-x-red-200","border-x-red-300","border-x-red-400","border-x-red-500","border-x-red-600","border-x-red-700","border-x-red-800","border-x-red-900","border-x-red-950",
  "border-x-orange-50","border-x-orange-100","border-x-orange-200","border-x-orange-300","border-x-orange-400","border-x-orange-500","border-x-orange-600","border-x-orange-700","border-x-orange-800","border-x-orange-900","border-x-orange-950",
  "border-x-amber-50","border-x-amber-100","border-x-amber-200","border-x-amber-300","border-x-amber-400","border-x-amber-500","border-x-amber-600","border-x-amber-700","border-x-amber-800","border-x-amber-900","border-x-amber-950",
  "border-x-yellow-50","border-x-yellow-100","border-x-yellow-200","border-x-yellow-300","border-x-yellow-400","border-x-yellow-500","border-x-yellow-600","border-x-yellow-700","border-x-yellow-800","border-x-yellow-900","border-x-yellow-950",
  "border-x-lime-50","border-x-lime-100","border-x-lime-200","border-x-lime-300","border-x-lime-400","border-x-lime-500","border-x-lime-600","border-x-lime-700","border-x-lime-800","border-x-lime-900","border-x-lime-950",
  "border-x-green-50","border-x-green-100","border-x-green-200","border-x-green-300","border-x-green-400","border-x-green-500","border-x-green-600","border-x-green-700","border-x-green-800","border-x-green-900","border-x-green-950",
  "border-x-emerald-50","border-x-emerald-100","border-x-emerald-200","border-x-emerald-300","border-x-emerald-400","border-x-emerald-500","border-x-emerald-600","border-x-emerald-700","border-x-emerald-800","border-x-emerald-900","border-x-emerald-950",
  "border-x-teal-50","border-x-teal-100","border-x-teal-200","border-x-teal-300","border-x-teal-400","border-x-teal-500","border-x-teal-600","border-x-teal-700","border-x-teal-800","border-x-teal-900","border-x-teal-950",
  "border-x-cyan-50","border-x-cyan-100","border-x-cyan-200","border-x-cyan-300","border-x-cyan-400","border-x-cyan-500","border-x-cyan-600","border-x-cyan-700","border-x-cyan-800","border-x-cyan-900","border-x-cyan-950",
  "border-x-sky-50","border-x-sky-100","border-x-sky-200","border-x-sky-300","border-x-sky-400","border-x-sky-500","border-x-sky-600","border-x-sky-700","border-x-sky-800","border-x-sky-900","border-x-sky-950",
  "border-x-blue-50","border-x-blue-100","border-x-blue-200","border-x-blue-300","border-x-blue-400","border-x-blue-500","border-x-blue-600","border-x-blue-700","border-x-blue-800","border-x-blue-900","border-x-blue-950",
  "border-x-indigo-50","border-x-indigo-100","border-x-indigo-200","border-x-indigo-300","border-x-indigo-400","border-x-indigo-500","border-x-indigo-600","border-x-indigo-700","border-x-indigo-800","border-x-indigo-900","border-x-indigo-950",
  "border-x-violet-50","border-x-violet-100","border-x-violet-200","border-x-violet-300","border-x-violet-400","border-x-violet-500","border-x-violet-600","border-x-violet-700","border-x-violet-800","border-x-violet-900","border-x-violet-950",
  "border-x-purple-50","border-x-purple-100","border-x-purple-200","border-x-purple-300","border-x-purple-400","border-x-purple-500","border-x-purple-600","border-x-purple-700","border-x-purple-800","border-x-purple-900","border-x-purple-950",
  "border-x-fuchsia-50","border-x-fuchsia-100","border-x-fuchsia-200","border-x-fuchsia-300","border-x-fuchsia-400","border-x-fuchsia-500","border-x-fuchsia-600","border-x-fuchsia-700","border-x-fuchsia-800","border-x-fuchsia-900","border-x-fuchsia-950",
  "border-x-pink-50","border-x-pink-100","border-x-pink-200","border-x-pink-300","border-x-pink-400","border-x-pink-500","border-x-pink-600","border-x-pink-700","border-x-pink-800","border-x-pink-900","border-x-pink-950",
  "border-x-rose-50","border-x-rose-100","border-x-rose-200","border-x-rose-300","border-x-rose-400","border-x-rose-500","border-x-rose-600","border-x-rose-700","border-x-rose-800","border-x-rose-900","border-x-rose-950",


  "border-y-inherit","border-y-current","border-y-transparent","border-y-black","border-y-white",
  "border-y-slate-50","border-y-slate-100","border-y-slate-200","border-y-slate-300","border-y-slate-400","border-y-slate-500","border-y-slate-600","border-y-slate-700","border-y-slate-800","border-y-slate-900","border-y-slate-950",
  "border-y-gray-50","border-y-gray-100","border-y-gray-200","border-y-gray-300","border-y-gray-400","border-y-gray-500","border-y-gray-600","border-y-gray-700","border-y-gray-800","border-y-gray-900","border-y-gray-950",
  "border-y-zinc-50","border-y-zinc-100","border-y-zinc-200","border-y-zinc-300","border-y-zinc-400","border-y-zinc-500","border-y-zinc-600","border-y-zinc-700","border-y-zinc-800","border-y-zinc-900","border-y-zinc-950",
  "border-y-neutral-50","border-y-neutral-100","border-y-neutral-200","border-y-neutral-300","border-y-neutral-400","border-y-neutral-500","border-y-neutral-600","border-y-neutral-700","border-y-neutral-800","border-y-neutral-900","border-y-neutral-950",
  "border-y-stone-50","border-y-stone-100","border-y-stone-200","border-y-stone-300","border-y-stone-400","border-y-stone-500","border-y-stone-600","border-y-stone-700","border-y-stone-800","border-y-stone-900","border-y-stone-950",
  "border-y-red-50","border-y-red-100","border-y-red-200","border-y-red-300","border-y-red-400","border-y-red-500","border-y-red-600","border-y-red-700","border-y-red-800","border-y-red-900","border-y-red-950",
  "border-y-orange-50","border-y-orange-100","border-y-orange-200","border-y-orange-300","border-y-orange-400","border-y-orange-500","border-y-orange-600","border-y-orange-700","border-y-orange-800","border-y-orange-900","border-y-orange-950",
  "border-y-amber-50","border-y-amber-100","border-y-amber-200","border-y-amber-300","border-y-amber-400","border-y-amber-500","border-y-amber-600","border-y-amber-700","border-y-amber-800","border-y-amber-900","border-y-amber-950",
  "border-y-yellow-50","border-y-yellow-100","border-y-yellow-200","border-y-yellow-300","border-y-yellow-400","border-y-yellow-500","border-y-yellow-600","border-y-yellow-700","border-y-yellow-800","border-y-yellow-900","border-y-yellow-950",
  "border-y-lime-50","border-y-lime-100","border-y-lime-200","border-y-lime-300","border-y-lime-400","border-y-lime-500","border-y-lime-600","border-y-lime-700","border-y-lime-800","border-y-lime-900","border-y-lime-950",
  "border-y-green-50","border-y-green-100","border-y-green-200","border-y-green-300","border-y-green-400","border-y-green-500","border-y-green-600","border-y-green-700","border-y-green-800","border-y-green-900","border-y-green-950",
  "border-y-emerald-50","border-y-emerald-100","border-y-emerald-200","border-y-emerald-300","border-y-emerald-400","border-y-emerald-500","border-y-emerald-600","border-y-emerald-700","border-y-emerald-800","border-y-emerald-900","border-y-emerald-950",
  "border-y-teal-50","border-y-teal-100","border-y-teal-200","border-y-teal-300","border-y-teal-400","border-y-teal-500","border-y-teal-600","border-y-teal-700","border-y-teal-800","border-y-teal-900","border-y-teal-950",
  "border-y-cyan-50","border-y-cyan-100","border-y-cyan-200","border-y-cyan-300","border-y-cyan-400","border-y-cyan-500","border-y-cyan-600","border-y-cyan-700","border-y-cyan-800","border-y-cyan-900","border-y-cyan-950",
  "border-y-sky-50","border-y-sky-100","border-y-sky-200","border-y-sky-300","border-y-sky-400","border-y-sky-500","border-y-sky-600","border-y-sky-700","border-y-sky-800","border-y-sky-900","border-y-sky-950",
  "border-y-blue-50","border-y-blue-100","border-y-blue-200","border-y-blue-300","border-y-blue-400","border-y-blue-500","border-y-blue-600","border-y-blue-700","border-y-blue-800","border-y-blue-900","border-y-blue-950",
  "border-y-indigo-50","border-y-indigo-100","border-y-indigo-200","border-y-indigo-300","border-y-indigo-400","border-y-indigo-500","border-y-indigo-600","border-y-indigo-700","border-y-indigo-800","border-y-indigo-900","border-y-indigo-950",
  "border-y-violet-50","border-y-violet-100","border-y-violet-200","border-y-violet-300","border-y-violet-400","border-y-violet-500","border-y-violet-600","border-y-violet-700","border-y-violet-800","border-y-violet-900","border-y-violet-950",
  "border-y-purple-50","border-y-purple-100","border-y-purple-200","border-y-purple-300","border-y-purple-400","border-y-purple-500","border-y-purple-600","border-y-purple-700","border-y-purple-800","border-y-purple-900","border-y-purple-950",
  "border-y-fuchsia-50","border-y-fuchsia-100","border-y-fuchsia-200","border-y-fuchsia-300","border-y-fuchsia-400","border-y-fuchsia-500","border-y-fuchsia-600","border-y-fuchsia-700","border-y-fuchsia-800","border-y-fuchsia-900","border-y-fuchsia-950",
  "border-y-pink-50","border-y-pink-100","border-y-pink-200","border-y-pink-300","border-y-pink-400","border-y-pink-500","border-y-pink-600","border-y-pink-700","border-y-pink-800","border-y-pink-900","border-y-pink-950",
  "border-y-rose-50","border-y-rose-100","border-y-rose-200","border-y-rose-300","border-y-rose-400","border-y-rose-500","border-y-rose-600","border-y-rose-700","border-y-rose-800","border-y-rose-900","border-y-rose-950",


  "border-s-inherit","border-s-current","border-s-transparent","border-s-black","border-s-white",
  "border-s-slate-50","border-s-slate-100","border-s-slate-200","border-s-slate-300","border-s-slate-400","border-s-slate-500","border-s-slate-600","border-s-slate-700","border-s-slate-800","border-s-slate-900","border-s-slate-950",
  "border-s-gray-50","border-s-gray-100","border-s-gray-200","border-s-gray-300","border-s-gray-400","border-s-gray-500","border-s-gray-600","border-s-gray-700","border-s-gray-800","border-s-gray-900","border-s-gray-950",
  "border-s-zinc-50","border-s-zinc-100","border-s-zinc-200","border-s-zinc-300","border-s-zinc-400","border-s-zinc-500","border-s-zinc-600","border-s-zinc-700","border-s-zinc-800","border-s-zinc-900","border-s-zinc-950",
  "border-s-neutral-50","border-s-neutral-100","border-s-neutral-200","border-s-neutral-300","border-s-neutral-400","border-s-neutral-500","border-s-neutral-600","border-s-neutral-700","border-s-neutral-800","border-s-neutral-900","border-s-neutral-950",
  "border-s-stone-50","border-s-stone-100","border-s-stone-200","border-s-stone-300","border-s-stone-400","border-s-stone-500","border-s-stone-600","border-s-stone-700","border-s-stone-800","border-s-stone-900","border-s-stone-950",
  "border-s-red-50","border-s-red-100","border-s-red-200","border-s-red-300","border-s-red-400","border-s-red-500","border-s-red-600","border-s-red-700","border-s-red-800","border-s-red-900","border-s-red-950",
  "border-s-orange-50","border-s-orange-100","border-s-orange-200","border-s-orange-300","border-s-orange-400","border-s-orange-500","border-s-orange-600","border-s-orange-700","border-s-orange-800","border-s-orange-900","border-s-orange-950",
  "border-s-amber-50","border-s-amber-100","border-s-amber-200","border-s-amber-300","border-s-amber-400","border-s-amber-500","border-s-amber-600","border-s-amber-700","border-s-amber-800","border-s-amber-900","border-s-amber-950",
  "border-s-yellow-50","border-s-yellow-100","border-s-yellow-200","border-s-yellow-300","border-s-yellow-400","border-s-yellow-500","border-s-yellow-600","border-s-yellow-700","border-s-yellow-800","border-s-yellow-900","border-s-yellow-950",
  "border-s-lime-50","border-s-lime-100","border-s-lime-200","border-s-lime-300","border-s-lime-400","border-s-lime-500","border-s-lime-600","border-s-lime-700","border-s-lime-800","border-s-lime-900","border-s-lime-950",
  "border-s-green-50","border-s-green-100","border-s-green-200","border-s-green-300","border-s-green-400","border-s-green-500","border-s-green-600","border-s-green-700","border-s-green-800","border-s-green-900","border-s-green-950",
  "border-s-emerald-50","border-s-emerald-100","border-s-emerald-200","border-s-emerald-300","border-s-emerald-400","border-s-emerald-500","border-s-emerald-600","border-s-emerald-700","border-s-emerald-800","border-s-emerald-900","border-s-emerald-950",
  "border-s-teal-50","border-s-teal-100","border-s-teal-200","border-s-teal-300","border-s-teal-400","border-s-teal-500","border-s-teal-600","border-s-teal-700","border-s-teal-800","border-s-teal-900","border-s-teal-950",
  "border-s-cyan-50","border-s-cyan-100","border-s-cyan-200","border-s-cyan-300","border-s-cyan-400","border-s-cyan-500","border-s-cyan-600","border-s-cyan-700","border-s-cyan-800","border-s-cyan-900","border-s-cyan-950",
  "border-s-sky-50","border-s-sky-100","border-s-sky-200","border-s-sky-300","border-s-sky-400","border-s-sky-500","border-s-sky-600","border-s-sky-700","border-s-sky-800","border-s-sky-900","border-s-sky-950",
  "border-s-blue-50","border-s-blue-100","border-s-blue-200","border-s-blue-300","border-s-blue-400","border-s-blue-500","border-s-blue-600","border-s-blue-700","border-s-blue-800","border-s-blue-900","border-s-blue-950",
  "border-s-indigo-50","border-s-indigo-100","border-s-indigo-200","border-s-indigo-300","border-s-indigo-400","border-s-indigo-500","border-s-indigo-600","border-s-indigo-700","border-s-indigo-800","border-s-indigo-900","border-s-indigo-950",
  "border-s-violet-50","border-s-violet-100","border-s-violet-200","border-s-violet-300","border-s-violet-400","border-s-violet-500","border-s-violet-600","border-s-violet-700","border-s-violet-800","border-s-violet-900","border-s-violet-950",
  "border-s-purple-50","border-s-purple-100","border-s-purple-200","border-s-purple-300","border-s-purple-400","border-s-purple-500","border-s-purple-600","border-s-purple-700","border-s-purple-800","border-s-purple-900","border-s-purple-950",
  "border-s-fuchsia-50","border-s-fuchsia-100","border-s-fuchsia-200","border-s-fuchsia-300","border-s-fuchsia-400","border-s-fuchsia-500","border-s-fuchsia-600","border-s-fuchsia-700","border-s-fuchsia-800","border-s-fuchsia-900","border-s-fuchsia-950",
  "border-s-pink-50","border-s-pink-100","border-s-pink-200","border-s-pink-300","border-s-pink-400","border-s-pink-500","border-s-pink-600","border-s-pink-700","border-s-pink-800","border-s-pink-900","border-s-pink-950",
  "border-s-rose-50","border-s-rose-100","border-s-rose-200","border-s-rose-300","border-s-rose-400","border-s-rose-500","border-s-rose-600","border-s-rose-700","border-s-rose-800","border-s-rose-900","border-s-rose-950",


  "border-e-inherit","border-e-current","border-e-transparent","border-e-black","border-e-white",
  "border-e-slate-50","border-e-slate-100","border-e-slate-200","border-e-slate-300","border-e-slate-400","border-e-slate-500","border-e-slate-600","border-e-slate-700","border-e-slate-800","border-e-slate-900","border-e-slate-950",
  "border-e-gray-50","border-e-gray-100","border-e-gray-200","border-e-gray-300","border-e-gray-400","border-e-gray-500","border-e-gray-600","border-e-gray-700","border-e-gray-800","border-e-gray-900","border-e-gray-950",
  "border-e-zinc-50","border-e-zinc-100","border-e-zinc-200","border-e-zinc-300","border-e-zinc-400","border-e-zinc-500","border-e-zinc-600","border-e-zinc-700","border-e-zinc-800","border-e-zinc-900","border-e-zinc-950",
  "border-e-neutral-50","border-e-neutral-100","border-e-neutral-200","border-e-neutral-300","border-e-neutral-400","border-e-neutral-500","border-e-neutral-600","border-e-neutral-700","border-e-neutral-800","border-e-neutral-900","border-e-neutral-950",
  "border-e-stone-50","border-e-stone-100","border-e-stone-200","border-e-stone-300","border-e-stone-400","border-e-stone-500","border-e-stone-600","border-e-stone-700","border-e-stone-800","border-e-stone-900","border-e-stone-950",
  "border-e-red-50","border-e-red-100","border-e-red-200","border-e-red-300","border-e-red-400","border-e-red-500","border-e-red-600","border-e-red-700","border-e-red-800","border-e-red-900","border-e-red-950",
  "border-e-orange-50","border-e-orange-100","border-e-orange-200","border-e-orange-300","border-e-orange-400","border-e-orange-500","border-e-orange-600","border-e-orange-700","border-e-orange-800","border-e-orange-900","border-e-orange-950",
  "border-e-amber-50","border-e-amber-100","border-e-amber-200","border-e-amber-300","border-e-amber-400","border-e-amber-500","border-e-amber-600","border-e-amber-700","border-e-amber-800","border-e-amber-900","border-e-amber-950",
  "border-e-yellow-50","border-e-yellow-100","border-e-yellow-200","border-e-yellow-300","border-e-yellow-400","border-e-yellow-500","border-e-yellow-600","border-e-yellow-700","border-e-yellow-800","border-e-yellow-900","border-e-yellow-950",
  "border-e-lime-50","border-e-lime-100","border-e-lime-200","border-e-lime-300","border-e-lime-400","border-e-lime-500","border-e-lime-600","border-e-lime-700","border-e-lime-800","border-e-lime-900","border-e-lime-950",
  "border-e-green-50","border-e-green-100","border-e-green-200","border-e-green-300","border-e-green-400","border-e-green-500","border-e-green-600","border-e-green-700","border-e-green-800","border-e-green-900","border-e-green-950",
  "border-e-emerald-50","border-e-emerald-100","border-e-emerald-200","border-e-emerald-300","border-e-emerald-400","border-e-emerald-500","border-e-emerald-600","border-e-emerald-700","border-e-emerald-800","border-e-emerald-900","border-e-emerald-950",
  "border-e-teal-50","border-e-teal-100","border-e-teal-200","border-e-teal-300","border-e-teal-400","border-e-teal-500","border-e-teal-600","border-e-teal-700","border-e-teal-800","border-e-teal-900","border-e-teal-950",
  "border-e-cyan-50","border-e-cyan-100","border-e-cyan-200","border-e-cyan-300","border-e-cyan-400","border-e-cyan-500","border-e-cyan-600","border-e-cyan-700","border-e-cyan-800","border-e-cyan-900","border-e-cyan-950",
  "border-e-sky-50","border-e-sky-100","border-e-sky-200","border-e-sky-300","border-e-sky-400","border-e-sky-500","border-e-sky-600","border-e-sky-700","border-e-sky-800","border-e-sky-900","border-e-sky-950",
  "border-e-blue-50","border-e-blue-100","border-e-blue-200","border-e-blue-300","border-e-blue-400","border-e-blue-500","border-e-blue-600","border-e-blue-700","border-e-blue-800","border-e-blue-900","border-e-blue-950",
  "border-e-indigo-50","border-e-indigo-100","border-e-indigo-200","border-e-indigo-300","border-e-indigo-400","border-e-indigo-500","border-e-indigo-600","border-e-indigo-700","border-e-indigo-800","border-e-indigo-900","border-e-indigo-950",
  "border-e-violet-50","border-e-violet-100","border-e-violet-200","border-e-violet-300","border-e-violet-400","border-e-violet-500","border-e-violet-600","border-e-violet-700","border-e-violet-800","border-e-violet-900","border-e-violet-950",
  "border-e-purple-50","border-e-purple-100","border-e-purple-200","border-e-purple-300","border-e-purple-400","border-e-purple-500","border-e-purple-600","border-e-purple-700","border-e-purple-800","border-e-purple-900","border-e-purple-950",
  "border-e-fuchsia-50","border-e-fuchsia-100","border-e-fuchsia-200","border-e-fuchsia-300","border-e-fuchsia-400","border-e-fuchsia-500","border-e-fuchsia-600","border-e-fuchsia-700","border-e-fuchsia-800","border-e-fuchsia-900","border-e-fuchsia-950",
  "border-e-pink-50","border-e-pink-100","border-e-pink-200","border-e-pink-300","border-e-pink-400","border-e-pink-500","border-e-pink-600","border-e-pink-700","border-e-pink-800","border-e-pink-900","border-e-pink-950",
  "border-e-rose-50","border-e-rose-100","border-e-rose-200","border-e-rose-300","border-e-rose-400","border-e-rose-500","border-e-rose-600","border-e-rose-700","border-e-rose-800","border-e-rose-900","border-e-rose-950",


  "border-t-inherit","border-t-current","border-t-transparent","border-t-black","border-t-white",
  "border-t-slate-50","border-t-slate-100","border-t-slate-200","border-t-slate-300","border-t-slate-400","border-t-slate-500","border-t-slate-600","border-t-slate-700","border-t-slate-800","border-t-slate-900","border-t-slate-950",
  "border-t-gray-50","border-t-gray-100","border-t-gray-200","border-t-gray-300","border-t-gray-400","border-t-gray-500","border-t-gray-600","border-t-gray-700","border-t-gray-800","border-t-gray-900","border-t-gray-950",
  "border-t-zinc-50","border-t-zinc-100","border-t-zinc-200","border-t-zinc-300","border-t-zinc-400","border-t-zinc-500","border-t-zinc-600","border-t-zinc-700","border-t-zinc-800","border-t-zinc-900","border-t-zinc-950",
  "border-t-neutral-50","border-t-neutral-100","border-t-neutral-200","border-t-neutral-300","border-t-neutral-400","border-t-neutral-500","border-t-neutral-600","border-t-neutral-700","border-t-neutral-800","border-t-neutral-900","border-t-neutral-950",
  "border-t-stone-50","border-t-stone-100","border-t-stone-200","border-t-stone-300","border-t-stone-400","border-t-stone-500","border-t-stone-600","border-t-stone-700","border-t-stone-800","border-t-stone-900","border-t-stone-950",
  "border-t-red-50","border-t-red-100","border-t-red-200","border-t-red-300","border-t-red-400","border-t-red-500","border-t-red-600","border-t-red-700","border-t-red-800","border-t-red-900","border-t-red-950",
  "border-t-orange-50","border-t-orange-100","border-t-orange-200","border-t-orange-300","border-t-orange-400","border-t-orange-500","border-t-orange-600","border-t-orange-700","border-t-orange-800","border-t-orange-900","border-t-orange-950",
  "border-t-amber-50","border-t-amber-100","border-t-amber-200","border-t-amber-300","border-t-amber-400","border-t-amber-500","border-t-amber-600","border-t-amber-700","border-t-amber-800","border-t-amber-900","border-t-amber-950",
  "border-t-yellow-50","border-t-yellow-100","border-t-yellow-200","border-t-yellow-300","border-t-yellow-400","border-t-yellow-500","border-t-yellow-600","border-t-yellow-700","border-t-yellow-800","border-t-yellow-900","border-t-yellow-950",
  "border-t-lime-50","border-t-lime-100","border-t-lime-200","border-t-lime-300","border-t-lime-400","border-t-lime-500","border-t-lime-600","border-t-lime-700","border-t-lime-800","border-t-lime-900","border-t-lime-950",
  "border-t-green-50","border-t-green-100","border-t-green-200","border-t-green-300","border-t-green-400","border-t-green-500","border-t-green-600","border-t-green-700","border-t-green-800","border-t-green-900","border-t-green-950",
  "border-t-emerald-50","border-t-emerald-100","border-t-emerald-200","border-t-emerald-300","border-t-emerald-400","border-t-emerald-500","border-t-emerald-600","border-t-emerald-700","border-t-emerald-800","border-t-emerald-900","border-t-emerald-950",
  "border-t-teal-50","border-t-teal-100","border-t-teal-200","border-t-teal-300","border-t-teal-400","border-t-teal-500","border-t-teal-600","border-t-teal-700","border-t-teal-800","border-t-teal-900","border-t-teal-950",
  "border-t-cyan-50","border-t-cyan-100","border-t-cyan-200","border-t-cyan-300","border-t-cyan-400","border-t-cyan-500","border-t-cyan-600","border-t-cyan-700","border-t-cyan-800","border-t-cyan-900","border-t-cyan-950",
  "border-t-sky-50","border-t-sky-100","border-t-sky-200","border-t-sky-300","border-t-sky-400","border-t-sky-500","border-t-sky-600","border-t-sky-700","border-t-sky-800","border-t-sky-900","border-t-sky-950",
  "border-t-blue-50","border-t-blue-100","border-t-blue-200","border-t-blue-300","border-t-blue-400","border-t-blue-500","border-t-blue-600","border-t-blue-700","border-t-blue-800","border-t-blue-900","border-t-blue-950",
  "border-t-indigo-50","border-t-indigo-100","border-t-indigo-200","border-t-indigo-300","border-t-indigo-400","border-t-indigo-500","border-t-indigo-600","border-t-indigo-700","border-t-indigo-800","border-t-indigo-900","border-t-indigo-950",
  "border-t-violet-50","border-t-violet-100","border-t-violet-200","border-t-violet-300","border-t-violet-400","border-t-violet-500","border-t-violet-600","border-t-violet-700","border-t-violet-800","border-t-violet-900","border-t-violet-950",
  "border-t-purple-50","border-t-purple-100","border-t-purple-200","border-t-purple-300","border-t-purple-400","border-t-purple-500","border-t-purple-600","border-t-purple-700","border-t-purple-800","border-t-purple-900","border-t-purple-950",
  "border-t-fuchsia-50","border-t-fuchsia-100","border-t-fuchsia-200","border-t-fuchsia-300","border-t-fuchsia-400","border-t-fuchsia-500","border-t-fuchsia-600","border-t-fuchsia-700","border-t-fuchsia-800","border-t-fuchsia-900","border-t-fuchsia-950",
  "border-t-pink-50","border-t-pink-100","border-t-pink-200","border-t-pink-300","border-t-pink-400","border-t-pink-500","border-t-pink-600","border-t-pink-700","border-t-pink-800","border-t-pink-900","border-t-pink-950",
  "border-t-rose-50","border-t-rose-100","border-t-rose-200","border-t-rose-300","border-t-rose-400","border-t-rose-500","border-t-rose-600","border-t-rose-700","border-t-rose-800","border-t-rose-900","border-t-rose-950",


  "border-r-inherit","border-r-current","border-r-transparent","border-r-black","border-r-white",
  "border-r-slate-50","border-r-slate-100","border-r-slate-200","border-r-slate-300","border-r-slate-400","border-r-slate-500","border-r-slate-600","border-r-slate-700","border-r-slate-800","border-r-slate-900","border-r-slate-950",
  "border-r-gray-50","border-r-gray-100","border-r-gray-200","border-r-gray-300","border-r-gray-400","border-r-gray-500","border-r-gray-600","border-r-gray-700","border-r-gray-800","border-r-gray-900","border-r-gray-950",
  "border-r-zinc-50","border-r-zinc-100","border-r-zinc-200","border-r-zinc-300","border-r-zinc-400","border-r-zinc-500","border-r-zinc-600","border-r-zinc-700","border-r-zinc-800","border-r-zinc-900","border-r-zinc-950",
  "border-r-neutral-50","border-r-neutral-100","border-r-neutral-200","border-r-neutral-300","border-r-neutral-400","border-r-neutral-500","border-r-neutral-600","border-r-neutral-700","border-r-neutral-800","border-r-neutral-900","border-r-neutral-950",
  "border-r-stone-50","border-r-stone-100","border-r-stone-200","border-r-stone-300","border-r-stone-400","border-r-stone-500","border-r-stone-600","border-r-stone-700","border-r-stone-800","border-r-stone-900","border-r-stone-950",
  "border-r-red-50","border-r-red-100","border-r-red-200","border-r-red-300","border-r-red-400","border-r-red-500","border-r-red-600","border-r-red-700","border-r-red-800","border-r-red-900","border-r-red-950",
  "border-r-orange-50","border-r-orange-100","border-r-orange-200","border-r-orange-300","border-r-orange-400","border-r-orange-500","border-r-orange-600","border-r-orange-700","border-r-orange-800","border-r-orange-900","border-r-orange-950",
  "border-r-amber-50","border-r-amber-100","border-r-amber-200","border-r-amber-300","border-r-amber-400","border-r-amber-500","border-r-amber-600","border-r-amber-700","border-r-amber-800","border-r-amber-900","border-r-amber-950",
  "border-r-yellow-50","border-r-yellow-100","border-r-yellow-200","border-r-yellow-300","border-r-yellow-400","border-r-yellow-500","border-r-yellow-600","border-r-yellow-700","border-r-yellow-800","border-r-yellow-900","border-r-yellow-950",
  "border-r-lime-50","border-r-lime-100","border-r-lime-200","border-r-lime-300","border-r-lime-400","border-r-lime-500","border-r-lime-600","border-r-lime-700","border-r-lime-800","border-r-lime-900","border-r-lime-950",
  "border-r-green-50","border-r-green-100","border-r-green-200","border-r-green-300","border-r-green-400","border-r-green-500","border-r-green-600","border-r-green-700","border-r-green-800","border-r-green-900","border-r-green-950",
  "border-r-emerald-50","border-r-emerald-100","border-r-emerald-200","border-r-emerald-300","border-r-emerald-400","border-r-emerald-500","border-r-emerald-600","border-r-emerald-700","border-r-emerald-800","border-r-emerald-900","border-r-emerald-950",
  "border-r-teal-50","border-r-teal-100","border-r-teal-200","border-r-teal-300","border-r-teal-400","border-r-teal-500","border-r-teal-600","border-r-teal-700","border-r-teal-800","border-r-teal-900","border-r-teal-950",
  "border-r-cyan-50","border-r-cyan-100","border-r-cyan-200","border-r-cyan-300","border-r-cyan-400","border-r-cyan-500","border-r-cyan-600","border-r-cyan-700","border-r-cyan-800","border-r-cyan-900","border-r-cyan-950",
  "border-r-sky-50","border-r-sky-100","border-r-sky-200","border-r-sky-300","border-r-sky-400","border-r-sky-500","border-r-sky-600","border-r-sky-700","border-r-sky-800","border-r-sky-900","border-r-sky-950",
  "border-r-blue-50","border-r-blue-100","border-r-blue-200","border-r-blue-300","border-r-blue-400","border-r-blue-500","border-r-blue-600","border-r-blue-700","border-r-blue-800","border-r-blue-900","border-r-blue-950",
  "border-r-indigo-50","border-r-indigo-100","border-r-indigo-200","border-r-indigo-300","border-r-indigo-400","border-r-indigo-500","border-r-indigo-600","border-r-indigo-700","border-r-indigo-800","border-r-indigo-900","border-r-indigo-950",
  "border-r-violet-50","border-r-violet-100","border-r-violet-200","border-r-violet-300","border-r-violet-400","border-r-violet-500","border-r-violet-600","border-r-violet-700","border-r-violet-800","border-r-violet-900","border-r-violet-950",
  "border-r-purple-50","border-r-purple-100","border-r-purple-200","border-r-purple-300","border-r-purple-400","border-r-purple-500","border-r-purple-600","border-r-purple-700","border-r-purple-800","border-r-purple-900","border-r-purple-950",
  "border-r-fuchsia-50","border-r-fuchsia-100","border-r-fuchsia-200","border-r-fuchsia-300","border-r-fuchsia-400","border-r-fuchsia-500","border-r-fuchsia-600","border-r-fuchsia-700","border-r-fuchsia-800","border-r-fuchsia-900","border-r-fuchsia-950",
  "border-r-pink-50","border-r-pink-100","border-r-pink-200","border-r-pink-300","border-r-pink-400","border-r-pink-500","border-r-pink-600","border-r-pink-700","border-r-pink-800","border-r-pink-900","border-r-pink-950",
  "border-r-rose-50","border-r-rose-100","border-r-rose-200","border-r-rose-300","border-r-rose-400","border-r-rose-500","border-r-rose-600","border-r-rose-700","border-r-rose-800","border-r-rose-900","border-r-rose-950",


  "border-b-inherit","border-b-current","border-b-transparent","border-b-black","border-b-white",
  "border-b-slate-50","border-b-slate-100","border-b-slate-200","border-b-slate-300","border-b-slate-400","border-b-slate-500","border-b-slate-600","border-b-slate-700","border-b-slate-800","border-b-slate-900","border-b-slate-950",
  "border-b-gray-50","border-b-gray-100","border-b-gray-200","border-b-gray-300","border-b-gray-400","border-b-gray-500","border-b-gray-600","border-b-gray-700","border-b-gray-800","border-b-gray-900","border-b-gray-950",
  "border-b-zinc-50","border-b-zinc-100","border-b-zinc-200","border-b-zinc-300","border-b-zinc-400","border-b-zinc-500","border-b-zinc-600","border-b-zinc-700","border-b-zinc-800","border-b-zinc-900","border-b-zinc-950",
  "border-b-neutral-50","border-b-neutral-100","border-b-neutral-200","border-b-neutral-300","border-b-neutral-400","border-b-neutral-500","border-b-neutral-600","border-b-neutral-700","border-b-neutral-800","border-b-neutral-900","border-b-neutral-950",
  "border-b-stone-50","border-b-stone-100","border-b-stone-200","border-b-stone-300","border-b-stone-400","border-b-stone-500","border-b-stone-600","border-b-stone-700","border-b-stone-800","border-b-stone-900","border-b-stone-950",
  "border-b-red-50","border-b-red-100","border-b-red-200","border-b-red-300","border-b-red-400","border-b-red-500","border-b-red-600","border-b-red-700","border-b-red-800","border-b-red-900","border-b-red-950",
  "border-b-orange-50","border-b-orange-100","border-b-orange-200","border-b-orange-300","border-b-orange-400","border-b-orange-500","border-b-orange-600","border-b-orange-700","border-b-orange-800","border-b-orange-900","border-b-orange-950",
  "border-b-amber-50","border-b-amber-100","border-b-amber-200","border-b-amber-300","border-b-amber-400","border-b-amber-500","border-b-amber-600","border-b-amber-700","border-b-amber-800","border-b-amber-900","border-b-amber-950",
  "border-b-yellow-50","border-b-yellow-100","border-b-yellow-200","border-b-yellow-300","border-b-yellow-400","border-b-yellow-500","border-b-yellow-600","border-b-yellow-700","border-b-yellow-800","border-b-yellow-900","border-b-yellow-950",
  "border-b-lime-50","border-b-lime-100","border-b-lime-200","border-b-lime-300","border-b-lime-400","border-b-lime-500","border-b-lime-600","border-b-lime-700","border-b-lime-800","border-b-lime-900","border-b-lime-950",
  "border-b-green-50","border-b-green-100","border-b-green-200","border-b-green-300","border-b-green-400","border-b-green-500","border-b-green-600","border-b-green-700","border-b-green-800","border-b-green-900","border-b-green-950",
  "border-b-emerald-50","border-b-emerald-100","border-b-emerald-200","border-b-emerald-300","border-b-emerald-400","border-b-emerald-500","border-b-emerald-600","border-b-emerald-700","border-b-emerald-800","border-b-emerald-900","border-b-emerald-950",
  "border-b-teal-50","border-b-teal-100","border-b-teal-200","border-b-teal-300","border-b-teal-400","border-b-teal-500","border-b-teal-600","border-b-teal-700","border-b-teal-800","border-b-teal-900","border-b-teal-950",
  "border-b-cyan-50","border-b-cyan-100","border-b-cyan-200","border-b-cyan-300","border-b-cyan-400","border-b-cyan-500","border-b-cyan-600","border-b-cyan-700","border-b-cyan-800","border-b-cyan-900","border-b-cyan-950",
  "border-b-sky-50","border-b-sky-100","border-b-sky-200","border-b-sky-300","border-b-sky-400","border-b-sky-500","border-b-sky-600","border-b-sky-700","border-b-sky-800","border-b-sky-900","border-b-sky-950",
  "border-b-blue-50","border-b-blue-100","border-b-blue-200","border-b-blue-300","border-b-blue-400","border-b-blue-500","border-b-blue-600","border-b-blue-700","border-b-blue-800","border-b-blue-900","border-b-blue-950",
  "border-b-indigo-50","border-b-indigo-100","border-b-indigo-200","border-b-indigo-300","border-b-indigo-400","border-b-indigo-500","border-b-indigo-600","border-b-indigo-700","border-b-indigo-800","border-b-indigo-900","border-b-indigo-950",
  "border-b-violet-50","border-b-violet-100","border-b-violet-200","border-b-violet-300","border-b-violet-400","border-b-violet-500","border-b-violet-600","border-b-violet-700","border-b-violet-800","border-b-violet-900","border-b-violet-950",
  "border-b-purple-50","border-b-purple-100","border-b-purple-200","border-b-purple-300","border-b-purple-400","border-b-purple-500","border-b-purple-600","border-b-purple-700","border-b-purple-800","border-b-purple-900","border-b-purple-950",
  "border-b-fuchsia-50","border-b-fuchsia-100","border-b-fuchsia-200","border-b-fuchsia-300","border-b-fuchsia-400","border-b-fuchsia-500","border-b-fuchsia-600","border-b-fuchsia-700","border-b-fuchsia-800","border-b-fuchsia-900","border-b-fuchsia-950",
  "border-b-pink-50","border-b-pink-100","border-b-pink-200","border-b-pink-300","border-b-pink-400","border-b-pink-500","border-b-pink-600","border-b-pink-700","border-b-pink-800","border-b-pink-900","border-b-pink-950",
  "border-b-rose-50","border-b-rose-100","border-b-rose-200","border-b-rose-300","border-b-rose-400","border-b-rose-500","border-b-rose-600","border-b-rose-700","border-b-rose-800","border-b-rose-900","border-b-rose-950",


  "border-l-inherit","border-l-current","border-l-transparent","border-l-black","border-l-white",
  "border-l-slate-50","border-l-slate-100","border-l-slate-200","border-l-slate-300","border-l-slate-400","border-l-slate-500","border-l-slate-600","border-l-slate-700","border-l-slate-800","border-l-slate-900","border-l-slate-950",
  "border-l-gray-50","border-l-gray-100","border-l-gray-200","border-l-gray-300","border-l-gray-400","border-l-gray-500","border-l-gray-600","border-l-gray-700","border-l-gray-800","border-l-gray-900","border-l-gray-950",
  "border-l-zinc-50","border-l-zinc-100","border-l-zinc-200","border-l-zinc-300","border-l-zinc-400","border-l-zinc-500","border-l-zinc-600","border-l-zinc-700","border-l-zinc-800","border-l-zinc-900","border-l-zinc-950",
  "border-l-neutral-50","border-l-neutral-100","border-l-neutral-200","border-l-neutral-300","border-l-neutral-400","border-l-neutral-500","border-l-neutral-600","border-l-neutral-700","border-l-neutral-800","border-l-neutral-900","border-l-neutral-950",
  "border-l-stone-50","border-l-stone-100","border-l-stone-200","border-l-stone-300","border-l-stone-400","border-l-stone-500","border-l-stone-600","border-l-stone-700","border-l-stone-800","border-l-stone-900","border-l-stone-950",
  "border-l-red-50","border-l-red-100","border-l-red-200","border-l-red-300","border-l-red-400","border-l-red-500","border-l-red-600","border-l-red-700","border-l-red-800","border-l-red-900","border-l-red-950",
  "border-l-orange-50","border-l-orange-100","border-l-orange-200","border-l-orange-300","border-l-orange-400","border-l-orange-500","border-l-orange-600","border-l-orange-700","border-l-orange-800","border-l-orange-900","border-l-orange-950",
  "border-l-amber-50","border-l-amber-100","border-l-amber-200","border-l-amber-300","border-l-amber-400","border-l-amber-500","border-l-amber-600","border-l-amber-700","border-l-amber-800","border-l-amber-900","border-l-amber-950",
  "border-l-yellow-50","border-l-yellow-100","border-l-yellow-200","border-l-yellow-300","border-l-yellow-400","border-l-yellow-500","border-l-yellow-600","border-l-yellow-700","border-l-yellow-800","border-l-yellow-900","border-l-yellow-950",
  "border-l-lime-50","border-l-lime-100","border-l-lime-200","border-l-lime-300","border-l-lime-400","border-l-lime-500","border-l-lime-600","border-l-lime-700","border-l-lime-800","border-l-lime-900","border-l-lime-950",
  "border-l-green-50","border-l-green-100","border-l-green-200","border-l-green-300","border-l-green-400","border-l-green-500","border-l-green-600","border-l-green-700","border-l-green-800","border-l-green-900","border-l-green-950",
  "border-l-emerald-50","border-l-emerald-100","border-l-emerald-200","border-l-emerald-300","border-l-emerald-400","border-l-emerald-500","border-l-emerald-600","border-l-emerald-700","border-l-emerald-800","border-l-emerald-900","border-l-emerald-950",
  "border-l-teal-50","border-l-teal-100","border-l-teal-200","border-l-teal-300","border-l-teal-400","border-l-teal-500","border-l-teal-600","border-l-teal-700","border-l-teal-800","border-l-teal-900","border-l-teal-950",
  "border-l-cyan-50","border-l-cyan-100","border-l-cyan-200","border-l-cyan-300","border-l-cyan-400","border-l-cyan-500","border-l-cyan-600","border-l-cyan-700","border-l-cyan-800","border-l-cyan-900","border-l-cyan-950",
  "border-l-sky-50","border-l-sky-100","border-l-sky-200","border-l-sky-300","border-l-sky-400","border-l-sky-500","border-l-sky-600","border-l-sky-700","border-l-sky-800","border-l-sky-900","border-l-sky-950",
  "border-l-blue-50","border-l-blue-100","border-l-blue-200","border-l-blue-300","border-l-blue-400","border-l-blue-500","border-l-blue-600","border-l-blue-700","border-l-blue-800","border-l-blue-900","border-l-blue-950",
  "border-l-indigo-50","border-l-indigo-100","border-l-indigo-200","border-l-indigo-300","border-l-indigo-400","border-l-indigo-500","border-l-indigo-600","border-l-indigo-700","border-l-indigo-800","border-l-indigo-900","border-l-indigo-950",
  "border-l-violet-50","border-l-violet-100","border-l-violet-200","border-l-violet-300","border-l-violet-400","border-l-violet-500","border-l-violet-600","border-l-violet-700","border-l-violet-800","border-l-violet-900","border-l-violet-950",
  "border-l-purple-50","border-l-purple-100","border-l-purple-200","border-l-purple-300","border-l-purple-400","border-l-purple-500","border-l-purple-600","border-l-purple-700","border-l-purple-800","border-l-purple-900","border-l-purple-950",
  "border-l-fuchsia-50","border-l-fuchsia-100","border-l-fuchsia-200","border-l-fuchsia-300","border-l-fuchsia-400","border-l-fuchsia-500","border-l-fuchsia-600","border-l-fuchsia-700","border-l-fuchsia-800","border-l-fuchsia-900","border-l-fuchsia-950",
  "border-l-pink-50","border-l-pink-100","border-l-pink-200","border-l-pink-300","border-l-pink-400","border-l-pink-500","border-l-pink-600","border-l-pink-700","border-l-pink-800","border-l-pink-900","border-l-pink-950",
  "border-l-rose-50","border-l-rose-100","border-l-rose-200","border-l-rose-300","border-l-rose-400","border-l-rose-500","border-l-rose-600","border-l-rose-700","border-l-rose-800","border-l-rose-900","border-l-rose-950",

  /* Border Style */
  "border-solid","border-dashed","border-dotted","border-double","border-hidden","border-none",

  /* Divide Width */
  "divide-x-0","divide-x-2","divide-x-4","divide-x-8","divide-x","divide-x-reverse",
  "divide-y-0","divide-y-2","divide-y-4","divide-y-8","divide-y","divide-y-reverse",

  /* Divide Color */
  "divide-inherit","divide-current","divide-transparent","divide-black","divide-white",
  "divide-slate-50","divide-slate-100","divide-slate-200","divide-slate-300","divide-slate-400","divide-slate-500","divide-slate-600","divide-slate-700","divide-slate-800","divide-slate-900","divide-slate-950",
  "divide-gray-50","divide-gray-100","divide-gray-200","divide-gray-300","divide-gray-400","divide-gray-500","divide-gray-600","divide-gray-700","divide-gray-800","divide-gray-900","divide-gray-950",
  "divide-zinc-50","divide-zinc-100","divide-zinc-200","divide-zinc-300","divide-zinc-400","divide-zinc-500","divide-zinc-600","divide-zinc-700","divide-zinc-800","divide-zinc-900","divide-zinc-950",
  "divide-neutral-50","divide-neutral-100","divide-neutral-200","divide-neutral-300","divide-neutral-400","divide-neutral-500","divide-neutral-600","divide-neutral-700","divide-neutral-800","divide-neutral-900","divide-neutral-950",
  "divide-stone-50","divide-stone-100","divide-stone-200","divide-stone-300","divide-stone-400","divide-stone-500","divide-stone-600","divide-stone-700","divide-stone-800","divide-stone-900","divide-stone-950",
  "divide-red-50","divide-red-100","divide-red-200","divide-red-300","divide-red-400","divide-red-500","divide-red-600","divide-red-700","divide-red-800","divide-red-900","divide-red-950",
  "divide-orange-50","divide-orange-100","divide-orange-200","divide-orange-300","divide-orange-400","divide-orange-500","divide-orange-600","divide-orange-700","divide-orange-800","divide-orange-900","divide-orange-950",
  "divide-amber-50","divide-amber-100","divide-amber-200","divide-amber-300","divide-amber-400","divide-amber-500","divide-amber-600","divide-amber-700","divide-amber-800","divide-amber-900","divide-amber-950",
  "divide-yellow-50","divide-yellow-100","divide-yellow-200","divide-yellow-300","divide-yellow-400","divide-yellow-500","divide-yellow-600","divide-yellow-700","divide-yellow-800","divide-yellow-900","divide-yellow-950",
  "divide-lime-50","divide-lime-100","divide-lime-200","divide-lime-300","divide-lime-400","divide-lime-500","divide-lime-600","divide-lime-700","divide-lime-800","divide-lime-900","divide-lime-950",
  "divide-green-50","divide-green-100","divide-green-200","divide-green-300","divide-green-400","divide-green-500","divide-green-600","divide-green-700","divide-green-800","divide-green-900","divide-green-950",
  "divide-emerald-50","divide-emerald-100","divide-emerald-200","divide-emerald-300","divide-emerald-400","divide-emerald-500","divide-emerald-600","divide-emerald-700","divide-emerald-800","divide-emerald-900","divide-emerald-950",
  "divide-teal-50","divide-teal-100","divide-teal-200","divide-teal-300","divide-teal-400","divide-teal-500","divide-teal-600","divide-teal-700","divide-teal-800","divide-teal-900","divide-teal-950",
  "divide-cyan-50","divide-cyan-100","divide-cyan-200","divide-cyan-300","divide-cyan-400","divide-cyan-500","divide-cyan-600","divide-cyan-700","divide-cyan-800","divide-cyan-900","divide-cyan-950",
  "divide-sky-50","divide-sky-100","divide-sky-200","divide-sky-300","divide-sky-400","divide-sky-500","divide-sky-600","divide-sky-700","divide-sky-800","divide-sky-900","divide-sky-950",
  "divide-blue-50","divide-blue-100","divide-blue-200","divide-blue-300","divide-blue-400","divide-blue-500","divide-blue-600","divide-blue-700","divide-blue-800","divide-blue-900","divide-blue-950",
  "divide-indigo-50","divide-indigo-100","divide-indigo-200","divide-indigo-300","divide-indigo-400","divide-indigo-500","divide-indigo-600","divide-indigo-700","divide-indigo-800","divide-indigo-900","divide-indigo-950",
  "divide-violet-50","divide-violet-100","divide-violet-200","divide-violet-300","divide-violet-400","divide-violet-500","divide-violet-600","divide-violet-700","divide-violet-800","divide-violet-900","divide-violet-950",
  "divide-purple-50","divide-purple-100","divide-purple-200","divide-purple-300","divide-purple-400","divide-purple-500","divide-purple-600","divide-purple-700","divide-purple-800","divide-purple-900","divide-purple-950",
  "divide-fuchsia-50","divide-fuchsia-100","divide-fuchsia-200","divide-fuchsia-300","divide-fuchsia-400","divide-fuchsia-500","divide-fuchsia-600","divide-fuchsia-700","divide-fuchsia-800","divide-fuchsia-900","divide-fuchsia-950",
  "divide-pink-50","divide-pink-100","divide-pink-200","divide-pink-300","divide-pink-400","divide-pink-500","divide-pink-600","divide-pink-700","divide-pink-800","divide-pink-900","divide-pink-950",
  "divide-rose-50","divide-rose-100","divide-rose-200","divide-rose-300","divide-rose-400","divide-rose-500","divide-rose-600","divide-rose-700","divide-rose-800","divide-rose-900","divide-rose-950",

  /* Divide Style */
  "divide-solid","divide-dashed","divide-dotted","divide-double","divide-none",

  /* Outline Width */
  "outline-0","outline-1","outline-2","outline-4","outline-8",

  /* Outline Color */
  "outline-inherit","outline-current","outline-transparent","outline-black","outline-white",
  "outline-slate-50","outline-slate-100","outline-slate-200","outline-slate-300","outline-slate-400","outline-slate-500","outline-slate-600","outline-slate-700","outline-slate-800","outline-slate-900","outline-slate-950",
  "outline-gray-50","outline-gray-100","outline-gray-200","outline-gray-300","outline-gray-400","outline-gray-500","outline-gray-600","outline-gray-700","outline-gray-800","outline-gray-900","outline-gray-950",
  "outline-zinc-50","outline-zinc-100","outline-zinc-200","outline-zinc-300","outline-zinc-400","outline-zinc-500","outline-zinc-600","outline-zinc-700","outline-zinc-800","outline-zinc-900","outline-zinc-950",
  "outline-neutral-50","outline-neutral-100","outline-neutral-200","outline-neutral-300","outline-neutral-400","outline-neutral-500","outline-neutral-600","outline-neutral-700","outline-neutral-800","outline-neutral-900","outline-neutral-950",
  "outline-stone-50","outline-stone-100","outline-stone-200","outline-stone-300","outline-stone-400","outline-stone-500","outline-stone-600","outline-stone-700","outline-stone-800","outline-stone-900","outline-stone-950",
  "outline-red-50","outline-red-100","outline-red-200","outline-red-300","outline-red-400","outline-red-500","outline-red-600","outline-red-700","outline-red-800","outline-red-900","outline-red-950",
  "outline-orange-50","outline-orange-100","outline-orange-200","outline-orange-300","outline-orange-400","outline-orange-500","outline-orange-600","outline-orange-700","outline-orange-800","outline-orange-900","outline-orange-950",
  "outline-amber-50","outline-amber-100","outline-amber-200","outline-amber-300","outline-amber-400","outline-amber-500","outline-amber-600","outline-amber-700","outline-amber-800","outline-amber-900","outline-amber-950",
  "outline-yellow-50","outline-yellow-100","outline-yellow-200","outline-yellow-300","outline-yellow-400","outline-yellow-500","outline-yellow-600","outline-yellow-700","outline-yellow-800","outline-yellow-900","outline-yellow-950",
  "outline-lime-50","outline-lime-100","outline-lime-200","outline-lime-300","outline-lime-400","outline-lime-500","outline-lime-600","outline-lime-700","outline-lime-800","outline-lime-900","outline-lime-950",
  "outline-green-50","outline-green-100","outline-green-200","outline-green-300","outline-green-400","outline-green-500","outline-green-600","outline-green-700","outline-green-800","outline-green-900","outline-green-950",
  "outline-emerald-50","outline-emerald-100","outline-emerald-200","outline-emerald-300","outline-emerald-400","outline-emerald-500","outline-emerald-600","outline-emerald-700","outline-emerald-800","outline-emerald-900","outline-emerald-950",
  "outline-teal-50","outline-teal-100","outline-teal-200","outline-teal-300","outline-teal-400","outline-teal-500","outline-teal-600","outline-teal-700","outline-teal-800","outline-teal-900","outline-teal-950",
  "outline-cyan-50","outline-cyan-100","outline-cyan-200","outline-cyan-300","outline-cyan-400","outline-cyan-500","outline-cyan-600","outline-cyan-700","outline-cyan-800","outline-cyan-900","outline-cyan-950",
  "outline-sky-50","outline-sky-100","outline-sky-200","outline-sky-300","outline-sky-400","outline-sky-500","outline-sky-600","outline-sky-700","outline-sky-800","outline-sky-900","outline-sky-950",
  "outline-blue-50","outline-blue-100","outline-blue-200","outline-blue-300","outline-blue-400","outline-blue-500","outline-blue-600","outline-blue-700","outline-blue-800","outline-blue-900","outline-blue-950",
  "outline-indigo-50","outline-indigo-100","outline-indigo-200","outline-indigo-300","outline-indigo-400","outline-indigo-500","outline-indigo-600","outline-indigo-700","outline-indigo-800","outline-indigo-900","outline-indigo-950",
  "outline-violet-50","outline-violet-100","outline-violet-200","outline-violet-300","outline-violet-400","outline-violet-500","outline-violet-600","outline-violet-700","outline-violet-800","outline-violet-900","outline-violet-950",
  "outline-purple-50","outline-purple-100","outline-purple-200","outline-purple-300","outline-purple-400","outline-purple-500","outline-purple-600","outline-purple-700","outline-purple-800","outline-purple-900","outline-purple-950",
  "outline-fuchsia-50","outline-fuchsia-100","outline-fuchsia-200","outline-fuchsia-300","outline-fuchsia-400","outline-fuchsia-500","outline-fuchsia-600","outline-fuchsia-700","outline-fuchsia-800","outline-fuchsia-900","outline-fuchsia-950",
  "outline-pink-50","outline-pink-100","outline-pink-200","outline-pink-300","outline-pink-400","outline-pink-500","outline-pink-600","outline-pink-700","outline-pink-800","outline-pink-900","outline-pink-950",
  "outline-rose-50","outline-rose-100","outline-rose-200","outline-rose-300","outline-rose-400","outline-rose-500","outline-rose-600","outline-rose-700","outline-rose-800","outline-rose-900","outline-rose-950",

  /* Outline Style */
  "outline-none","outline","outline-dashed","outline-dotted","outline-double",

  /* Outline Offset */
  "outline-offset-0","outline-offset-1","outline-offset-2","outline-offset-4","outline-offset-8",

  /* Ring Width */
  "ring-0","ring-1","ring-2","ring","ring-4","ring-8","ring-inset",

  /* Ring Color */
  "ring-inherit","ring-current","ring-transparent","ring-black","ring-white",
  "ring-slate-50","ring-slate-100","ring-slate-200","ring-slate-300","ring-slate-400","ring-slate-500","ring-slate-600","ring-slate-700","ring-slate-800","ring-slate-900","ring-slate-950",
  "ring-gray-50","ring-gray-100","ring-gray-200","ring-gray-300","ring-gray-400","ring-gray-500","ring-gray-600","ring-gray-700","ring-gray-800","ring-gray-900","ring-gray-950",
  "ring-zinc-50","ring-zinc-100","ring-zinc-200","ring-zinc-300","ring-zinc-400","ring-zinc-500","ring-zinc-600","ring-zinc-700","ring-zinc-800","ring-zinc-900","ring-zinc-950",
  "ring-neutral-50","ring-neutral-100","ring-neutral-200","ring-neutral-300","ring-neutral-400","ring-neutral-500","ring-neutral-600","ring-neutral-700","ring-neutral-800","ring-neutral-900","ring-neutral-950",
  "ring-stone-50","ring-stone-100","ring-stone-200","ring-stone-300","ring-stone-400","ring-stone-500","ring-stone-600","ring-stone-700","ring-stone-800","ring-stone-900","ring-stone-950",
  "ring-red-50","ring-red-100","ring-red-200","ring-red-300","ring-red-400","ring-red-500","ring-red-600","ring-red-700","ring-red-800","ring-red-900","ring-red-950",
  "ring-orange-50","ring-orange-100","ring-orange-200","ring-orange-300","ring-orange-400","ring-orange-500","ring-orange-600","ring-orange-700","ring-orange-800","ring-orange-900","ring-orange-950",
  "ring-amber-50","ring-amber-100","ring-amber-200","ring-amber-300","ring-amber-400","ring-amber-500","ring-amber-600","ring-amber-700","ring-amber-800","ring-amber-900","ring-amber-950",
  "ring-yellow-50","ring-yellow-100","ring-yellow-200","ring-yellow-300","ring-yellow-400","ring-yellow-500","ring-yellow-600","ring-yellow-700","ring-yellow-800","ring-yellow-900","ring-yellow-950",
  "ring-lime-50","ring-lime-100","ring-lime-200","ring-lime-300","ring-lime-400","ring-lime-500","ring-lime-600","ring-lime-700","ring-lime-800","ring-lime-900","ring-lime-950",
  "ring-green-50","ring-green-100","ring-green-200","ring-green-300","ring-green-400","ring-green-500","ring-green-600","ring-green-700","ring-green-800","ring-green-900","ring-green-950",
  "ring-emerald-50","ring-emerald-100","ring-emerald-200","ring-emerald-300","ring-emerald-400","ring-emerald-500","ring-emerald-600","ring-emerald-700","ring-emerald-800","ring-emerald-900","ring-emerald-950",
  "ring-teal-50","ring-teal-100","ring-teal-200","ring-teal-300","ring-teal-400","ring-teal-500","ring-teal-600","ring-teal-700","ring-teal-800","ring-teal-900","ring-teal-950",
  "ring-cyan-50","ring-cyan-100","ring-cyan-200","ring-cyan-300","ring-cyan-400","ring-cyan-500","ring-cyan-600","ring-cyan-700","ring-cyan-800","ring-cyan-900","ring-cyan-950",
  "ring-sky-50","ring-sky-100","ring-sky-200","ring-sky-300","ring-sky-400","ring-sky-500","ring-sky-600","ring-sky-700","ring-sky-800","ring-sky-900","ring-sky-950",
  "ring-blue-50","ring-blue-100","ring-blue-200","ring-blue-300","ring-blue-400","ring-blue-500","ring-blue-600","ring-blue-700","ring-blue-800","ring-blue-900","ring-blue-950",
  "ring-indigo-50","ring-indigo-100","ring-indigo-200","ring-indigo-300","ring-indigo-400","ring-indigo-500","ring-indigo-600","ring-indigo-700","ring-indigo-800","ring-indigo-900","ring-indigo-950",
  "ring-violet-50","ring-violet-100","ring-violet-200","ring-violet-300","ring-violet-400","ring-violet-500","ring-violet-600","ring-violet-700","ring-violet-800","ring-violet-900","ring-violet-950",
  "ring-purple-50","ring-purple-100","ring-purple-200","ring-purple-300","ring-purple-400","ring-purple-500","ring-purple-600","ring-purple-700","ring-purple-800","ring-purple-900","ring-purple-950",
  "ring-fuchsia-50","ring-fuchsia-100","ring-fuchsia-200","ring-fuchsia-300","ring-fuchsia-400","ring-fuchsia-500","ring-fuchsia-600","ring-fuchsia-700","ring-fuchsia-800","ring-fuchsia-900","ring-fuchsia-950",
  "ring-pink-50","ring-pink-100","ring-pink-200","ring-pink-300","ring-pink-400","ring-pink-500","ring-pink-600","ring-pink-700","ring-pink-800","ring-pink-900","ring-pink-950",
  "ring-rose-50","ring-rose-100","ring-rose-200","ring-rose-300","ring-rose-400","ring-rose-500","ring-rose-600","ring-rose-700","ring-rose-800","ring-rose-900","ring-rose-950",

  /* Ring Offset Width */
  "ring-offset-0","ring-offset-1","ring-offset-2","ring-offset-4","ring-offset-8",

  /* Ring Offset Color */
  "ring-offset-inherit","ring-offset-current","ring-offset-transparent","ring-offset-black","ring-offset-white",
  "ring-offset-slate-50","ring-offset-slate-100","ring-offset-slate-200","ring-offset-slate-300","ring-offset-slate-400","ring-offset-slate-500","ring-offset-slate-600","ring-offset-slate-700","ring-offset-slate-800","ring-offset-slate-900","ring-offset-slate-950",
  "ring-offset-gray-50","ring-offset-gray-100","ring-offset-gray-200","ring-offset-gray-300","ring-offset-gray-400","ring-offset-gray-500","ring-offset-gray-600","ring-offset-gray-700","ring-offset-gray-800","ring-offset-gray-900","ring-offset-gray-950",
  "ring-offset-zinc-50","ring-offset-zinc-100","ring-offset-zinc-200","ring-offset-zinc-300","ring-offset-zinc-400","ring-offset-zinc-500","ring-offset-zinc-600","ring-offset-zinc-700","ring-offset-zinc-800","ring-offset-zinc-900","ring-offset-zinc-950",
  "ring-offset-neutral-50","ring-offset-neutral-100","ring-offset-neutral-200","ring-offset-neutral-300","ring-offset-neutral-400","ring-offset-neutral-500","ring-offset-neutral-600","ring-offset-neutral-700","ring-offset-neutral-800","ring-offset-neutral-900","ring-offset-neutral-950",
  "ring-offset-stone-50","ring-offset-stone-100","ring-offset-stone-200","ring-offset-stone-300","ring-offset-stone-400","ring-offset-stone-500","ring-offset-stone-600","ring-offset-stone-700","ring-offset-stone-800","ring-offset-stone-900","ring-offset-stone-950",
  "ring-offset-red-50","ring-offset-red-100","ring-offset-red-200","ring-offset-red-300","ring-offset-red-400","ring-offset-red-500","ring-offset-red-600","ring-offset-red-700","ring-offset-red-800","ring-offset-red-900","ring-offset-red-950",
  "ring-offset-orange-50","ring-offset-orange-100","ring-offset-orange-200","ring-offset-orange-300","ring-offset-orange-400","ring-offset-orange-500","ring-offset-orange-600","ring-offset-orange-700","ring-offset-orange-800","ring-offset-orange-900","ring-offset-orange-950",
  "ring-offset-amber-50","ring-offset-amber-100","ring-offset-amber-200","ring-offset-amber-300","ring-offset-amber-400","ring-offset-amber-500","ring-offset-amber-600","ring-offset-amber-700","ring-offset-amber-800","ring-offset-amber-900","ring-offset-amber-950",
  "ring-offset-yellow-50","ring-offset-yellow-100","ring-offset-yellow-200","ring-offset-yellow-300","ring-offset-yellow-400","ring-offset-yellow-500","ring-offset-yellow-600","ring-offset-yellow-700","ring-offset-yellow-800","ring-offset-yellow-900","ring-offset-yellow-950",
  "ring-offset-lime-50","ring-offset-lime-100","ring-offset-lime-200","ring-offset-lime-300","ring-offset-lime-400","ring-offset-lime-500","ring-offset-lime-600","ring-offset-lime-700","ring-offset-lime-800","ring-offset-lime-900","ring-offset-lime-950",
  "ring-offset-green-50","ring-offset-green-100","ring-offset-green-200","ring-offset-green-300","ring-offset-green-400","ring-offset-green-500","ring-offset-green-600","ring-offset-green-700","ring-offset-green-800","ring-offset-green-900","ring-offset-green-950",
  "ring-offset-emerald-50","ring-offset-emerald-100","ring-offset-emerald-200","ring-offset-emerald-300","ring-offset-emerald-400","ring-offset-emerald-500","ring-offset-emerald-600","ring-offset-emerald-700","ring-offset-emerald-800","ring-offset-emerald-900","ring-offset-emerald-950",
  "ring-offset-teal-50","ring-offset-teal-100","ring-offset-teal-200","ring-offset-teal-300","ring-offset-teal-400","ring-offset-teal-500","ring-offset-teal-600","ring-offset-teal-700","ring-offset-teal-800","ring-offset-teal-900","ring-offset-teal-950",
  "ring-offset-cyan-50","ring-offset-cyan-100","ring-offset-cyan-200","ring-offset-cyan-300","ring-offset-cyan-400","ring-offset-cyan-500","ring-offset-cyan-600","ring-offset-cyan-700","ring-offset-cyan-800","ring-offset-cyan-900","ring-offset-cyan-950",
  "ring-offset-sky-50","ring-offset-sky-100","ring-offset-sky-200","ring-offset-sky-300","ring-offset-sky-400","ring-offset-sky-500","ring-offset-sky-600","ring-offset-sky-700","ring-offset-sky-800","ring-offset-sky-900","ring-offset-sky-950",
  "ring-offset-blue-50","ring-offset-blue-100","ring-offset-blue-200","ring-offset-blue-300","ring-offset-blue-400","ring-offset-blue-500","ring-offset-blue-600","ring-offset-blue-700","ring-offset-blue-800","ring-offset-blue-900","ring-offset-blue-950",
  "ring-offset-indigo-50","ring-offset-indigo-100","ring-offset-indigo-200","ring-offset-indigo-300","ring-offset-indigo-400","ring-offset-indigo-500","ring-offset-indigo-600","ring-offset-indigo-700","ring-offset-indigo-800","ring-offset-indigo-900","ring-offset-indigo-950",
  "ring-offset-violet-50","ring-offset-violet-100","ring-offset-violet-200","ring-offset-violet-300","ring-offset-violet-400","ring-offset-violet-500","ring-offset-violet-600","ring-offset-violet-700","ring-offset-violet-800","ring-offset-violet-900","ring-offset-violet-950",
  "ring-offset-purple-50","ring-offset-purple-100","ring-offset-purple-200","ring-offset-purple-300","ring-offset-purple-400","ring-offset-purple-500","ring-offset-purple-600","ring-offset-purple-700","ring-offset-purple-800","ring-offset-purple-900","ring-offset-purple-950",
  "ring-offset-fuchsia-50","ring-offset-fuchsia-100","ring-offset-fuchsia-200","ring-offset-fuchsia-300","ring-offset-fuchsia-400","ring-offset-fuchsia-500","ring-offset-fuchsia-600","ring-offset-fuchsia-700","ring-offset-fuchsia-800","ring-offset-fuchsia-900","ring-offset-fuchsia-950",
  "ring-offset-pink-50","ring-offset-pink-100","ring-offset-pink-200","ring-offset-pink-300","ring-offset-pink-400","ring-offset-pink-500","ring-offset-pink-600","ring-offset-pink-700","ring-offset-pink-800","ring-offset-pink-900","ring-offset-pink-950",
  "ring-offset-rose-50","ring-offset-rose-100","ring-offset-rose-200","ring-offset-rose-300","ring-offset-rose-400","ring-offset-rose-500","ring-offset-rose-600","ring-offset-rose-700","ring-offset-rose-800","ring-offset-rose-900","ring-offset-rose-950",

  // MARK: Effects

  /* Box Shadow */
  "shadow-sm","shadow","shadow-md","shadow-lg","shadow-xl","shadow-2xl","shadow-inner","shadow-none",

  /* Box Shadow Color */
  "shadow-inherit","shadow-current","shadow-transparent","shadow-black","shadow-white",
  "shadow-slate-50","shadow-slate-100","shadow-slate-200","shadow-slate-300","shadow-slate-400","shadow-slate-500","shadow-slate-600","shadow-slate-700","shadow-slate-800","shadow-slate-900","shadow-slate-950",
  "shadow-gray-50","shadow-gray-100","shadow-gray-200","shadow-gray-300","shadow-gray-400","shadow-gray-500","shadow-gray-600","shadow-gray-700","shadow-gray-800","shadow-gray-900","shadow-gray-950",
  "shadow-zinc-50","shadow-zinc-100","shadow-zinc-200","shadow-zinc-300","shadow-zinc-400","shadow-zinc-500","shadow-zinc-600","shadow-zinc-700","shadow-zinc-800","shadow-zinc-900","shadow-zinc-950",
  "shadow-neutral-50","shadow-neutral-100","shadow-neutral-200","shadow-neutral-300","shadow-neutral-400","shadow-neutral-500","shadow-neutral-600","shadow-neutral-700","shadow-neutral-800","shadow-neutral-900","shadow-neutral-950",
  "shadow-stone-50","shadow-stone-100","shadow-stone-200","shadow-stone-300","shadow-stone-400","shadow-stone-500","shadow-stone-600","shadow-stone-700","shadow-stone-800","shadow-stone-900","shadow-stone-950",
  "shadow-red-50","shadow-red-100","shadow-red-200","shadow-red-300","shadow-red-400","shadow-red-500","shadow-red-600","shadow-red-700","shadow-red-800","shadow-red-900","shadow-red-950",
  "shadow-orange-50","shadow-orange-100","shadow-orange-200","shadow-orange-300","shadow-orange-400","shadow-orange-500","shadow-orange-600","shadow-orange-700","shadow-orange-800","shadow-orange-900","shadow-orange-950",
  "shadow-amber-50","shadow-amber-100","shadow-amber-200","shadow-amber-300","shadow-amber-400","shadow-amber-500","shadow-amber-600","shadow-amber-700","shadow-amber-800","shadow-amber-900","shadow-amber-950",
  "shadow-yellow-50","shadow-yellow-100","shadow-yellow-200","shadow-yellow-300","shadow-yellow-400","shadow-yellow-500","shadow-yellow-600","shadow-yellow-700","shadow-yellow-800","shadow-yellow-900","shadow-yellow-950",
  "shadow-lime-50","shadow-lime-100","shadow-lime-200","shadow-lime-300","shadow-lime-400","shadow-lime-500","shadow-lime-600","shadow-lime-700","shadow-lime-800","shadow-lime-900","shadow-lime-950",
  "shadow-green-50","shadow-green-100","shadow-green-200","shadow-green-300","shadow-green-400","shadow-green-500","shadow-green-600","shadow-green-700","shadow-green-800","shadow-green-900","shadow-green-950",
  "shadow-emerald-50","shadow-emerald-100","shadow-emerald-200","shadow-emerald-300","shadow-emerald-400","shadow-emerald-500","shadow-emerald-600","shadow-emerald-700","shadow-emerald-800","shadow-emerald-900","shadow-emerald-950",
  "shadow-teal-50","shadow-teal-100","shadow-teal-200","shadow-teal-300","shadow-teal-400","shadow-teal-500","shadow-teal-600","shadow-teal-700","shadow-teal-800","shadow-teal-900","shadow-teal-950",
  "shadow-cyan-50","shadow-cyan-100","shadow-cyan-200","shadow-cyan-300","shadow-cyan-400","shadow-cyan-500","shadow-cyan-600","shadow-cyan-700","shadow-cyan-800","shadow-cyan-900","shadow-cyan-950",
  "shadow-sky-50","shadow-sky-100","shadow-sky-200","shadow-sky-300","shadow-sky-400","shadow-sky-500","shadow-sky-600","shadow-sky-700","shadow-sky-800","shadow-sky-900","shadow-sky-950",
  "shadow-blue-50","shadow-blue-100","shadow-blue-200","shadow-blue-300","shadow-blue-400","shadow-blue-500","shadow-blue-600","shadow-blue-700","shadow-blue-800","shadow-blue-900","shadow-blue-950",
  "shadow-indigo-50","shadow-indigo-100","shadow-indigo-200","shadow-indigo-300","shadow-indigo-400","shadow-indigo-500","shadow-indigo-600","shadow-indigo-700","shadow-indigo-800","shadow-indigo-900","shadow-indigo-950",
  "shadow-violet-50","shadow-violet-100","shadow-violet-200","shadow-violet-300","shadow-violet-400","shadow-violet-500","shadow-violet-600","shadow-violet-700","shadow-violet-800","shadow-violet-900","shadow-violet-950",
  "shadow-purple-50","shadow-purple-100","shadow-purple-200","shadow-purple-300","shadow-purple-400","shadow-purple-500","shadow-purple-600","shadow-purple-700","shadow-purple-800","shadow-purple-900","shadow-purple-950",
  "shadow-fuchsia-50","shadow-fuchsia-100","shadow-fuchsia-200","shadow-fuchsia-300","shadow-fuchsia-400","shadow-fuchsia-500","shadow-fuchsia-600","shadow-fuchsia-700","shadow-fuchsia-800","shadow-fuchsia-900","shadow-fuchsia-950",
  "shadow-pink-50","shadow-pink-100","shadow-pink-200","shadow-pink-300","shadow-pink-400","shadow-pink-500","shadow-pink-600","shadow-pink-700","shadow-pink-800","shadow-pink-900","shadow-pink-950",
  "shadow-rose-50","shadow-rose-100","shadow-rose-200","shadow-rose-300","shadow-rose-400","shadow-rose-500","shadow-rose-600","shadow-rose-700","shadow-rose-800","shadow-rose-900","shadow-rose-950",

  /* Opacity */
  "opacity-0","opacity-5","opacity-10","opacity-20","opacity-25","opacity-30","opacity-40","opacity-50","opacity-60","opacity-70","opacity-75","opacity-80","opacity-90","opacity-95","opacity-100",

  /* Mix Blend Mode */
  "mix-blend-normal","mix-blend-multiply","mix-blend-screen","mix-blend-overlay","mix-blend-darken","mix-blend-lighten","mix-blend-color-dodge","mix-blend-color-burn","mix-blend-hard-light","mix-blend-soft-light","mix-blend-difference","mix-blend-exclusion","mix-blend-hue","mix-blend-saturation","mix-blend-color","mix-blend-luminosity","mix-blend-plus-lighter",

  /* Background Blend Mode */
  "bg-blend-normal","bg-blend-multiply","bg-blend-screen","bg-blend-overlay","bg-blend-darken","bg-blend-lighten","bg-blend-color-dodge","bg-blend-color-burn","bg-blend-hard-light","bg-blend-soft-light","bg-blend-difference","bg-blend-exclusion","bg-blend-hue","bg-blend-saturation","bg-blend-color","bg-blend-luminosity",


  // MARK: Filters

  /* Blur */
  "blur-none","blur-sm","blur","blur-md","blur-lg","blur-xl","blur-2xl","blur-3xl",

  /* Brightness */
  "brightness-0","brightness-50","brightness-75","brightness-90","brightness-95","brightness-100","brightness-105","brightness-110","brightness-125","brightness-150","brightness-200",

  /* Contrast */
  "contrast-0","contrast-50","contrast-75","contrast-100","contrast-125","contrast-150","contrast-200",

  /* Drop Shadow */
  "drop-shadow-sm","drop-shadow","drop-shadow-md","drop-shadow-lg","drop-shadow-xl","drop-shadow-2xl","drop-shadow-none",

  /* Grayscale */
  "grayscale-0","grayscale",

  /* Hue Rotate */
  "hue-rotate-0","hue-rotate-15","hue-rotate-30","hue-rotate-60","hue-rotate-90","hue-rotate-180",

  /* Invert */
  "invert-0","invert",

  /* Saturate */
  "saturate-0","saturate-50","saturate-100","saturate-150","saturate-200",

  /* Sepia */
  "sepia-0","sepia",

  /* Backdrop Blur */
  "backdrop-blur-none","backdrop-blur-sm","backdrop-blur","backdrop-blur-md","backdrop-blur-lg","backdrop-blur-xl","backdrop-blur-2xl","backdrop-blur-3xl",

  /* Backdrop Brightness */
  "backdrop-brightness-0","backdrop-brightness-50","backdrop-brightness-75","backdrop-brightness-90","backdrop-brightness-95","backdrop-brightness-100","backdrop-brightness-105","backdrop-brightness-110","backdrop-brightness-125","backdrop-brightness-150","backdrop-brightness-200",

  /* Backdrop Contrast */
  "backdrop-contrast-0","backdrop-contrast-50","backdrop-contrast-75","backdrop-contrast-100","backdrop-contrast-125","backdrop-contrast-150","backdrop-contrast-200",

  /* Backdrop Grayscale */
  "backdrop-grayscale-0","backdrop-grayscale",

  /* Backdrop Hue Rotate */
  "backdrop-hue-rotate-0","backdrop-hue-rotate-15","backdrop-hue-rotate-30","backdrop-hue-rotate-60","backdrop-hue-rotate-90","backdrop-hue-rotate-180",

  /* Backdrop Invert */
  "backdrop-invert-0","backdrop-invert",

  /* Backdrop Opacity */
  "backdrop-opacity-0","backdrop-opacity-5","backdrop-opacity-10","backdrop-opacity-20","backdrop-opacity-25","backdrop-opacity-30","backdrop-opacity-40","backdrop-opacity-50","backdrop-opacity-60","backdrop-opacity-70","backdrop-opacity-75","backdrop-opacity-80","backdrop-opacity-90","backdrop-opacity-95","backdrop-opacity-100",

  /* Backdrop Saturate */
  "backdrop-saturate-0","backdrop-saturate-50","backdrop-saturate-100","backdrop-saturate-150","backdrop-saturate-200",

  /* Backdrop Sepia */
  "backdrop-sepia-0","backdrop-sepia",

  // MARK: Tables

  /* Border Collapse */
  "border-collapse","border-separate",

  /* Border Spacing */
  "border-spacing-0","border-spacing-px","border-spacing-0.5","border-spacing-1","border-spacing-1.5","border-spacing-2","border-spacing-2.5","border-spacing-3","border-spacing-3.5",
  "border-spacing-4","border-spacing-5","border-spacing-6","border-spacing-7","border-spacing-8","border-spacing-9","border-spacing-10","border-spacing-11","border-spacing-12",
  "border-spacing-14","border-spacing-16","border-spacing-20","border-spacing-24","border-spacing-28","border-spacing-32","border-spacing-36","border-spacing-40","border-spacing-44",
  "border-spacing-48","border-spacing-52","border-spacing-56","border-spacing-60","border-spacing-64","border-spacing-72","border-spacing-80","border-spacing-96",

  "border-spacing-x-0","border-spacing-x-px","border-spacing-x-0.5","border-spacing-x-1","border-spacing-x-1.5","border-spacing-x-2","border-spacing-x-2.5","border-spacing-x-3","border-spacing-x-3.5",
  "border-spacing-x-4","border-spacing-x-5","border-spacing-x-6","border-spacing-x-7","border-spacing-x-8","border-spacing-x-9","border-spacing-x-10","border-spacing-x-11","border-spacing-x-12",
  "border-spacing-x-14","border-spacing-x-16","border-spacing-x-20","border-spacing-x-24","border-spacing-x-28","border-spacing-x-32","border-spacing-x-36","border-spacing-x-40","border-spacing-x-44",
  "border-spacing-x-48","border-spacing-x-52","border-spacing-x-56","border-spacing-x-60","border-spacing-x-64","border-spacing-x-72","border-spacing-x-80","border-spacing-x-96",

  "border-spacing-y-0","border-spacing-y-px","border-spacing-y-0.5","border-spacing-y-1","border-spacing-y-1.5","border-spacing-y-2","border-spacing-y-2.5","border-spacing-y-3","border-spacing-y-3.5",
  "border-spacing-y-4","border-spacing-y-5","border-spacing-y-6","border-spacing-y-7","border-spacing-y-8","border-spacing-y-9","border-spacing-y-10","border-spacing-y-11","border-spacing-y-12",
  "border-spacing-y-14","border-spacing-y-16","border-spacing-y-20","border-spacing-y-24","border-spacing-y-28","border-spacing-y-32","border-spacing-y-36","border-spacing-y-40","border-spacing-y-44",
  "border-spacing-y-48","border-spacing-y-52","border-spacing-y-56","border-spacing-y-60","border-spacing-y-64","border-spacing-y-72","border-spacing-y-80","border-spacing-y-96",

  /* Table Layout */
  "table-auto","table-fixed",

  /* Caption Side */
  "caption-top","caption-bottom",

  // MARK: Transitions & Animation

  /* Transition Property */
  "transition-none","transition-all","transition","transition-colors","transition-opacity","transition-shadow","transition-transform",

  /* Transition Duration */
  "duration-0","duration-75","duration-100","duration-150","duration-200","duration-300","duration-500","duration-700","duration-1000",

  /* Transition Timing Function */
  "ease-linear","ease-in","ease-out","ease-in-out",

  /* Transition Delay */
  "delay-0","delay-75","delay-100","delay-150","delay-200","delay-300","delay-500","delay-700","delay-1000",

  /* Animation */
  "animate-none","animate-spin","animate-ping","animate-pulse","animate-bounce",


  // MARK: Transforms

  /* Scale */
  "scale-0","scale-50","scale-75","scale-90","scale-95","scale-100","scale-105","scale-110","scale-125","scale-150",
  "scale-x-0","scale-x-50","scale-x-75","scale-x-90","scale-x-95","scale-x-100","scale-x-105","scale-x-110","scale-x-125","scale-x-150",
  "scale-y-0","scale-y-50","scale-y-75","scale-y-90","scale-y-95","scale-y-100","scale-y-105","scale-y-110","scale-y-125","scale-y-150",

  /* Rotate */
  "rotate-0","rotate-1","rotate-2","rotate-3","rotate-6","rotate-12","rotate-45","rotate-90","rotate-180",

  /* Translate */
  "translate-x-0","translate-x-px","translate-x-0.5","translate-x-1","translate-x-1.5","translate-x-2","translate-x-2.5","translate-x-3","translate-x-3.5",
  "translate-x-4","translate-x-5","translate-x-6","translate-x-7","translate-x-8","translate-x-9","translate-x-10","translate-x-11","translate-x-12",
  "translate-x-14","translate-x-16","translate-x-20","translate-x-24","translate-x-28","translate-x-32","translate-x-36","translate-x-40","translate-x-44",
  "translate-x-48","translate-x-52","translate-x-56","translate-x-60","translate-x-64","translate-x-72","translate-x-80","translate-x-96",

  "translate-y-0","translate-y-px","translate-y-0.5","translate-y-1","translate-y-1.5","translate-y-2","translate-y-2.5","translate-y-3","translate-y-3.5",
  "translate-y-4","translate-y-5","translate-y-6","translate-y-7","translate-y-8","translate-y-9","translate-y-10","translate-y-11","translate-y-12",
  "translate-y-14","translate-y-16","translate-y-20","translate-y-24","translate-y-28","translate-y-32","translate-y-36","translate-y-40","translate-y-44",
  "translate-y-48","translate-y-52","translate-y-56","translate-y-60","translate-y-64","translate-y-72","translate-y-80","translate-y-96",

  "translate-x-1/2","translate-x-1/3","translate-x-2/3","translate-x-1/4","translate-x-2/4","translate-x-3/4","translate-x-full",
  "translate-y-1/2","translate-y-1/3","translate-y-2/3","translate-y-1/4","translate-y-2/4","translate-y-3/4","translate-y-full",

  /* Skew */
  "skew-x-0","skew-x-1","skew-x-2","skew-x-3","skew-x-6","skew-x-12",
  "skew-y-0","skew-y-1","skew-y-2","skew-y-3","skew-y-6","skew-y-12",

  /* Transform Origin */
  "origin-center","origin-top","origin-top-right","origin-right","origin-bottom-right","origin-bottom","origin-bottom-left","origin-left","origin-top-left",

  // MARK: Interactivity

  /* Accent Color */
  "accent-auto","accent-inherit","accent-current","accent-transparent","accent-black","accent-white",
  "accent-slate-50","accent-slate-100","accent-slate-200","accent-slate-300","accent-slate-400","accent-slate-500","accent-slate-600","accent-slate-700","accent-slate-800","accent-slate-900","accent-slate-950",
  "accent-gray-50","accent-gray-100","accent-gray-200","accent-gray-300","accent-gray-400","accent-gray-500","accent-gray-600","accent-gray-700","accent-gray-800","accent-gray-900","accent-gray-950",
  "accent-zinc-50","accent-zinc-100","accent-zinc-200","accent-zinc-300","accent-zinc-400","accent-zinc-500","accent-zinc-600","accent-zinc-700","accent-zinc-800","accent-zinc-900","accent-zinc-950",
  "accent-neutral-50","accent-neutral-100","accent-neutral-200","accent-neutral-300","accent-neutral-400","accent-neutral-500","accent-neutral-600","accent-neutral-700","accent-neutral-800","accent-neutral-900","accent-neutral-950",
  "accent-stone-50","accent-stone-100","accent-stone-200","accent-stone-300","accent-stone-400","accent-stone-500","accent-stone-600","accent-stone-700","accent-stone-800","accent-stone-900","accent-stone-950",
  "accent-red-50","accent-red-100","accent-red-200","accent-red-300","accent-red-400","accent-red-500","accent-red-600","accent-red-700","accent-red-800","accent-red-900","accent-red-950",
  "accent-orange-50","accent-orange-100","accent-orange-200","accent-orange-300","accent-orange-400","accent-orange-500","accent-orange-600","accent-orange-700","accent-orange-800","accent-orange-900","accent-orange-950",
  "accent-amber-50","accent-amber-100","accent-amber-200","accent-amber-300","accent-amber-400","accent-amber-500","accent-amber-600","accent-amber-700","accent-amber-800","accent-amber-900","accent-amber-950",
  "accent-yellow-50","accent-yellow-100","accent-yellow-200","accent-yellow-300","accent-yellow-400","accent-yellow-500","accent-yellow-600","accent-yellow-700","accent-yellow-800","accent-yellow-900","accent-yellow-950",
  "accent-lime-50","accent-lime-100","accent-lime-200","accent-lime-300","accent-lime-400","accent-lime-500","accent-lime-600","accent-lime-700","accent-lime-800","accent-lime-900","accent-lime-950",
  "accent-green-50","accent-green-100","accent-green-200","accent-green-300","accent-green-400","accent-green-500","accent-green-600","accent-green-700","accent-green-800","accent-green-900","accent-green-950",
  "accent-emerald-50","accent-emerald-100","accent-emerald-200","accent-emerald-300","accent-emerald-400","accent-emerald-500","accent-emerald-600","accent-emerald-700","accent-emerald-800","accent-emerald-900","accent-emerald-950",
  "accent-teal-50","accent-teal-100","accent-teal-200","accent-teal-300","accent-teal-400","accent-teal-500","accent-teal-600","accent-teal-700","accent-teal-800","accent-teal-900","accent-teal-950",
  "accent-cyan-50","accent-cyan-100","accent-cyan-200","accent-cyan-300","accent-cyan-400","accent-cyan-500","accent-cyan-600","accent-cyan-700","accent-cyan-800","accent-cyan-900","accent-cyan-950",
  "accent-sky-50","accent-sky-100","accent-sky-200","accent-sky-300","accent-sky-400","accent-sky-500","accent-sky-600","accent-sky-700","accent-sky-800","accent-sky-900","accent-sky-950",
  "accent-blue-50","accent-blue-100","accent-blue-200","accent-blue-300","accent-blue-400","accent-blue-500","accent-blue-600","accent-blue-700","accent-blue-800","accent-blue-900","accent-blue-950",
  "accent-indigo-50","accent-indigo-100","accent-indigo-200","accent-indigo-300","accent-indigo-400","accent-indigo-500","accent-indigo-600","accent-indigo-700","accent-indigo-800","accent-indigo-900","accent-indigo-950",
  "accent-violet-50","accent-violet-100","accent-violet-200","accent-violet-300","accent-violet-400","accent-violet-500","accent-violet-600","accent-violet-700","accent-violet-800","accent-violet-900","accent-violet-950",
  "accent-purple-50","accent-purple-100","accent-purple-200","accent-purple-300","accent-purple-400","accent-purple-500","accent-purple-600","accent-purple-700","accent-purple-800","accent-purple-900","accent-purple-950",
  "accent-fuchsia-50","accent-fuchsia-100","accent-fuchsia-200","accent-fuchsia-300","accent-fuchsia-400","accent-fuchsia-500","accent-fuchsia-600","accent-fuchsia-700","accent-fuchsia-800","accent-fuchsia-900","accent-fuchsia-950",
  "accent-pink-50","accent-pink-100","accent-pink-200","accent-pink-300","accent-pink-400","accent-pink-500","accent-pink-600","accent-pink-700","accent-pink-800","accent-pink-900","accent-pink-950",
  "accent-rose-50","accent-rose-100","accent-rose-200","accent-rose-300","accent-rose-400","accent-rose-500","accent-rose-600","accent-rose-700","accent-rose-800","accent-rose-900","accent-rose-950",

  /* Appearance */
  "appearance-none",

  /* Cursor */
  "cursor-auto","cursor-default","cursor-pointer","cursor-wait","cursor-text","cursor-move","cursor-help","cursor-not-allowed","cursor-none","cursor-context-menu","cursor-progress","cursor-cell","cursor-crosshair","cursor-vertical-text","cursor-alias","cursor-copy","cursor-no-drop","cursor-grab","cursor-grabbing","cursor-all-scroll","cursor-col-resize","cursor-row-resize","cursor-n-resize","cursor-e-resize","cursor-s-resize","cursor-w-resize","cursor-ne-resize","cursor-nw-resize","cursor-se-resize","cursor-sw-resize","cursor-ew-resize","cursor-ns-resize","cursor-nesw-resize","cursor-nwse-resize","cursor-zoom-in","cursor-zoom-out",

  /* Caret Color */
  "caret-inherit","caret-current","caret-transparent","caret-black","caret-white",
  "caret-slate-50","caret-slate-100","caret-slate-200","caret-slate-300","caret-slate-400","caret-slate-500","caret-slate-600","caret-slate-700","caret-slate-800","caret-slate-900","caret-slate-950",
  "caret-gray-50","caret-gray-100","caret-gray-200","caret-gray-300","caret-gray-400","caret-gray-500","caret-gray-600","caret-gray-700","caret-gray-800","caret-gray-900","caret-gray-950",
  "caret-zinc-50","caret-zinc-100","caret-zinc-200","caret-zinc-300","caret-zinc-400","caret-zinc-500","caret-zinc-600","caret-zinc-700","caret-zinc-800","caret-zinc-900","caret-zinc-950",
  "caret-neutral-50","caret-neutral-100","caret-neutral-200","caret-neutral-300","caret-neutral-400","caret-neutral-500","caret-neutral-600","caret-neutral-700","caret-neutral-800","caret-neutral-900","caret-neutral-950",
  "caret-stone-50","caret-stone-100","caret-stone-200","caret-stone-300","caret-stone-400","caret-stone-500","caret-stone-600","caret-stone-700","caret-stone-800","caret-stone-900","caret-stone-950",
  "caret-red-50","caret-red-100","caret-red-200","caret-red-300","caret-red-400","caret-red-500","caret-red-600","caret-red-700","caret-red-800","caret-red-900","caret-red-950",
  "caret-orange-50","caret-orange-100","caret-orange-200","caret-orange-300","caret-orange-400","caret-orange-500","caret-orange-600","caret-orange-700","caret-orange-800","caret-orange-900","caret-orange-950",
  "caret-amber-50","caret-amber-100","caret-amber-200","caret-amber-300","caret-amber-400","caret-amber-500","caret-amber-600","caret-amber-700","caret-amber-800","caret-amber-900","caret-amber-950",
  "caret-yellow-50","caret-yellow-100","caret-yellow-200","caret-yellow-300","caret-yellow-400","caret-yellow-500","caret-yellow-600","caret-yellow-700","caret-yellow-800","caret-yellow-900","caret-yellow-950",
  "caret-lime-50","caret-lime-100","caret-lime-200","caret-lime-300","caret-lime-400","caret-lime-500","caret-lime-600","caret-lime-700","caret-lime-800","caret-lime-900","caret-lime-950",
  "caret-green-50","caret-green-100","caret-green-200","caret-green-300","caret-green-400","caret-green-500","caret-green-600","caret-green-700","caret-green-800","caret-green-900","caret-green-950",
  "caret-emerald-50","caret-emerald-100","caret-emerald-200","caret-emerald-300","caret-emerald-400","caret-emerald-500","caret-emerald-600","caret-emerald-700","caret-emerald-800","caret-emerald-900","caret-emerald-950",
  "caret-teal-50","caret-teal-100","caret-teal-200","caret-teal-300","caret-teal-400","caret-teal-500","caret-teal-600","caret-teal-700","caret-teal-800","caret-teal-900","caret-teal-950",
  "caret-cyan-50","caret-cyan-100","caret-cyan-200","caret-cyan-300","caret-cyan-400","caret-cyan-500","caret-cyan-600","caret-cyan-700","caret-cyan-800","caret-cyan-900","caret-cyan-950",
  "caret-sky-50","caret-sky-100","caret-sky-200","caret-sky-300","caret-sky-400","caret-sky-500","caret-sky-600","caret-sky-700","caret-sky-800","caret-sky-900","caret-sky-950",
  "caret-blue-50","caret-blue-100","caret-blue-200","caret-blue-300","caret-blue-400","caret-blue-500","caret-blue-600","caret-blue-700","caret-blue-800","caret-blue-900","caret-blue-950",
  "caret-indigo-50","caret-indigo-100","caret-indigo-200","caret-indigo-300","caret-indigo-400","caret-indigo-500","caret-indigo-600","caret-indigo-700","caret-indigo-800","caret-indigo-900","caret-indigo-950",
  "caret-violet-50","caret-violet-100","caret-violet-200","caret-violet-300","caret-violet-400","caret-violet-500","caret-violet-600","caret-violet-700","caret-violet-800","caret-violet-900","caret-violet-950",
  "caret-purple-50","caret-purple-100","caret-purple-200","caret-purple-300","caret-purple-400","caret-purple-500","caret-purple-600","caret-purple-700","caret-purple-800","caret-purple-900","caret-purple-950",
  "caret-fuchsia-50","caret-fuchsia-100","caret-fuchsia-200","caret-fuchsia-300","caret-fuchsia-400","caret-fuchsia-500","caret-fuchsia-600","caret-fuchsia-700","caret-fuchsia-800","caret-fuchsia-900","caret-fuchsia-950",
  "caret-pink-50","caret-pink-100","caret-pink-200","caret-pink-300","caret-pink-400","caret-pink-500","caret-pink-600","caret-pink-700","caret-pink-800","caret-pink-900","caret-pink-950",
  "caret-rose-50","caret-rose-100","caret-rose-200","caret-rose-300","caret-rose-400","caret-rose-500","caret-rose-600","caret-rose-700","caret-rose-800","caret-rose-900","caret-rose-950",

  /* Pointer Events */
  "pointer-events-none","pointer-events-auto",

  /* Resize */
  "resize-none","resize-y","resize-x","resize",

  /* Scroll Behavior */
  "scroll-auto","scroll-smooth",

  /* Scroll Margin */
  "scroll-m-0","scroll-m-px","scroll-m-0.5","scroll-m-1","scroll-m-1.5","scroll-m-2","scroll-m-2.5","scroll-m-3","scroll-m-3.5","scroll-m-4","scroll-m-5","scroll-m-6","scroll-m-7","scroll-m-8","scroll-m-9","scroll-m-10","scroll-m-11","scroll-m-12",
  "scroll-m-14","scroll-m-16","scroll-m-20","scroll-m-24","scroll-m-28","scroll-m-32","scroll-m-36","scroll-m-40","scroll-m-44","scroll-m-48","scroll-m-52","scroll-m-56","scroll-m-60","scroll-m-64","scroll-m-72","scroll-m-80","scroll-m-96",

  "scroll-mx-0","scroll-mx-px","scroll-mx-0.5","scroll-mx-1","scroll-mx-1.5","scroll-mx-2","scroll-mx-2.5","scroll-mx-3","scroll-mx-3.5","scroll-mx-4","scroll-mx-5","scroll-mx-6","scroll-mx-7","scroll-mx-8","scroll-mx-9","scroll-mx-10","scroll-mx-11","scroll-mx-12",
  "scroll-mx-14","scroll-mx-16","scroll-mx-20","scroll-mx-24","scroll-mx-28","scroll-mx-32","scroll-mx-36","scroll-mx-40","scroll-mx-44","scroll-mx-48","scroll-mx-52","scroll-mx-56","scroll-mx-60","scroll-mx-64","scroll-mx-72","scroll-mx-80","scroll-mx-96",

  "scroll-my-0","scroll-my-px","scroll-my-0.5","scroll-my-1","scroll-my-1.5","scroll-my-2","scroll-my-2.5","scroll-my-3","scroll-my-3.5","scroll-my-4","scroll-my-5","scroll-my-6","scroll-my-7","scroll-my-8","scroll-my-9","scroll-my-10","scroll-my-11","scroll-my-12",
  "scroll-my-14","scroll-my-16","scroll-my-20","scroll-my-24","scroll-my-28","scroll-my-32","scroll-my-36","scroll-my-40","scroll-my-44","scroll-my-48","scroll-my-52","scroll-my-56","scroll-my-60","scroll-my-64","scroll-my-72","scroll-my-80","scroll-my-96",

  "scroll-ms-0","scroll-ms-px","scroll-ms-0.5","scroll-ms-1","scroll-ms-1.5","scroll-ms-2","scroll-ms-2.5","scroll-ms-3","scroll-ms-3.5","scroll-ms-4","scroll-ms-5","scroll-ms-6","scroll-ms-7","scroll-ms-8","scroll-ms-9","scroll-ms-10","scroll-ms-11","scroll-ms-12",
  "scroll-ms-14","scroll-ms-16","scroll-ms-20","scroll-ms-24","scroll-ms-28","scroll-ms-32","scroll-ms-36","scroll-ms-40","scroll-ms-44","scroll-ms-48","scroll-ms-52","scroll-ms-56","scroll-ms-60","scroll-ms-64","scroll-ms-72","scroll-ms-80","scroll-ms-96",

  "scroll-me-0","scroll-me-px","scroll-me-0.5","scroll-me-1","scroll-me-1.5","scroll-me-2","scroll-me-2.5","scroll-me-3","scroll-me-3.5","scroll-me-4","scroll-me-5","scroll-me-6","scroll-me-7","scroll-me-8","scroll-me-9","scroll-me-10","scroll-me-11","scroll-me-12",
  "scroll-me-14","scroll-me-16","scroll-me-20","scroll-me-24","scroll-me-28","scroll-me-32","scroll-me-36","scroll-me-40","scroll-me-44","scroll-me-48","scroll-me-52","scroll-me-56","scroll-me-60","scroll-me-64","scroll-me-72","scroll-me-80","scroll-me-96",

  "scroll-mt-0","scroll-mt-px","scroll-mt-0.5","scroll-mt-1","scroll-mt-1.5","scroll-mt-2","scroll-mt-2.5","scroll-mt-3","scroll-mt-3.5","scroll-mt-4","scroll-mt-5","scroll-mt-6","scroll-mt-7","scroll-mt-8","scroll-mt-9","scroll-mt-10","scroll-mt-11","scroll-mt-12",
  "scroll-mt-14","scroll-mt-16","scroll-mt-20","scroll-mt-24","scroll-mt-28","scroll-mt-32","scroll-mt-36","scroll-mt-40","scroll-mt-44","scroll-mt-48","scroll-mt-52","scroll-mt-56","scroll-mt-60","scroll-mt-64","scroll-mt-72","scroll-mt-80","scroll-mt-96",

  "scroll-mr-0","scroll-mr-px","scroll-mr-0.5","scroll-mr-1","scroll-mr-1.5","scroll-mr-2","scroll-mr-2.5","scroll-mr-3","scroll-mr-3.5","scroll-mr-4","scroll-mr-5","scroll-mr-6","scroll-mr-7","scroll-mr-8","scroll-mr-9","scroll-mr-10","scroll-mr-11","scroll-mr-12",
  "scroll-mr-14","scroll-mr-16","scroll-mr-20","scroll-mr-24","scroll-mr-28","scroll-mr-32","scroll-mr-36","scroll-mr-40","scroll-mr-44","scroll-mr-48","scroll-mr-52","scroll-mr-56","scroll-mr-60","scroll-mr-64","scroll-mr-72","scroll-mr-80","scroll-mr-96",

  "scroll-mb-0","scroll-mb-px","scroll-mb-0.5","scroll-mb-1","scroll-mb-1.5","scroll-mb-2","scroll-mb-2.5","scroll-mb-3","scroll-mb-3.5","scroll-mb-4","scroll-mb-5","scroll-mb-6","scroll-mb-7","scroll-mb-8","scroll-mb-9","scroll-mb-10","scroll-mb-11","scroll-mb-12",
  "scroll-mb-14","scroll-mb-16","scroll-mb-20","scroll-mb-24","scroll-mb-28","scroll-mb-32","scroll-mb-36","scroll-mb-40","scroll-mb-44","scroll-mb-48","scroll-mb-52","scroll-mb-56","scroll-mb-60","scroll-mb-64","scroll-mb-72","scroll-mb-80","scroll-mb-96",

  "scroll-ml-0","scroll-ml-px","scroll-ml-0.5","scroll-ml-1","scroll-ml-1.5","scroll-ml-2","scroll-ml-2.5","scroll-ml-3","scroll-ml-3.5","scroll-ml-4","scroll-ml-5","scroll-ml-6","scroll-ml-7","scroll-ml-8","scroll-ml-9","scroll-ml-10","scroll-ml-11","scroll-ml-12",
  "scroll-ml-14","scroll-ml-16","scroll-ml-20","scroll-ml-24","scroll-ml-28","scroll-ml-32","scroll-ml-36","scroll-ml-40","scroll-ml-44","scroll-ml-48","scroll-ml-52","scroll-ml-56","scroll-ml-60","scroll-ml-64","scroll-ml-72","scroll-ml-80","scroll-ml-96",


  /* Scroll Padding */
  "scroll-p-0","scroll-p-px","scroll-p-0.5","scroll-p-1","scroll-p-1.5","scroll-p-2","scroll-p-2.5","scroll-p-3","scroll-p-3.5","scroll-p-4","scroll-p-5","scroll-p-6","scroll-p-7","scroll-p-8","scroll-p-9","scroll-p-10","scroll-p-11","scroll-p-12",
  "scroll-p-14","scroll-p-16","scroll-p-20","scroll-p-24","scroll-p-28","scroll-p-32","scroll-p-36","scroll-p-40","scroll-p-44","scroll-p-48","scroll-p-52","scroll-p-56","scroll-p-60","scroll-p-64","scroll-p-72","scroll-p-80","scroll-p-96",

  "scroll-px-0","scroll-px-px","scroll-px-0.5","scroll-px-1","scroll-px-1.5","scroll-px-2","scroll-px-2.5","scroll-px-3","scroll-px-3.5","scroll-px-4","scroll-px-5","scroll-px-6","scroll-px-7","scroll-px-8","scroll-px-9","scroll-px-10","scroll-px-11","scroll-px-12",
  "scroll-px-14","scroll-px-16","scroll-px-20","scroll-px-24","scroll-px-28","scroll-px-32","scroll-px-36","scroll-px-40","scroll-px-44","scroll-px-48","scroll-px-52","scroll-px-56","scroll-px-60","scroll-px-64","scroll-px-72","scroll-px-80","scroll-px-96",

  "scroll-py-0","scroll-py-px","scroll-py-0.5","scroll-py-1","scroll-py-1.5","scroll-py-2","scroll-py-2.5","scroll-py-3","scroll-py-3.5","scroll-py-4","scroll-py-5","scroll-py-6","scroll-py-7","scroll-py-8","scroll-py-9","scroll-py-10","scroll-py-11","scroll-py-12",
  "scroll-py-14","scroll-py-16","scroll-py-20","scroll-py-24","scroll-py-28","scroll-py-32","scroll-py-36","scroll-py-40","scroll-py-44","scroll-py-48","scroll-py-52","scroll-py-56","scroll-py-60","scroll-py-64","scroll-py-72","scroll-py-80","scroll-py-96",

  "scroll-ps-0","scroll-ps-px","scroll-ps-0.5","scroll-ps-1","scroll-ps-1.5","scroll-ps-2","scroll-ps-2.5","scroll-ps-3","scroll-ps-3.5","scroll-ps-4","scroll-ps-5","scroll-ps-6","scroll-ps-7","scroll-ps-8","scroll-ps-9","scroll-ps-10","scroll-ps-11","scroll-ps-12",
  "scroll-ps-14","scroll-ps-16","scroll-ps-20","scroll-ps-24","scroll-ps-28","scroll-ps-32","scroll-ps-36","scroll-ps-40","scroll-ps-44","scroll-ps-48","scroll-ps-52","scroll-ps-56","scroll-ps-60","scroll-ps-64","scroll-ps-72","scroll-ps-80","scroll-ps-96",

  "scroll-pe-0","scroll-pe-px","scroll-pe-0.5","scroll-pe-1","scroll-pe-1.5","scroll-pe-2","scroll-pe-2.5","scroll-pe-3","scroll-pe-3.5","scroll-pe-4","scroll-pe-5","scroll-pe-6","scroll-pe-7","scroll-pe-8","scroll-pe-9","scroll-pe-10","scroll-pe-11","scroll-pe-12",
  "scroll-pe-14","scroll-pe-16","scroll-pe-20","scroll-pe-24","scroll-pe-28","scroll-pe-32","scroll-pe-36","scroll-pe-40","scroll-pe-44","scroll-pe-48","scroll-pe-52","scroll-pe-56","scroll-pe-60","scroll-pe-64","scroll-pe-72","scroll-pe-80","scroll-pe-96",

  "scroll-pt-0","scroll-pt-px","scroll-pt-0.5","scroll-pt-1","scroll-pt-1.5","scroll-pt-2","scroll-pt-2.5","scroll-pt-3","scroll-pt-3.5","scroll-pt-4","scroll-pt-5","scroll-pt-6","scroll-pt-7","scroll-pt-8","scroll-pt-9","scroll-pt-10","scroll-pt-11","scroll-pt-12",
  "scroll-pt-14","scroll-pt-16","scroll-pt-20","scroll-pt-24","scroll-pt-28","scroll-pt-32","scroll-pt-36","scroll-pt-40","scroll-pt-44","scroll-pt-48","scroll-pt-52","scroll-pt-56","scroll-pt-60","scroll-pt-64","scroll-pt-72","scroll-pt-80","scroll-pt-96",

  "scroll-pr-0","scroll-pr-px","scroll-pr-0.5","scroll-pr-1","scroll-pr-1.5","scroll-pr-2","scroll-pr-2.5","scroll-pr-3","scroll-pr-3.5","scroll-pr-4","scroll-pr-5","scroll-pr-6","scroll-pr-7","scroll-pr-8","scroll-pr-9","scroll-pr-10","scroll-pr-11","scroll-pr-12",
  "scroll-pr-14","scroll-pr-16","scroll-pr-20","scroll-pr-24","scroll-pr-28","scroll-pr-32","scroll-pr-36","scroll-pr-40","scroll-pr-44","scroll-pr-48","scroll-pr-52","scroll-pr-56","scroll-pr-60","scroll-pr-64","scroll-pr-72","scroll-pr-80","scroll-pr-96",

  "scroll-pb-0","scroll-pb-px","scroll-pb-0.5","scroll-pb-1","scroll-pb-1.5","scroll-pb-2","scroll-pb-2.5","scroll-pb-3","scroll-pb-3.5","scroll-pb-4","scroll-pb-5","scroll-pb-6","scroll-pb-7","scroll-pb-8","scroll-pb-9","scroll-pb-10","scroll-pb-11","scroll-pb-12",
  "scroll-pb-14","scroll-pb-16","scroll-pb-20","scroll-pb-24","scroll-pb-28","scroll-pb-32","scroll-pb-36","scroll-pb-40","scroll-pb-44","scroll-pb-48","scroll-pb-52","scroll-pb-56","scroll-pb-60","scroll-pb-64","scroll-pb-72","scroll-pb-80","scroll-pb-96",

  "scroll-pl-0","scroll-pl-px","scroll-pl-0.5","scroll-pl-1","scroll-pl-1.5","scroll-pl-2","scroll-pl-2.5","scroll-pl-3","scroll-pl-3.5","scroll-pl-4","scroll-pl-5","scroll-pl-6","scroll-pl-7","scroll-pl-8","scroll-pl-9","scroll-pl-10","scroll-pl-11","scroll-pl-12",
  "scroll-pl-14","scroll-pl-16","scroll-pl-20","scroll-pl-24","scroll-pl-28","scroll-pl-32","scroll-pl-36","scroll-pl-40","scroll-pl-44","scroll-pl-48","scroll-pl-52","scroll-pl-56","scroll-pl-60","scroll-pl-64","scroll-pl-72","scroll-pl-80","scroll-pl-96",

  /* Scroll Snap Align */
  "snap-start","snap-end","snap-center","snap-align-none",

  /* Scroll Snap Stop */
  "snap-normal","snap-always",

  /* Scroll Snap Type */
  "snap-none","snap-x","snap-y","snap-both","snap-mandatory","snap-proximity",

  /* Touch Action */
  "touch-auto","touch-none","touch-pan-x","touch-pan-left","touch-pan-right","touch-pan-y","touch-pan-up","touch-pan-down","touch-pinch-zoom","touch-manipulation",

  /* User Select */
  "select-none","select-text","select-all","select-auto",

  /* Will Change */
  "will-change-auto","will-change-scroll","will-change-contents","will-change-transform",

  // MARK: SVG

  /* Fill */
  "fill-none","fill-inherit","fill-current","fill-transparent","fill-black","fill-white",
  "fill-slate-50","fill-slate-100","fill-slate-200","fill-slate-300","fill-slate-400","fill-slate-500","fill-slate-600","fill-slate-700","fill-slate-800","fill-slate-900","fill-slate-950",
  "fill-gray-50","fill-gray-100","fill-gray-200","fill-gray-300","fill-gray-400","fill-gray-500","fill-gray-600","fill-gray-700","fill-gray-800","fill-gray-900","fill-gray-950",
  "fill-zinc-50","fill-zinc-100","fill-zinc-200","fill-zinc-300","fill-zinc-400","fill-zinc-500","fill-zinc-600","fill-zinc-700","fill-zinc-800","fill-zinc-900","fill-zinc-950",
  "fill-neutral-50","fill-neutral-100","fill-neutral-200","fill-neutral-300","fill-neutral-400","fill-neutral-500","fill-neutral-600","fill-neutral-700","fill-neutral-800","fill-neutral-900","fill-neutral-950",
  "fill-stone-50","fill-stone-100","fill-stone-200","fill-stone-300","fill-stone-400","fill-stone-500","fill-stone-600","fill-stone-700","fill-stone-800","fill-stone-900","fill-stone-950",
  "fill-red-50","fill-red-100","fill-red-200","fill-red-300","fill-red-400","fill-red-500","fill-red-600","fill-red-700","fill-red-800","fill-red-900","fill-red-950",
  "fill-orange-50","fill-orange-100","fill-orange-200","fill-orange-300","fill-orange-400","fill-orange-500","fill-orange-600","fill-orange-700","fill-orange-800","fill-orange-900","fill-orange-950",
  "fill-amber-50","fill-amber-100","fill-amber-200","fill-amber-300","fill-amber-400","fill-amber-500","fill-amber-600","fill-amber-700","fill-amber-800","fill-amber-900","fill-amber-950",
  "fill-yellow-50","fill-yellow-100","fill-yellow-200","fill-yellow-300","fill-yellow-400","fill-yellow-500","fill-yellow-600","fill-yellow-700","fill-yellow-800","fill-yellow-900","fill-yellow-950",
  "fill-lime-50","fill-lime-100","fill-lime-200","fill-lime-300","fill-lime-400","fill-lime-500","fill-lime-600","fill-lime-700","fill-lime-800","fill-lime-900","fill-lime-950",
  "fill-green-50","fill-green-100","fill-green-200","fill-green-300","fill-green-400","fill-green-500","fill-green-600","fill-green-700","fill-green-800","fill-green-900","fill-green-950",
  "fill-emerald-50","fill-emerald-100","fill-emerald-200","fill-emerald-300","fill-emerald-400","fill-emerald-500","fill-emerald-600","fill-emerald-700","fill-emerald-800","fill-emerald-900","fill-emerald-950",
  "fill-teal-50","fill-teal-100","fill-teal-200","fill-teal-300","fill-teal-400","fill-teal-500","fill-teal-600","fill-teal-700","fill-teal-800","fill-teal-900","fill-teal-950",
  "fill-cyan-50","fill-cyan-100","fill-cyan-200","fill-cyan-300","fill-cyan-400","fill-cyan-500","fill-cyan-600","fill-cyan-700","fill-cyan-800","fill-cyan-900","fill-cyan-950",
  "fill-sky-50","fill-sky-100","fill-sky-200","fill-sky-300","fill-sky-400","fill-sky-500","fill-sky-600","fill-sky-700","fill-sky-800","fill-sky-900","fill-sky-950",
  "fill-blue-50","fill-blue-100","fill-blue-200","fill-blue-300","fill-blue-400","fill-blue-500","fill-blue-600","fill-blue-700","fill-blue-800","fill-blue-900","fill-blue-950",
  "fill-indigo-50","fill-indigo-100","fill-indigo-200","fill-indigo-300","fill-indigo-400","fill-indigo-500","fill-indigo-600","fill-indigo-700","fill-indigo-800","fill-indigo-900","fill-indigo-950",
  "fill-violet-50","fill-violet-100","fill-violet-200","fill-violet-300","fill-violet-400","fill-violet-500","fill-violet-600","fill-violet-700","fill-violet-800","fill-violet-900","fill-violet-950",
  "fill-purple-50","fill-purple-100","fill-purple-200","fill-purple-300","fill-purple-400","fill-purple-500","fill-purple-600","fill-purple-700","fill-purple-800","fill-purple-900","fill-purple-950",
  "fill-fuchsia-50","fill-fuchsia-100","fill-fuchsia-200","fill-fuchsia-300","fill-fuchsia-400","fill-fuchsia-500","fill-fuchsia-600","fill-fuchsia-700","fill-fuchsia-800","fill-fuchsia-900","fill-fuchsia-950",
  "fill-pink-50","fill-pink-100","fill-pink-200","fill-pink-300","fill-pink-400","fill-pink-500","fill-pink-600","fill-pink-700","fill-pink-800","fill-pink-900","fill-pink-950",
  "fill-rose-50","fill-rose-100","fill-rose-200","fill-rose-300","fill-rose-400","fill-rose-500","fill-rose-600","fill-rose-700","fill-rose-800","fill-rose-900","fill-rose-950",

  /* Stroke */
  "stroke-none","stroke-inherit","stroke-current","stroke-transparent","stroke-black","stroke-white",
  "stroke-slate-50","stroke-slate-100","stroke-slate-200","stroke-slate-300","stroke-slate-400","stroke-slate-500","stroke-slate-600","stroke-slate-700","stroke-slate-800","stroke-slate-900","stroke-slate-950",
  "stroke-gray-50","stroke-gray-100","stroke-gray-200","stroke-gray-300","stroke-gray-400","stroke-gray-500","stroke-gray-600","stroke-gray-700","stroke-gray-800","stroke-gray-900","stroke-gray-950",
  "stroke-zinc-50","stroke-zinc-100","stroke-zinc-200","stroke-zinc-300","stroke-zinc-400","stroke-zinc-500","stroke-zinc-600","stroke-zinc-700","stroke-zinc-800","stroke-zinc-900","stroke-zinc-950",
  "stroke-neutral-50","stroke-neutral-100","stroke-neutral-200","stroke-neutral-300","stroke-neutral-400","stroke-neutral-500","stroke-neutral-600","stroke-neutral-700","stroke-neutral-800","stroke-neutral-900","stroke-neutral-950",
  "stroke-stone-50","stroke-stone-100","stroke-stone-200","stroke-stone-300","stroke-stone-400","stroke-stone-500","stroke-stone-600","stroke-stone-700","stroke-stone-800","stroke-stone-900","stroke-stone-950",
  "stroke-red-50","stroke-red-100","stroke-red-200","stroke-red-300","stroke-red-400","stroke-red-500","stroke-red-600","stroke-red-700","stroke-red-800","stroke-red-900","stroke-red-950",
  "stroke-orange-50","stroke-orange-100","stroke-orange-200","stroke-orange-300","stroke-orange-400","stroke-orange-500","stroke-orange-600","stroke-orange-700","stroke-orange-800","stroke-orange-900","stroke-orange-950",
  "stroke-amber-50","stroke-amber-100","stroke-amber-200","stroke-amber-300","stroke-amber-400","stroke-amber-500","stroke-amber-600","stroke-amber-700","stroke-amber-800","stroke-amber-900","stroke-amber-950",
  "stroke-yellow-50","stroke-yellow-100","stroke-yellow-200","stroke-yellow-300","stroke-yellow-400","stroke-yellow-500","stroke-yellow-600","stroke-yellow-700","stroke-yellow-800","stroke-yellow-900","stroke-yellow-950",
  "stroke-lime-50","stroke-lime-100","stroke-lime-200","stroke-lime-300","stroke-lime-400","stroke-lime-500","stroke-lime-600","stroke-lime-700","stroke-lime-800","stroke-lime-900","stroke-lime-950",
  "stroke-green-50","stroke-green-100","stroke-green-200","stroke-green-300","stroke-green-400","stroke-green-500","stroke-green-600","stroke-green-700","stroke-green-800","stroke-green-900","stroke-green-950",
  "stroke-emerald-50","stroke-emerald-100","stroke-emerald-200","stroke-emerald-300","stroke-emerald-400","stroke-emerald-500","stroke-emerald-600","stroke-emerald-700","stroke-emerald-800","stroke-emerald-900","stroke-emerald-950",
  "stroke-teal-50","stroke-teal-100","stroke-teal-200","stroke-teal-300","stroke-teal-400","stroke-teal-500","stroke-teal-600","stroke-teal-700","stroke-teal-800","stroke-teal-900","stroke-teal-950",
  "stroke-cyan-50","stroke-cyan-100","stroke-cyan-200","stroke-cyan-300","stroke-cyan-400","stroke-cyan-500","stroke-cyan-600","stroke-cyan-700","stroke-cyan-800","stroke-cyan-900","stroke-cyan-950",
  "stroke-sky-50","stroke-sky-100","stroke-sky-200","stroke-sky-300","stroke-sky-400","stroke-sky-500","stroke-sky-600","stroke-sky-700","stroke-sky-800","stroke-sky-900","stroke-sky-950",
  "stroke-blue-50","stroke-blue-100","stroke-blue-200","stroke-blue-300","stroke-blue-400","stroke-blue-500","stroke-blue-600","stroke-blue-700","stroke-blue-800","stroke-blue-900","stroke-blue-950",
  "stroke-indigo-50","stroke-indigo-100","stroke-indigo-200","stroke-indigo-300","stroke-indigo-400","stroke-indigo-500","stroke-indigo-600","stroke-indigo-700","stroke-indigo-800","stroke-indigo-900","stroke-indigo-950",
  "stroke-violet-50","stroke-violet-100","stroke-violet-200","stroke-violet-300","stroke-violet-400","stroke-violet-500","stroke-violet-600","stroke-violet-700","stroke-violet-800","stroke-violet-900","stroke-violet-950",
  "stroke-purple-50","stroke-purple-100","stroke-purple-200","stroke-purple-300","stroke-purple-400","stroke-purple-500","stroke-purple-600","stroke-purple-700","stroke-purple-800","stroke-purple-900","stroke-purple-950",
  "stroke-fuchsia-50","stroke-fuchsia-100","stroke-fuchsia-200","stroke-fuchsia-300","stroke-fuchsia-400","stroke-fuchsia-500","stroke-fuchsia-600","stroke-fuchsia-700","stroke-fuchsia-800","stroke-fuchsia-900","stroke-fuchsia-950",
  "stroke-pink-50","stroke-pink-100","stroke-pink-200","stroke-pink-300","stroke-pink-400","stroke-pink-500","stroke-pink-600","stroke-pink-700","stroke-pink-800","stroke-pink-900","stroke-pink-950",
  "stroke-rose-50","stroke-rose-100","stroke-rose-200","stroke-rose-300","stroke-rose-400","stroke-rose-500","stroke-rose-600","stroke-rose-700","stroke-rose-800","stroke-rose-900","stroke-rose-950",

  /* Stroke Width */
  "stroke-0","stroke-1","stroke-2",

  // MARK: Accessibility

  /* Screen Readers */
  "sr-only","not-sr-only",

];

export default tailwindCSSGrouped;
