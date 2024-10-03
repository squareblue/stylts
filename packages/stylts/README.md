# Stylts

## Step up your styling.

---

Stylts is a bare-bones CSS utility library that offers a TypeScript
API for assistance building `style` objects for use in UI development.
Stylts is library-agnostic and will work with any front-end library
of your choice (it's plain JS with minimal dependencies).

For example, here's how you could build up a `style` prop object
to use in a React component:

```jsx
import { stylts, classes } from 'stylts';

// const st = {
//   child: (selector) => `|${selector}`,
//   pseudo: (state) => `&:${state.replace(/^[&:]+/)}`
// };

function st(value)

export function ThingsList({ items, style }) {
  const css = stylts({
    margin: 20,
    padding: [10, 20],
    'list-style-type': 'none',
    backgroundColor: 'white',
    [child('li')]: {
      margin: '10px 0',
      [state('hover')]: {
        backgroundColor: 'cornflowerblue',
      },
    },
  }, style);

  css('mt-2 mb-4 flex flex-col'.split(/\s+/));
  css().classes();

  const {
          'mt-2',
          'mb-4',
          'flex',
          'flex-col',
        } = classes;

  return (
    <ul style={css.out()}>
      {items.map(item => (
        <li>
          <a href={'/foo'}>{item.label}</a>
          <hr />
          {item.description}
        </li>
      ))}
    </ul>
  );
}
```

Some features shown above include:

 - Setup style rules as a JavaScript object
 - CSS property names can be `camelCase` _or_ `kebab-case`
 - Plain number values will be used as `px` values
 - Arrays can be used for properties that accept multiple values (like 4 values for margin or padding)
 - Support for basic SCSS syntax for selectors and state

