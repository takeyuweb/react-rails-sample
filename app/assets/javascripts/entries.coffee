# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.erb.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on 'submit', '.edit_entry', (e)->
  form = $(e.target)
  form.find('.entry_placements_attributes_category_id').each ()->
    checkbox = this
    if checkbox.checked == false
      $(checkbox).siblings('.entry_placements_attributes__destroy').val('true')
    else
      $(checkbox).siblings('.entry_placements_attributes__destroy').val('false')
  true