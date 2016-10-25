import Ember from 'ember';

export default Ember.Component.extend({
  colors: ["#ff0000", "#00ff00", "#0000ff"],
  picked: "",

  actions: {
    colorPicked: function (evt) {
      if (evt.type === "change") {
        var selectedColor = Ember.$('input').val();
      } else {
        var selectedColor = evt.target.getAttribute('value');
      };
      this.set('picked', selectedColor);
    }
  }
});
