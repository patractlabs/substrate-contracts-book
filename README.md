# Substrate Contracts Book
This is the source repo to build "Substrate Contracts Book".

## Build
This repo is build by `mdBook`, however `mdBook` do not support `i18n` now, thus we choose a 
forked version `mdBook` to support `i18n` features.

In this repo, we could notice the tag `[language.en_US]`, `[language.zh_CN]` and etc... Those tag is supported by the forked [Ruin0x11/mdBook#branch:localization](https://github.com/Ruin0x11/mdBook/tree/localization).

When build this repo by yourself, please build the forked version first:

```bash
$ git clone https://github.com/Ruin0x11/mdBook/
$ cd mdBook
$ git checkout -b localization origin/localization
$ cargo build --release
# move to other location and rename the bin file
$ mv target/release/mdbook <any exported path>/mdbook-ruin0x11
```

Then, you could build this repo by yourself:
```bash
$ mdbook-ruin0x11 build
$ mdbook-ruin0x11 serve
```

## Publish to gh-pages
```bash
make deploy
```