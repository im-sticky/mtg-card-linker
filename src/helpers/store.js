import {LitElement} from 'lit-element';
import {MOBILE_WIDTH} from 'helpers/constants';


export function createAction(type, creator = (type, value) => ({type, value})) {
  return [type, creator.bind(null, type)];
}

export class StateElement extends LitElement {
  constructor() {
    super();

    this.dispatch = (action, callback) => {
      this.state = this.reducer(this.state, action);
      this.requestUpdate().then(updated => {
        if (updated && !!callback && typeof callback === 'function') {
          callback();
        }
      });
    };
  }

  get apiRoot() {
    return 'https://api.scryfall.com/';
  }

  get isMobile() {
    return window.innerWidth < MOBILE_WIDTH;
  }

  createReducer(initialState, handlers) {
    this.state = initialState;
    this.reducer = (state, action) => {
      state = state || initialState;

      if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
        return handlers[action.type](state, action);
      }

      return state;
    };
  }

  emitEvent(eventName, initOptions) {
    this.dispatchEvent(new Event(eventName, Object.assign({
      bubbles: true,
      composed: true,
    }, initOptions)));
  }

  render() {
    throw new Error('NotImplementedError');
  }
}