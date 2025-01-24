# Changelog


## v1.3.0

[compare changes](https://github.com/bloggrify/bloggrify-mistral/compare/v1.2.3...v1.3.0)

### 🚀 Enhancements

- Upgrade to bloggrify 2.0.0-beta1 ([c359310](https://github.com/bloggrify/bloggrify-mistral/commit/c359310))

### 🩹 Fixes

- Issue #3 Insufficient contrast ratio in the footer ([#3](https://github.com/bloggrify/bloggrify-mistral/issues/3))
- We should not have default values for social networks. Otherwise, everyone has to override the value to not display it. ([4dde78b](https://github.com/bloggrify/bloggrify-mistral/commit/4dde78b))
- Issue #5 add alt attribute to the author avatar ([#5](https://github.com/bloggrify/bloggrify-mistral/issues/5))
- Issue #4 add h1 title on archive and home layout ([#4](https://github.com/bloggrify/bloggrify-mistral/issues/4))
- Add missing image to the blog ([805f695](https://github.com/bloggrify/bloggrify-mistral/commit/805f695))
- Remove irrelevant path with this new blog content ([ab629c9](https://github.com/bloggrify/bloggrify-mistral/commit/ab629c9))
- Author image ([64764bf](https://github.com/bloggrify/bloggrify-mistral/commit/64764bf))

### 💅 Refactors

- Improve the author side card and warn users if they try to use a platform not supported. Add Bluesky ([1abec45](https://github.com/bloggrify/bloggrify-mistral/commit/1abec45))
- Use common blog content with a git submodule ([9953518](https://github.com/bloggrify/bloggrify-mistral/commit/9953518))
- App.config.ts is not included anymore in the final package. So we don't need to use the build trick ([7dce43b](https://github.com/bloggrify/bloggrify-mistral/commit/7dce43b))
- Adapt the templates to the new version of bloggrify ([f73cc2a](https://github.com/bloggrify/bloggrify-mistral/commit/f73cc2a))
- Simplify footer template and use general composable for newsletter subscription ([b987c97](https://github.com/bloggrify/bloggrify-mistral/commit/b987c97))

### 📖 Documentation

- Change the default description to be more relevant ([dcb87c8](https://github.com/bloggrify/bloggrify-mistral/commit/dcb87c8))

### 🏡 Chore

- Update app.config.ts for the demo environment ([adc9b51](https://github.com/bloggrify/bloggrify-mistral/commit/adc9b51))
- Revert last commit ([14b20e6](https://github.com/bloggrify/bloggrify-mistral/commit/14b20e6))
- Update demo config file to show sharing capabilities ([7451120](https://github.com/bloggrify/bloggrify-mistral/commit/7451120))
- Update dependency to bloggrify core ([1462f16](https://github.com/bloggrify/bloggrify-mistral/commit/1462f16))
- Update dependency to bloggrify core 2.0.0 ([3c93956](https://github.com/bloggrify/bloggrify-mistral/commit/3c93956))

### ❤️ Contributors

- Hugo Lassiège <hlassiege@gmail.com>

## v1.2.3

[compare changes](https://github.com/bloggrify/bloggrify-mistral/compare/v1.2.1...v1.2.3)

### 🏡 Chore

- **release:** V1.2.1 ([57b9429](https://github.com/bloggrify/bloggrify-mistral/commit/57b9429))
- Upgrade dependency ([0cd3161](https://github.com/bloggrify/bloggrify-mistral/commit/0cd3161))
- Upgrade dependency ([6d66b84](https://github.com/bloggrify/bloggrify-mistral/commit/6d66b84))
- Update dependencies ([ebb2e9a](https://github.com/bloggrify/bloggrify-mistral/commit/ebb2e9a))
- **release:** V1.2.2 ([35b5793](https://github.com/bloggrify/bloggrify-mistral/commit/35b5793))
- Update dependencies ([179e083](https://github.com/bloggrify/bloggrify-mistral/commit/179e083))

### ❤️ Contributors

- Hugo Lassiège <hugo@malt.com>
- Hlassiege <hlassiege@gmail.com>

## v1.2.2

[compare changes](https://github.com/bloggrify/bloggrify-mistral/compare/v1.2.1...v1.2.2)

### 🏡 Chore

- **release:** V1.2.1 ([57b9429](https://github.com/bloggrify/bloggrify-mistral/commit/57b9429))
- Upgrade dependency ([0cd3161](https://github.com/bloggrify/bloggrify-mistral/commit/0cd3161))
- Upgrade dependency ([6d66b84](https://github.com/bloggrify/bloggrify-mistral/commit/6d66b84))
- Update dependencies ([ebb2e9a](https://github.com/bloggrify/bloggrify-mistral/commit/ebb2e9a))

### ❤️ Contributors

- Hugo Lassiège <hugo@malt.com>
- Hlassiege <hlassiege@gmail.com>

## v1.2.1

[compare changes](https://github.com/bloggrify/bloggrify-mistral/compare/v1.2.0...v1.2.1)

### 🩹 Fixes

- Archive template didn't follow the convention ([7750665](https://github.com/bloggrify/bloggrify-mistral/commit/7750665))

### 🏡 Chore

- Transfer repository to bloggrify ([da10e5d](https://github.com/bloggrify/bloggrify-mistral/commit/da10e5d))
- Upgrade bloggrify dependency ([dc81cf4](https://github.com/bloggrify/bloggrify-mistral/commit/dc81cf4))
- Remove configuration that is now useless ([f3a474f](https://github.com/bloggrify/bloggrify-mistral/commit/f3a474f))
- Upgrade dependency ([6df0cd5](https://github.com/bloggrify/bloggrify-mistral/commit/6df0cd5))

### ❤️ Contributors

- Hlassiege <hlassiege@gmail.com>

## v1.2.0

[compare changes](https://github.com/bloggrify/bloggrify-mistral/compare/v1.1.0...v1.2.0)

### 🚀 Enhancements

- On the side card, use the author configuration instead of the blog configuration ([f892fc6](https://github.com/bloggrify/bloggrify-mistral/commit/f892fc6))

### 🩹 Fixes

- Use NuxtImg instead of img ([f3f26ff](https://github.com/bloggrify/bloggrify-mistral/commit/f3f26ff))

### ❤️ Contributors

- Hlassiege <hlassiege@gmail.com>

## v1.1.0


### 🚀 Enhancements

- Add tags support ([90221a4](https://github.com/bloggrify/bloggrify-mistral/commit/90221a4))

### 🩹 Fixes

- Issue https://github.com/bloggrify/bloggrify/issues/5 youtube and twitter links failed to render ([80db35e](https://github.com/bloggrify/bloggrify-mistral/commit/80db35e))
- Remove warning because of non used props ([233a087](https://github.com/bloggrify/bloggrify-mistral/commit/233a087))

### 🏡 Chore

- Upgrade dependencies and add some info in the package.json file ([98aceed](https://github.com/bloggrify/bloggrify-mistral/commit/98aceed))
- Upgrade bloggrify dependency and extends from bloggrify ([4669f6d](https://github.com/bloggrify/bloggrify-mistral/commit/4669f6d))

### 🎨 Styles

- Add style for links in all blog posts ([ed0b7eb](https://github.com/bloggrify/bloggrify-mistral/commit/ed0b7eb))

### ❤️ Contributors

- Hlassiege <hlassiege@gmail.com>

