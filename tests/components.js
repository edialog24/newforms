void function() { 'use strict';

QUnit.module('components')

QUnit.test('basic component rendering', 2, function() {
  var PersonForm = forms.Form.extend({
    name: forms.CharField(),
    dob: forms.DateField()
  })

  var PersonFormSet = forms.formsetFactory(PersonForm, {extra: 1})

  var formProps ={
    form: PersonForm
  , autoId: false
  , className: 'test'
  }

  var formsetProps ={
    formset: PersonFormSet
  , autoId: false
  , className: 'test'
  }

  reactHTMLEqual(React.createElement(forms.RenderForm, formProps),
'<div class="test">\
<div>Name: <input type="text" name="name"></div>\
<div>Dob: <input type="text" name="dob"></div>\
</div>')

  reactHTMLEqual(React.createElement(forms.RenderFormSet, formsetProps),
'<div class="test"><div>\
<div>Name: <input type="text" name="form-0-name"></div>\
<div>Dob: <input type="text" name="form-0-dob"></div>\
</div></div>')
})

}()