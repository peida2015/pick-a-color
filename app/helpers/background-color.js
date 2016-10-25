import Ember from 'ember';

export function backgroundColor([color]/*, hash*/) {
  var str = `<div class="color"
      style=background-color:${color}
      value=${color}></div>`;
  return Ember.String.htmlSafe(str);
}

export default Ember.Helper.helper(backgroundColor);
