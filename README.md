# Simple Slider

<p>
  <a href="https://github.com/LoginamNet/react-simple-slider/blob/main/LICENCE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@loginamnet/simple-slider">
    <img src="https://img.shields.io/npm/v/@loginamnet/simple-slider.svg" alt="version" />
  </a>
  <a href="https://prettier.io">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?color=%23c1a8e2">
  </a>
  <a href="https://bundlephobia.com/result?p=@loginamnet/simple-slider">
    <img src="https://img.shields.io/bundlephobia/minzip/@loginamnet/simple-slider?color=%238ab4f8&label=gzip%20size">
  </a>
</p>

  <p>
    A <strong>Simple Slider</strong> on React with multiple scrolling modes and the ability to add custom buttons.
  </p>

---

## Usage

### Instalation

```bash
$ npm i @loginamnet/simple-slider
```

### Import

```javascript
import SimpleSlider from "@loginamnet/simple-slider";
```

### Basic Example

```javascript
import SimpleSlider from "@loginamnet/simple-slider";

import MySlide2 from "./componets";
import MySlide3 from "./componets";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider>
        {/* first slide created directly inside the slider */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: "20px",
          }}
        >
          <h1>First Slide</h1>
        </div>

        {/* second slide imported from components folder */}
        <MySlide2 text="Second Slide" />

        {/* third slide imported from components folder */}
        <MySlide3>Third Slide</MySlide3>
      </SimpleSlider>
    </div>
  );
}
```

### What can I place inside

Simple Slider accepts ReactNode as "children" — this is a type that includes everything that can be returned by the [render()](https://react.dev/reference/react/Component#render) method of React components.

### Width, Height and Background

The slider occupies 100% of the width and height of the parent element in width and height, and each slide occupies 100% of the size of the slider itself. Resize the parent container to resize the slider.

In the example above, each slide will have a size of 600x400px.

Both the slider and the slides have a transparent background. Add styles to the parent element and to each created slide, respectively (for example, to create a preloader).

---

## Props

| Prop                     | Type            | Values                                                                              | Default   | Description                                                                                                                |
| ------------------------ | --------------- | ----------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `controls`               | boolean, string | true, false , "on-hover"                                                            | false     | direct control of the slider using the buttons without automatic scrolling or with a stop at hover                         |
| `controlsOptions?`       | object          | **in the table below**                                                              | {}        | various options for setting slider controls when the "controls" option is enabled                                          |
| `startWithSlide?`        | number          | number                                                                              | 1         | the number of the slide to start scrolling from                                                                            |
| `slidingType?`           | string          | "sequence", "underlay", "overlay"                                                   | "overlay" | the type of slide offset relative to each other                                                                            |
| `slidingDirection?`      | string          | "left", "top", "right", "bottom"                                                    | "left"    | the direction of movement of the slides                                                                                    |
| `slidingDuration?`       | number          | number                                                                              | 2000      | the time of one slide movement cycle (ms)                                                                                  |
| `slidingDelay?`          | number          | number                                                                              | 1000      | delay before the start of the next slide movement for auto sliding or the "controls" option with the value "on-hover" (ms) |
| `slidingTimingFunction?` | string          | string                                                                              | "ease"    | [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)                  |
| `stopOnHover?`           | boolean         | true, false                                                                         | false     | topping auto sliding with hover on slider (not relevant when the "controls" option is set to "on-hover")                   |
| `customPrevButtonFN?`    | function        | `(prevSlide: () => void, sliding?: boolean, atFirstSlide?: boolean) => JSX.Element` |           | a function for rendering a custom button to move to the previous slide (explanations and an example below)                 |
| `customNextButtonFN?`    | function        | `(nextSlide: () => void, sliding?: boolean, atLastSlide?: boolean) => JSX.Element`  |           | a function for rendering a custom button to move to the next slide (explanations and an example below)                     |

---

## Licence

[MIT](https://github.com/LoginamNet/react-simple-slider/blob/main/LICENCE)

It can be used **for free** in any personal or commercial project :gift:
