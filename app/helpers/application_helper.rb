module ApplicationHelper
  def get_state(object)
    send "get_#{object.class.name.underscore}_state", object
  end

  def get_entry_state(entry)
    format_state(
        id: entry.id,
        url: entry_url(entry),
        title: entry.title,
        body: entry.body,
        placements: entry.placements.map { |placement| get_placement_state(placement) },
        created_at: entry.created_at,
        updated_at: entry.updated_at
    )
  end

  def get_placement_state(placement)
    format_state(
        id: placement.id,
        category: get_category_state(placement.category),
        primary: placement.primary)
  end

  def get_category_state(category)
    format_state(
        id: category.id,
        label: category.label,
        url: category_url(category)
    )
  end

  def format_state(state)
    state.stringify_keys.camelize_keys(:lower)
  end
end
