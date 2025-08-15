# @bobisjan/website

[![CI](https://github.com/bobisjan/website/actions/workflows/ci.yml/badge.svg)](https://github.com/bobisjan/website/actions/workflows/ci.yml)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/bobisjan/website)

Source for personal website.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with pnpm)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone git@github.com:bobisjan/website.git` this repository
- `cd website`
- `pnpm install`

## Running / Development

- `pnpm start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `pnpm test`

### Linting

- `pnpm lint`
- `pnpm lint:fix`

### Building

- `pnpm build`

### Deploying

AWS is used to deploy this app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
