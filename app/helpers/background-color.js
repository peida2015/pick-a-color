import Ember from 'ember';

export function backgroundColor([color]/*, hash*/) {
  return Ember.String.htmlSafe(`<div class="color"
      style=background-color:${color}
      value=${color}></div>`);
}

export default Ember.Helper.helper(backgroundColor);
