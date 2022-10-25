---
title: Usage
description: Learn all the various way you can use Valkyrie.
layout: page
---

## Install

Valkyrie is published to npm, but can also be manually downloaded if needed.

<div class="row my-4">
  <div class="col-md-6">
{{< md >}}
### npm
Install [Valkyrie](https://www.npmjs.com/package/@sippy-platform/valkyrie)—including SVGs, icon sprite, and icon fonts—with npm.

{{< highlight sh >}}
npm i @sippy-platform/valkyrie
{{< /highlight >}}
{{< /md >}}
  </div>
  <div class="col-md-6">
{{< md >}}
### Download
[Releases are published on GitHub](https://github.com/sippy-platform/valkyrie/releases/) and include icon SVGs, fonts, the React component, license, and readme.

<a class="btn btn-outline-primary" href="https://github.com/sippy-platform/valkyrie/releases/latest/"><i class="vi vi-arrow-down-to-line"></i> Download latest</a>
{{< /md >}}
  </div>
</div>

## Using icons

Valkyrie can be used in various ways, through our icon font, as embedded SVGs, as external SVGs, or with our React component.

<div class="row my-4">
  <div class="col-md-4">
{{< md >}}
### Embedded
Embed Valkyrie icons in your HTML. Here we've used a custom `width` and `height`.
{{< /md >}}
  </div>
  <div class="col-md-8">
    {{< example >}}<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-valkyrie-sword" viewBox="0 0 16 16"><path d="M8 0a.75.75 0 0 1 .75.75v8.402L8 9.55l-.75-.397V.75A.75.75 0 0 1 8 0Z"/><path d="M3.1 8.087a.75.75 0 1 0-.7 1.326l3.997 2.116-1.998 1.058a.75.75 0 1 0 .702 1.326l2.149-1.138v2.475a.75.75 0 0 0 1.5 0v-2.475l2.15 1.138a.75.75 0 1 0 .7-1.326L9.604 11.53l3.998-2.116a.75.75 0 0 0-.702-1.326L8 10.681 3.1 8.087Z"/></svg>{{< /example >}}
  </div>
</div>

<div class="row my-4">
  <div class="col-md-4">
{{< md >}}
### External image
If you prefer to import images instead, you can just copy the file you need and reference it.
{{< /md >}}
  </div>
  <div class="col-md-8">
    {{< example >}}<img src="/valkyrie/assets/img/valkyrie-sword.svg" alt="Valkyrie" width="32" height="32">{{< /example >}}
  </div>
</div>

<div class="row my-4">
  <div class="col-md-4">
{{< md >}}
### Icon font
Use the main `vi` class and add the name of the icon you'd like to use when using the icon font (e.g., `<i class="vi vi-valkyrie-sword"></i>`).

Use `font-size` and `color` to change the icon appearance.
{{< /md >}}
  </div>
  <div class="col-md-8">
    {{< example >}}<i class="vi vi-valkyrie-sword"></i>{{< /example >}}
    {{< example >}}<i class="vi vi-valkyrie-sword" style="font-size: 2rem; color: cornflowerblue;"></i>{{< /example >}}
  </div>
</div>

<div class="row my-4">
  <div class="col-md-4">
{{< md >}}
## Styling
You can simply apply slasses that change the color of text to change the icon's color.
{{< /md >}}
  </div>
  <div class="col-md-8">
    <div class="code-preview">
      <svg class="vi vi-triangle-exclamation text-success" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 5.5a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-1.5 0V6.25A.75.75 0 0 1 8 5.5Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
        <path d="M8 1a.75.75 0 0 1 .649.374l7.25 12.5A.75.75 0 0 1 15.25 15H.75a.75.75 0 0 1-.649-1.126l7.25-12.5A.75.75 0 0 1 8 1Zm5.948 12.5L8 3.245 2.052 13.5h11.896Z"/>
      </svg>
    </div>
{{< highlight html >}}
<svg class="vi vi-triangle-exclamation text-success" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  ...
</svg>
{{< /highlight >}}
  </div>
</div>

<div class="row my-4">
  <div class="col-md-4">
{{< md >}}
## Accessibility
For purely decorative icons, add `aria-hidden="true"`. Otherwise, provide an appropriate text alternative. Depending on which method you're using to add the icons, and where you're using them (e.g. as standalone images, or as the only content of a button or similar control), there are various possible approaches. Here are a few examples.

**When using SVGs with `<img>` elements, screen readers may not announce them as images, or skip the image completely.** Include an additional `role="img"` on the `<img>` element to avoid any issues. [See this article for details.](https://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-2)
{{< /md >}}
  </div>
  <div class="col-md-8">
    <div class="code-preview">
      <img src="/valkyrie/assets/img/valkyrie-sword.svg" alt="Valkyrie" width="32" height="32">
    </div>
{{< highlight html >}}
<!-- alt="..." on <img> element -->
<img src="/valkyrie/assets/img/valkyrie-sword.svg" alt="Valkyrie" ...>
{{< /highlight >}}
    <div class="code-preview">
      <i class="vi vi-github" role="img" style="font-size: 2em" aria-label="GitHub"></i>
    </div>
{{< highlight html >}}
<i class="vi vi-github" role="img" aria-label="GitHub"></i>
{{< /highlight >}}
    <div class="code-preview">
      <button type="button" class="btn btn-primary" aria-label="Mute">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="vi vi-volume-slash" viewBox="0 0 16 16"><path d="M1.28.22A.75.75 0 1 0 .22 1.28l4.044 4.045A1.742 1.742 0 0 0 4 6.25v4c0 .966.784 1.75 1.75 1.75h.927a.25.25 0 0 1 .146.047l4.238 3.061a.75.75 0 0 0 1.189-.608v-1.19l2.47 2.47a.75.75 0 1 0 1.06-1.06L1.28.22Zm9.47 11.59v1.223l-3.049-2.202a1.75 1.75 0 0 0-1.024-.331H5.75a.25.25 0 0 1-.25-.25V6.56l5.25 5.25Zm0-8.343v4.222l1.5 1.5V2a.75.75 0 0 0-1.19-.608L7.225 4.163l1.074 1.075 2.452-1.771Z"/></svg>
      </button>
    </div>
{{< highlight html >}}
<!-- aria-label="..." on the control -->
<button ... aria-label="Mute">
  <svg class="vi vi-volume-slash" aria-hidden="true" ...>
  ...
  </svg>
</button>
{{< /highlight >}}
  </div>
</div>
