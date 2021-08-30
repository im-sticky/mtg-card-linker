# MTG Card Seer

A set of easy to use HTML Web Components that use the [Scryfall API](https://scryfall.com/) to display MTG card images automatically on hover.

## Basic usage

Each component has a rich and flexible API that are easy to use out of the box. Basic usage would be wrapping whatever text you would want to function as a card image popover in the `card-link` element like you would with a `span`. This will automatically search and display the specified card when hovering the link. Note that the text does not have to be the card name exactly, it performs a fuzzy search so partial names or spelling errors will work if no cards have a similar name.

Example:
```html
<card-link>Viscera Seer</card-link>
```

You can read more about specific component APIs below or view more in depth examples [here](example/index.html).

### Features

- Made for modern browsers
- Mobile ready
- Supports external customization

## Installation

The library is available as a package on [npm](https://www.npmjs.com/package/mtg-card-seer). Currently there is no static location for a production file to hotlink to.

```
npm install mtg-card-seer --save
```

After that import the library in your code and all components will now be usable in your HTML.

```js
import 'mtg-card-seer';
```

### Dev setup

To get the project up and running with a test page and hot reloading, clone the repo and run the following:

```
npm install
npm start
```

To build the project for production code:

```
npm build
```

## API documentation

Find each component with what attributes and events are available to them here. It's important to note that these are [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and some of them use the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) so they will not use global CSS for elements.

### \<card-link\>

#### Attributes

HTML attributes that can be used to specify information to the component directly. All are optional. Example:
```html
<card-link name="lightning bolt">bolt</card-link>
```

| Attribute | Type | Description |
|---|---|---|
| name | String | Specifies the fuzzy search term. Has priority in being used over text directly specified in the component. |
| set | String | The 3-5 letter magic set code to search within. Sets and their codes can be found [here](https://scryfall.com/sets). |
| collector | Number | The specific collector number of the card to find. the `set` attribute is required if using this. |
| face | Number | Specific card image to show for double sided cards. 1 is front and 2 is back. |
| price-info | Boolean | Shows any available pricing information and links to purchase sites. |

#### Events

JavaScript event listeners you can hook into. Example:
```js
document.querySelector('#selector').addEventListener('fetchCard', e => console.log('fetched card', e));
```

| Event | Description |
|---|---|
| fetchCard | Fired after querying the Scryfall API and getting a successful response. |
| fetchError | Fired after attempting to query the Scryfall API and getting an 404 not found error. |
| displayCard | Fired when hovering the link and the card image displays. |
| hideCard | Fired when moving off the link and the card image hides. |
| touchCard | Fired when touching the `card-link` component on any touch enabled device. Can be used with `displayCard` / `hideCard` to determine mobile display and hide events. |

#### Styling

This component uses the Shadow DOM and requires to be styled using specific [::part selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/::part). Example:
```css
.element-selector::part(link) {
  color: red;
  text-decoration: none;
}
```

| Part | Matching Element | Description |
|---|---|---|
| link | \<a\> | The wrapping anchor for the child text and all component's elements. Image will be relative to this. |
| container | \<div\> | Container element for all children elements that appear in card popup. Positioned based on mouse cursor and parent anchor. |
| image | \<img\> | The image that is retrieved from Scryfall. May be multiple images for double-faced cards. |
| price-list | \<ul\> | List container for all of the prices. |
| price-item | \<li\> | Individual list item for a price. |
| price-link | \<a\> | Link which contains pricing text. |

### \<card-inline\>

#### Attributes

HTML attributes that can be used to specify information to the component directly. All are optional. Example:
```html
<card-inline static>Whir of Invention</card-inline>
```

| Attribute | Type | Description |
|---|---|---|
| name | String | Specifies the fuzzy search term. Has priority in being used over text directly specified in the component. |
| set | String | The 3-5 letter magic set code to search within. Sets and their codes can be found [here](https://scryfall.com/sets). |
| collector | Number | The specific collector number of the card to find. the `set` attribute is required if using this. |
| face | Number | Specific card image to show for double sided cards. 1 is front and 2 is back. |
| price-info | Boolean | Shows any available pricing information and links to purchase sites. |
| static | Boolean | The rendered images will not be links leading to Scryfall. |

#### Events

JavaScript event listeners you can hook into. Example:
```js
document.querySelector('#selector').addEventListener('fetchCard', e => console.log('fetched card', e));
```

| Event | Description |
|---|---|
| fetchCard | Fired after querying the Scryfall API and getting a successful response. |
| fetchError | Fired after attempting to query the Scryfall API and getting an 404 not found error. |

#### Styling

This component uses the Shadow DOM and requires to be styled using specific [::part selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/::part). Example:
```css
.element-selector::part(link) {
  color: red;
  text-decoration: none;
}
```

| Part | Matching Element | Description |
|---|---|---|
| container | \<div\> | Container element for all inline images. |
| image | \<img\> | The image that is retrieved from Scryfall. May be multiple images for double-faced cards. |
| price-list | \<ul\> | List container for all of the prices. |
| price-item | \<li\> | Individual list item for a price. |
| price-link | \<a\> | Link which contains pricing text. |

## Feature roadmap

- [x] ~~add search by collector number to `card-link`~~
- [x] ~~add ability to specify card face to display for `card-link`~~
- [x] ~~add optional display for price info to `card-link` preview~~
- [x] ~~add proper mobile support for `card-link`~~
- [ ] add a11y preview mode for `card-link`
- [x] ~~add inline card preview component~~
- [x] ~~add decklist component~~
- [ ] decklist component visual view
- [ ] add sideboard cuts/adds component
- [ ] multilingual support

Discovered a bug? Log it [here](https://github.com/im-sticky/mtg-card-seer/issues) with browser details and steps to replicate it.

Have an idea for a feature? Recommend it [here](https://github.com/im-sticky/mtg-card-seer/issues).