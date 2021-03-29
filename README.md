# 🚀 svelte-webcomponent-boilerplate

<!-- all-shields/header-badges:START -->

[![v1.0.20210329](https://img.shields.io/badge/version-v1.0.20210329-lightgray.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/blob/main/CHANGELOG.md) [![](https://img.shields.io/npm/v/@ptkdev-boilerplate/svelte-webcomponent-boilerplate?color=CC3534&logo=npm)](https://www.npmjs.com/package/@ptkdev-boilerplate/svelte-webcomponent-boilerplate) [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)](https://github.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/blob/main/LICENSE.md) [![Powered By Svelte](https://img.shields.io/badge/powered%20by-svelte-FF3C02.svg?style=flat&logo=svelte)](https://svelte.dev/) [![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![ECMAScript: 2019](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262) [![Discord Server](https://discordapp.com/api/guilds/383373985666301975/embed.png)](https://discord.ptkdev.io)

<!-- all-shields/header-badges:END -->

Create your HTML5 Web Component with Svelte. Made your web components with this friendly boilerplate.

## 🎁 Support: Donate

> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours in my spare time and try to keep it up to date and working. **THANK YOU!**

<!-- all-shields/sponsors-badges:START -->

[![Donate Paypal](https://img.shields.io/badge/donate-paypal-005EA6.svg?style=flat&logo=paypal)](https://www.paypal.me/ptkdev) [![Donate Ko-Fi](https://img.shields.io/badge/donate-ko--fi-29abe0.svg?style=flat&logo=ko-fi)](https://ko-fi.com/ptkdev) [![Donate Github Sponsors](https://img.shields.io/badge/donate-sponsors-ea4aaa.svg?style=flat&logo=github)](https://github.com/sponsors/ptkdev) [![Donate Patreon](https://img.shields.io/badge/donate-patreon-F87668.svg?style=flat&logo=patreon)](https://www.patreon.com/ptkdev) [![Donate Bitcoin](https://img.shields.io/badge/donate-35jQmZCy4nsxoMM3QPFrnZePDVhdKaHMRH-E38B29.svg?style=flat&logo=bitcoin)]() [![Donate Ethereum](https://img.shields.io/badge/donate-0x8b8171661bEb032828e82baBb0B5B98Ba8fBEBFc-4E8EE9.svg?style=flat&logo=ethereum)]()

<!-- all-shields/sponsors-badges:END -->

## 📎 Menu

-   💡 [Features](#💡-features)
-   🕹 [Demo](https://codepen.io/ptkdev/pen/jOyNmEQ)
-   👔 [Screenshot](#👔-screenshot)
-   🚀 [How to use](#🚀-installation)
-   -   🌎 [Web](#🌎-installation-web)
-   -   📦 [Webpack/Browserify](#📦-installation-npm-module---browserifywebpack)
-   -   📖 [Wordpress](#📖-installation-wordpress)
-   -   🔵 [React](#🔵-installation-react)
-   -   🔴 [Angular](#🔴-installation-angular)
-   -   🟠 [Svelte](#🟠-installation-svelte)
-   -   🟢 [Vue](#🟢-installation-vue)
-   📚 [Documentation](#📚-documentation)
-   -   🧰 [Options / Attributes](#🧰-options--attributes)
-   -   🎨 [CSS Customization](#🎨-css-customization)
-   🔨 [Developer Mode](#🔨developer-mode)
-   👨‍💻 [Contributing](#👨‍💻-contributing)
-   🐛 [Known Bugs](https://github.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
-   🍻 Community:
    -   <img src="https://raw.githubusercontent.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/main/.github/assets/social_discord.png" height="18px"> [Discord](http://discord.ptkdev.io) ([🇬🇧 English Channel](https://discord.gg/YkMG26f) | [🇮🇹 Italian Channel](https://discord.gg/HFtdBAJ) | [🇵🇱 Polish Channel](https://discord.gg/TV5EXFd))

## 💡 Features

-   [✔️] Easy to use
-   [✔️] MIT License
-   [✔️] Text animation by [Nooray Yemon](https://codepen.io/yemon) on [Codepen](https://codepen.io/yemon/pen/pWoROm)
-   [✔️] Powered by svelte framework
-   [✔️] Without jQuery depencence
-   [✔️] Configurable with attributes
-   [✔️] Customization with CSS Style
-   [✔️] HTML5 Custom Element - Native webcomponents
-   [✔️] Work with: Browserify / Webpack / ReactJS / Svelte / Angular / Vue / Wordpress
-   [✔️] Translations: 🇬🇧 🇮🇹 🇵🇱 (Help me ❤️)

## 👔 Screenshot

See [Demo here](https://codepen.io/ptkdev/pen/jOyNmEQ).

[![WebComponent: SvelteWebComponentBoilerplate](https://raw.githubusercontent.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/main/.github/assets/screenshot.png)](https://raw.githubusercontent.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/main/.github/assets/screenshot.png)

## 🚀 Installation (Web)

1. Add html code to your page:

```html
<svelte-webcomponent-boilerplate header="make" flip="svelte,webcomponents,opensource" footer="awesome!"></svelte-webcomponent-boilerplate>
```

2. Require javascript in yourpage (before `</body>`):

```html
<script src="https://cdn.jsdelivr.net/npm/@ptkdev/svelte-webcomponent-boilerplate@latest/dist/webcomponent.min.js"></script>
```

You can replace `@latest` with specific version, example `@2.0.1`.

Below is available a description of `options` values.

## 📦 Installation (NPM Module - Browserify/Webpack)

1. Install npm module: `npm install @ptkdev/svelte-webcomponent-boilerplate --save`
2. Add html code to your page:

```html
<svelte-webcomponent-boilerplate header="make" flip="svelte,webcomponents,opensource" footer="awesome!"></svelte-webcomponent-boilerplate>
```

3. Require javascript in your app:

```javascript
require("@ptkdev/svelte-webcomponent-boilerplate");
```

or

```javascript
import "@ptkdev/svelte-webcomponent-boilerplate";
```

Below is available a description of `options` values.

## 📖 Installation (Wordpress)

1. Download wordpress plugin from [mirror](https://github.com/ptkdev-components/svelte-webcomponent-boilerplate/raw/master/dist/wordpress/svelte-webcomponent-boilerplate-wordpress-plugin.zip) and install it.
1. Add code to your html widget, example: `Appearance` --> `Widget` --> insert `HTML Widget` and paste html code:

```html
<svelte-webcomponent-boilerplate header="make" flip="svelte,webcomponents,opensource" footer="awesome!"></svelte-webcomponent-boilerplate>
```

You can insert this html code in posts, widget, html box or theme. Where you want see instagram photos box.

## 🔵 Installation (React)

1. Install npm module with `npm install @ptkdev/svelte-webcomponent-boilerplate@latest --save`:
2. Import module in your `src/App.js` on header:

```javascript
import "@ptkdev/svelte-webcomponent-boilerplate";
```

3. Add html code to your `App.js` template:

```html
<svelte-webcomponent-boilerplate header="make" flip="svelte,webcomponents,opensource" footer="awesome!"></svelte-webcomponent-boilerplate>
```

## 🔴 Installation (Angular)

1. Install npm module with `npm install @ptkdev/svelte-webcomponent-boilerplate@latest --save`:
2. Import module in your `app/app.modules.ts` on header:

```javascript
import "@ptkdev/svelte-webcomponent-boilerplate";
```

3. Add html code to your html component:

```html
<svelte-webcomponent-boilerplate header="make" flip="svelte,webcomponents,opensource" footer="awesome!"></svelte-webcomponent-boilerplate>
```

## 🟠 Installation (Svelte)

1. Install npm module with `npm install @ptkdev/svelte-webcomponent-boilerplate@latest --save`:
2. Import module in your `src/App.svelte` on header:

```javascript
import "@ptkdev/svelte-webcomponent-boilerplate";
```

3. Add html code to your html component:

```html
<svelte-webcomponent-boilerplate header="make" flip="svelte,webcomponents,opensource" footer="awesome!"></svelte-webcomponent-boilerplate>
```

## 🟢 Installation (Vue)

1. Install npm module with `npm install @ptkdev/svelte-webcomponent-boilerplate@latest --save`:
2. Import module in your `src/App.vue` and add webcomponent to ignoreElements of vue config:

```javascript
import Vue from 'vue';
import "@ptkdev/svelte-webcomponent-boilerplate";

Vue.config.ignoredElements = ["svelte-webcomponent-boilerplate"];
```

3. Add html code to your html component:

```html
<svelte-webcomponent-boilerplate header="make" flip="svelte,webcomponents,opensource" footer="awesome!"></svelte-webcomponent-boilerplate>
```

## 🧰 Options / Attributes

| Parameter | Description                                  | Values             | Default value                     | Available since |
| --------- | -------------------------------------------- | ------------------ | --------------------------------- | --------------- |
| header    | Setup top text                               | String             | `make`                            | v1.0.20210319   |
| flip      | Setup middle flip text (separte with commas) | String with commas | `svelte,webcomponents,opensource` | v1.0.20210319   |
| footer    | Setup bottom text                            | String             | `awesome!`                        | v1.0.20210319   |

#### HTML Code with attributes:

```html
<svelte-webcomponent-boilerplate header="make" flip="svelte,webcomponents,opensource" footer="awesome!"></svelte-webcomponent-boilerplate>
```

## 🎨 CSS Customization

You can overwrite default css with selector `::part`, example:

```html
<style>
	svelte-webcomponent-boilerplate::part(flip) {
		border: 2px solid red;
	}
</style>
```

Part attribute is, generally, suffix of a class. Use chrome inspector for get the correct value of `part=""` attributes. See [MDN selector ::part docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::part).

## 🔨 Developer Mode

1. Clone this repository or download [nightly](https://github.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/archive/nightly.zip), [beta](https://github.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/archive/beta.zip) or [stable](https://github.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/archive/main.zip).
2. Run `npm install`
3. Run `npm run dev`
4. Run `http://localhost:5000`

## 📚 Documentation

Run `npm run docs`

## 👑 Backers and Sponsors

Thanks to all our backers! 🙏 Donate 3$ or more on [paypal](https://www.patreon.com/join/ptkdev), [ko-fi](https://www.patreon.com/join/ptkdev), [github](https://www.patreon.com/join/ptkdev) or [patreon](https://www.patreon.com/join/ptkdev) and send me [email](mailto:support@ptkdev.io) with your avatar, name and web site url.

[![](https://api.ptkdev.io/backers/sponsor1.png?)](https://api.ptkdev.io/backers/sponsor1.html) [![](https://api.ptkdev.io/backers/sponsor2.png?)](https://api.ptkdev.io/backers/sponsor2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi1.png?)](https://api.ptkdev.io/backers/sponsor-kofi1.html) [![](https://api.ptkdev.io/backers/sponsor-kofi2.png?)](https://api.ptkdev.io/backers/sponsor-kofi2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi3.png?)](https://api.ptkdev.io/backers/sponsor-kofi3.html) [![](https://api.ptkdev.io/backers/sponsor3.png?)](https://api.ptkdev.io/backers/sponsor3.html) [![](https://api.ptkdev.io/backers/sponsor4.png?)](https://api.ptkdev.io/backers/sponsor4.html) [![](https://api.ptkdev.io/backers/sponsor5.png?)](https://api.ptkdev.io/backers/sponsor5.html) [![](https://api.ptkdev.io/backers/sponsor6.png?)](https://api.ptkdev.io/backers/sponsor6.html) [![](https://api.ptkdev.io/backers/sponsor7.png?)](https://api.ptkdev.io/backers/sponsor7.html) [![](https://api.ptkdev.io/backers/sponsor8.png?)](https://api.ptkdev.io/backers/sponsor8.html) [![](https://api.ptkdev.io/backers/sponsor9.png?)](https://api.ptkdev.io/backers/sponsor9.html) [![](https://api.ptkdev.io/backers/sponsor10.png?)](https://api.ptkdev.io/backers/sponsor10.html) [![](https://api.ptkdev.io/backers/sponsor11.png?)](https://api.ptkdev.io/backers/sponsor11.html) [![](https://api.ptkdev.io/backers/sponsor12.png?)](https://api.ptkdev.io/backers/sponsor12.html) [![](https://api.ptkdev.io/backers/sponsor13.png?)](https://api.ptkdev.io/backers/sponsor13.html) [![](https://api.ptkdev.io/backers/sponsor14.png?)](https://api.ptkdev.io/backers/sponsor14.html) [![](https://api.ptkdev.io/backers/sponsor15.png?)](https://api.ptkdev.io/backers/sponsor15.html) [![](https://api.ptkdev.io/backers/backer1.png?)](https://api.ptkdev.io/backers/backer1.html) [![](https://api.ptkdev.io/backers/backer2.png?)](https://api.ptkdev.io/backers/backer2.html) [![](https://api.ptkdev.io/backers/backer3.png?)](https://api.ptkdev.io/backers/backer3.html) [![](https://api.ptkdev.io/backers/backer4.png?)](https://api.ptkdev.io/backers/backer4.html) [![](https://api.ptkdev.io/backers/backer5.png?)](https://api.ptkdev.io/backers/backer5.html) [![](https://api.ptkdev.io/backers/backer6.png?)](https://api.ptkdev.io/backers/backer6.html) [![](https://api.ptkdev.io/backers/backer7.png?)](https://api.ptkdev.io/backers/backer7.html) [![](https://api.ptkdev.io/backers/backer8.png?)](https://api.ptkdev.io/backers/backer8.html) [![](https://api.ptkdev.io/backers/backer9.png?)](https://api.ptkdev.io/backers/backer9.html) [![](https://api.ptkdev.io/backers/backer10.png?)](https://api.ptkdev.io/backers/backer10.html) [![](https://api.ptkdev.io/backers/backer11.png?)](https://api.ptkdev.io/backers/backer11.html) [![](https://api.ptkdev.io/backers/backer12.png?)](https://api.ptkdev.io/backers/backer12.html) [![](https://api.ptkdev.io/backers/backer13.png?)](https://api.ptkdev.io/backers/backer13.html) [![](https://api.ptkdev.io/backers/backer14.png?)](https://api.ptkdev.io/backers/backer14.html) [![](https://api.ptkdev.io/backers/backer15.png?)](https://api.ptkdev.io/backers/backer15.html)

## 👨‍💻 Contributing

I ❤️ contributions! I will happily accept your pull request! Translations, grammatical corrections (GrammarNazi you are welcome! Yes my English is bad, sorry), etc... Do not be afraid, if the code is not perfect we will work together 👯 and remember to insert your name in `.all-contributorsrc` and `package.json` file.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/ptkdev/ptkdev-boilerplate/svelte-webcomponent-boilerplate/commits?author=ptkdev" title="Code">💻</a> <a href="#translation-ptkdev" title="Translation">🌍</a> <a href="https://github.com/ptkdev/ptkdev-boilerplate/svelte-webcomponent-boilerplate/commits?author=ptkdev" title="Documentation">📖</a> <a href="https://github.com/ptkdev/ptkdev-boilerplate/svelte-webcomponent-boilerplate/issues?q=author%3Aptkdev" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

> 💰 In the future, if the donations allow it, I would like to share some of the success with those who helped me the most. For me open source is share of code, share development knowledges and share donations!

## 🦄 Other Projects

<!-- all-shields/projects-badges1:START -->

[![](https://img.shields.io/badge/💻%20My-Portfolio-3498db.svg?style=flat&logo=)](https://ptk.dev/)

<!-- all-shields/projects-badges1:END -->

<!-- all-shields/projects-badges2:START -->

[![](https://img.shields.io/badge/🦒%20Tools-Node%20Logger-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/ptkdev-logger) [![](https://img.shields.io/badge/🦌%20Tools-All%20Shields%20CLI-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/all-shields-cli) [![](https://img.shields.io/badge/🖥️%20Tools-Aspect%20Ratio%2021:9-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/chrome-extension-aspectratio219) [![](https://img.shields.io/badge/🛡%20Tools-Badges:%20Available%20on-9b59b6.svg?style=flat&logo=)](https://availableon.badge.ptkdev.io/) [![](https://img.shields.io/badge/🐾%20Tools-JSON%20Token%20Replace-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/json-token-replace) [![](https://img.shields.io/badge/🐍%20Tools-ESLint:%20snakecasejs-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/eslint-plugin-snakecasejs)

<!-- all-shields/projects-badges2:END -->

<!-- all-shields/projects-badges3:START -->

[![](https://img.shields.io/badge/📸%20WebComponent-Instagram%20Widget-e74c3c.svg?style=flat&logo=)](https://github.com/ptkdev-components/webcomponent-instagram-widget) [![](https://img.shields.io/badge/👑%20WebComponent-My%20Patreon%20Box-e74c3c.svg?style=flat&logo=)](https://github.com/ptkdev-components/webcomponent-patreon-box) [![](https://img.shields.io/badge/🏞%20WebComponent-Carousel%20Slideshow-e74c3c.svg?style=flat&logo=)](https://github.com/ptkdev-components/webcomponent-carousel-slideshow)

<!-- all-shields/projects-badges3:END -->

<!-- all-shields/projects-badges4:START -->

[![](https://img.shields.io/badge/🎨%20Themes-VSCode-f1c40f.svg?style=flat&logo=)](https://github.com/ptkdev/vscode-theme-dark-blood) [![](https://img.shields.io/badge/📚%20Bot-GameBookChat-34495e.svg?style=flat&logo=)](https://t.me/gamebookchatbot) [![](https://img.shields.io/badge/🤖%20Boilerplate-BOT-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-bot) [![](https://img.shields.io/badge/🦄%20Boilerplate-Website%20/%20App-f368e0.svg?style=flat&logo=)](hhttps://github.com/ptkdev-boilerplate) [![](https://img.shields.io/badge/💅%20App-Me%20in%20Gifs-2ecc71.svg?style=flat&logo=)](https://meingifs.pics/) [![](https://img.shields.io/badge/📱%20App-Stickers-2ecc71.svg?style=flat&logo=)](https://github.com/ptkdev/ptkdev-stickers#-install-free)

<!-- all-shields/projects-badges4:END -->

## 💫 License

-   Code and Contributions have **MIT License**
-   Images and logos have **CC BY-NC 4.0 License** ([Freepik](https://it.freepik.com/) Premium License)
-   Documentations and Translations have **CC BY 4.0 License**

###### Copyleft (c) 2021 [Patryk Rzucidło](https://ptk.dev) ([@PTKDev](https://twitter.com/ptkdev)) <[support@ptkdev.io](mailto:support@ptkdev.io)>
