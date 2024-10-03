// Set up special values used in Tailwind for use in TypeScript

const twStandardValues = [
  '0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12',
  '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60', '64', '72', '80', '96',
] as const;

type TWSizeValue = typeof twStandardValues[number];

const twColumns = [
  '1/2', '1/3', '2/3', '1/4', '2/4', '3/4',
  '1/5', '2/5', '3/5', '4/5', '1/6', '2/6', '3/6', '4/6', '5/6',
  '1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12',
] as const;

type TWColumnDef = typeof twColumns[number];

const twColors = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow',
  'lime', 'green', 'emerald',
  'teal', 'cyan', 'sky', 'blue',
  'indigo', 'violet', 'purple',
  'fuschia', 'pink', 'rose',
] as const;

type TWColor = typeof twColors[number];

const twNonColors = [
  'inherit', 'current', 'transparent', 'black', 'white',
] as const;

type TWNonColor = typeof twNonColors[number];

const twColorValues = [
  ...twColors,
  ...twNonColors,
];

type TWColorValue = TWColor | TWNonColor;

const twColorLevels = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

type TWColorLevel =
  | typeof twColorLevels[number]
  | `${typeof twColorLevels[number]}`

type TWColorLevelStringValue<
  Color extends TWColorValue,
  Level extends TWColorLevel
> = `${Color}-${Level}`;

type TWColorLevelString = TWColorLevelStringValue<TWColorValue, TWColorLevel>;

type TWColorLevelMap = {
  [C in TWColorValue]?: {
    [L in TWColorLevel]?: TWColorLevelStringValue<C, L>
  }
}

function colorLevelValue(color: TWColorValue, level: TWColorLevel): TWColorLevelString {
  return `${color}-${level}`;
}

/**
 * Dynamically creates an object map for all colors
 * and their corresponding levels.
 * @example
 *   twColorLevelMap = {
 *     slate: {
 *       [50]: 'slate-50',
 *       [100]: 'slate-100',
 *       [200]: 'slate-200',
 *       [300]: 'slate-300',
 *       [400]: 'slate-400',
 *       [500]: 'slate-500',
 *       [600]: 'slate-600',
 *       [700]: 'slate-700',
 *       [800]: 'slate-800',
 *       [900]: 'slate-900',
 *       [950]: 'slate-950',
 *     },
 *   } as const;
 */
const twColorLevelMap = twColorValues.reduce((colorMap, color) => {
  colorMap[color] = colorMap[color] || {};
  for (let level of twColorLevels) {
    colorMap[color][level] = colorLevelValue(color, level);
  }
  return colorMap;
}, {}) as TWColorLevelMap;

// Curried function that can be used for working with
// varying levels of the same color
export function twWithColorLevel(color: TWColorValue, altColor?: string) {
  return (
    twColors.includes(color as TWColor)
      ? (level: TWColorLevel = 950) => `${color}-${level}`
      : () => (
        twNonColors.includes(color as TWNonColor)
          ? color
          : altColor || 'black'
      )
  );
}

function twGetColorLevel(color: TWColor, level: TWColorLevel) {
  return (
    (twColorLevelMap[color] && twColorLevelMap[color][level])
      ? twColorLevelMap[color][level]
      : 'black'
  );
}

export const twColorLevel = {
  slate: (level: TWColorLevel) => twColorLevelMap.slate[level] || 'black',
  gray: (level: TWColorLevel) => twColorLevelMap.gray[level] || 'black',
  zinc: (level: TWColorLevel) => twColorLevelMap.zinc[level] || 'black',
  neutral: (level: TWColorLevel) => twColorLevelMap.neutral[level] || 'black',
  stone: (level: TWColorLevel) => twColorLevelMap.stone[level] || 'black',
  red: (level: TWColorLevel) => twColorLevelMap.red[level] || 'black',
  orange: (level: TWColorLevel) => twColorLevelMap.orange[level] || 'black',
  amber: (level: TWColorLevel) => twColorLevelMap.amber[level] || 'black',
  yellow: (level: TWColorLevel) => twColorLevelMap.yellow[level] || 'black',
  lime: (level: TWColorLevel) => twColorLevelMap.lime[level] || 'black',
  green: (level: TWColorLevel) => twColorLevelMap.green[level] || 'black',
  emerald: (level: TWColorLevel) => twColorLevelMap.emerald[level] || 'black',
  teal: (level: TWColorLevel) => twColorLevelMap.teal[level] || 'black',
  cyan: (level: TWColorLevel) => twColorLevelMap.cyan[level] || 'black',
  sky: (level: TWColorLevel) => twColorLevelMap.sky[level] || 'black',
  blue: (level: TWColorLevel) => twColorLevelMap.blue[level] || 'black',
  indigo: (level: TWColorLevel) => twColorLevelMap.indigo[level] || 'black',
  violet: (level: TWColorLevel) => twColorLevelMap.violet[level] || 'black',
  purple: (level: TWColorLevel) => twColorLevelMap.purple[level] || 'black',
  fuschia: (level: TWColorLevel) => twColorLevelMap.fuschia[level] || 'black',
  pink: (level: TWColorLevel) => twColorLevelMap.pink[level] || 'black',
  rose: (level: TWColorLevel) => twColorLevelMap.rose[level] || 'black',
  black: () => 'black',
  white: () => 'white',
};

// for posterity

// const twColorLevelValueMap = {
//   slate: {
//     [50]: 'slate-50',
//     [100]: 'slate-100',
//     [200]: 'slate-200',
//     [300]: 'slate-300',
//     [400]: 'slate-400',
//     [500]: 'slate-500',
//     [600]: 'slate-600',
//     [700]: 'slate-700',
//     [800]: 'slate-800',
//     [900]: 'slate-900',
//     [950]: 'slate-950',
//   } as const,
//
//   gray: {
//     [50]: 'gray-50',
//     [100]: 'gray-100',
//     [200]: 'gray-200',
//     [300]: 'gray-300',
//     [400]: 'gray-400',
//     [500]: 'gray-500',
//     [600]: 'gray-600',
//     [700]: 'gray-700',
//     [800]: 'gray-800',
//     [900]: 'gray-900',
//     [950]: 'gray-950',
//   } as const,
//
//   zinc: {
//     [50]: 'zinc-50',
//     [100]: 'zinc-100',
//     [200]: 'zinc-200',
//     [300]: 'zinc-300',
//     [400]: 'zinc-400',
//     [500]: 'zinc-500',
//     [600]: 'zinc-600',
//     [700]: 'zinc-700',
//     [800]: 'zinc-800',
//     [900]: 'zinc-900',
//     [950]: 'zinc-950',
//   } as const,
//
//   neutral: {
//     [50]: 'neutral-50',
//     [100]: 'neutral-100',
//     [200]: 'neutral-200',
//     [300]: 'neutral-300',
//     [400]: 'neutral-400',
//     [500]: 'neutral-500',
//     [600]: 'neutral-600',
//     [700]: 'neutral-700',
//     [800]: 'neutral-800',
//     [900]: 'neutral-900',
//     [950]: 'neutral-950',
//   } as const,
//
//   stone: {
//     [50]: 'stone-50',
//     [100]: 'stone-100',
//     [200]: 'stone-200',
//     [300]: 'stone-300',
//     [400]: 'stone-400',
//     [500]: 'stone-500',
//     [600]: 'stone-600',
//     [700]: 'stone-700',
//     [800]: 'stone-800',
//     [900]: 'stone-900',
//     [950]: 'stone-950',
//   } as const,
//
//   red: {
//     [50]: 'red-50',
//     [100]: 'red-100',
//     [200]: 'red-200',
//     [300]: 'red-300',
//     [400]: 'red-400',
//     [500]: 'red-500',
//     [600]: 'red-600',
//     [700]: 'red-700',
//     [800]: 'red-800',
//     [900]: 'red-900',
//     [950]: 'red-950',
//   } as const,
//
//   orange: {
//     [50]: 'orange-50',
//     [100]: 'orange-100',
//     [200]: 'orange-200',
//     [300]: 'orange-300',
//     [400]: 'orange-400',
//     [500]: 'orange-500',
//     [600]: 'orange-600',
//     [700]: 'orange-700',
//     [800]: 'orange-800',
//     [900]: 'orange-900',
//     [950]: 'orange-950',
//   } as const,
//
//   amber: {
//     [50]: 'amber-50',
//     [100]: 'amber-100',
//     [200]: 'amber-200',
//     [300]: 'amber-300',
//     [400]: 'amber-400',
//     [500]: 'amber-500',
//     [600]: 'amber-600',
//     [700]: 'amber-700',
//     [800]: 'amber-800',
//     [900]: 'amber-900',
//     [950]: 'amber-950',
//   } as const,
//
//   yellow: {
//     [50]: 'yellow-50',
//     [100]: 'yellow-100',
//     [200]: 'yellow-200',
//     [300]: 'yellow-300',
//     [400]: 'yellow-400',
//     [500]: 'yellow-500',
//     [600]: 'yellow-600',
//     [700]: 'yellow-700',
//     [800]: 'yellow-800',
//     [900]: 'yellow-900',
//     [950]: 'yellow-950',
//   } as const,
//
//   lime: {
//     [50]: 'lime-50',
//     [100]: 'lime-100',
//     [200]: 'lime-200',
//     [300]: 'lime-300',
//     [400]: 'lime-400',
//     [500]: 'lime-500',
//     [600]: 'lime-600',
//     [700]: 'lime-700',
//     [800]: 'lime-800',
//     [900]: 'lime-900',
//     [950]: 'lime-950',
//   } as const,
//
//   green: {
//     [50]: 'green-50',
//     [100]: 'green-100',
//     [200]: 'green-200',
//     [300]: 'green-300',
//     [400]: 'green-400',
//     [500]: 'green-500',
//     [600]: 'green-600',
//     [700]: 'green-700',
//     [800]: 'green-800',
//     [900]: 'green-900',
//     [950]: 'green-950',
//   } as const,
//
//   emerald: {
//     [50]: 'emerald-50',
//     [100]: 'emerald-100',
//     [200]: 'emerald-200',
//     [300]: 'emerald-300',
//     [400]: 'emerald-400',
//     [500]: 'emerald-500',
//     [600]: 'emerald-600',
//     [700]: 'emerald-700',
//     [800]: 'emerald-800',
//     [900]: 'emerald-900',
//     [950]: 'emerald-950',
//   } as const,
//
//   teal: {
//     [50]: 'teal-50',
//     [100]: 'teal-100',
//     [200]: 'teal-200',
//     [300]: 'teal-300',
//     [400]: 'teal-400',
//     [500]: 'teal-500',
//     [600]: 'teal-600',
//     [700]: 'teal-700',
//     [800]: 'teal-800',
//     [900]: 'teal-900',
//     [950]: 'teal-950',
//   } as const,
//
//   cyan: {
//     [50]: 'cyan-50',
//     [100]: 'cyan-100',
//     [200]: 'cyan-200',
//     [300]: 'cyan-300',
//     [400]: 'cyan-400',
//     [500]: 'cyan-500',
//     [600]: 'cyan-600',
//     [700]: 'cyan-700',
//     [800]: 'cyan-800',
//     [900]: 'cyan-900',
//     [950]: 'cyan-950',
//   } as const,
//
//   sky: {
//     [50]: 'sky-50',
//     [100]: 'sky-100',
//     [200]: 'sky-200',
//     [300]: 'sky-300',
//     [400]: 'sky-400',
//     [500]: 'sky-500',
//     [600]: 'sky-600',
//     [700]: 'sky-700',
//     [800]: 'sky-800',
//     [900]: 'sky-900',
//     [950]: 'sky-950',
//   } as const,
//
//   blue: {
//     [50]: 'blue-50',
//     [100]: 'blue-100',
//     [200]: 'blue-200',
//     [300]: 'blue-300',
//     [400]: 'blue-400',
//     [500]: 'blue-500',
//     [600]: 'blue-600',
//     [700]: 'blue-700',
//     [800]: 'blue-800',
//     [900]: 'blue-900',
//     [950]: 'blue-950',
//   } as const,
//
//   indigo: {
//     [50]: 'indigo-50',
//     [100]: 'indigo-100',
//     [200]: 'indigo-200',
//     [300]: 'indigo-300',
//     [400]: 'indigo-400',
//     [500]: 'indigo-500',
//     [600]: 'indigo-600',
//     [700]: 'indigo-700',
//     [800]: 'indigo-800',
//     [900]: 'indigo-900',
//     [950]: 'indigo-950',
//   } as const,
//
//   violet: {
//     [50]: 'violet-50',
//     [100]: 'violet-100',
//     [200]: 'violet-200',
//     [300]: 'violet-300',
//     [400]: 'violet-400',
//     [500]: 'violet-500',
//     [600]: 'violet-600',
//     [700]: 'violet-700',
//     [800]: 'violet-800',
//     [900]: 'violet-900',
//     [950]: 'violet-950',
//   } as const,
//
//   purple: {
//     [50]: 'purple-50',
//     [100]: 'purple-100',
//     [200]: 'purple-200',
//     [300]: 'purple-300',
//     [400]: 'purple-400',
//     [500]: 'purple-500',
//     [600]: 'purple-600',
//     [700]: 'purple-700',
//     [800]: 'purple-800',
//     [900]: 'purple-900',
//     [950]: 'purple-950',
//   } as const,
//
//   fuschia: {
//     [50]: 'fuschia-50',
//     [100]: 'fuschia-100',
//     [200]: 'fuschia-200',
//     [300]: 'fuschia-300',
//     [400]: 'fuschia-400',
//     [500]: 'fuschia-500',
//     [600]: 'fuschia-600',
//     [700]: 'fuschia-700',
//     [800]: 'fuschia-800',
//     [900]: 'fuschia-900',
//     [950]: 'fuschia-950',
//   } as const,
//
//   pink: {
//     [50]: 'pink-50',
//     [100]: 'pink-100',
//     [200]: 'pink-200',
//     [300]: 'pink-300',
//     [400]: 'pink-400',
//     [500]: 'pink-500',
//     [600]: 'pink-600',
//     [700]: 'pink-700',
//     [800]: 'pink-800',
//     [900]: 'pink-900',
//     [950]: 'pink-950',
//   } as const,
//
//   rose: {
//     [50]: 'rose-50',
//     [100]: 'rose-100',
//     [200]: 'rose-200',
//     [300]: 'rose-300',
//     [400]: 'rose-400',
//     [500]: 'rose-500',
//     [600]: 'rose-600',
//     [700]: 'rose-700',
//     [800]: 'rose-800',
//     [900]: 'rose-900',
//     [950]: 'rose-950',
//   } as const,
//
// } as const as TWColorLevelMap;
