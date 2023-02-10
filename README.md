# Component Library

This repo includes three components

1. ProgressBar
2. Select
3. IconInput

- `VisuallyHidden`, a component that allows us to make text available to screen-reader users, but not to sighted users.

All components in this project use [the `Roboto` font](https://fonts.google.com/specimen/Roboto). This font is already included in the Storybook environment, and is already applied to all elements. It comes in two weights:

- 400 (default)
- 700 (bold)

## Running Storybook

This project uses Storybook, a component development tool.

To view a static web app of the built components, [see the Chromatic build](https://63e6a277caa3d1011c78c552-rowrwjmfjs.chromatic.com/?path=/story/iconinput--default-story)

or 

First, install dependencies with `npm install`.

Once dependencies are installed, you can start storybook by running:

```
npm run start
```

Once running, you can visit storybook at http://localhost:6006.

## Troubleshooting

You may get an error when running the `start` script that looks like this:

```
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:130:10)
```

You can fix this issue either by downgrading to Node 16, or by updating the `package.json` file as follows:

```diff
  "scripts": {
-   "start": "start-storybook -p 6006 -s public",
+   "start": "NODE_OPTIONS=--openssl-legacy-provider start-storybook -p 6006 -s public",
  },
```

For more info, check out the [Troubleshooting Guide](https://courses.joshwcomeau.com/troubleshooting) on the course platform.

## The Components

### ProgressBar

A semantically-valid, accessible progress-bar component using box shadow.

### Select

The Select component is a drop down menu with down-arrow icon.

This component uses some React APIs to work out the text that should be displayed.

### IconInput

This component uses the `Icon` component — the specific ID will be provided as a prop.

---
A project for Modern University based off Josh Comeau's CSS for JS devs course