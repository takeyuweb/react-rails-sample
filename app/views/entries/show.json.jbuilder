get_entry_state(@entry).each do |k, v|
  json.set! k, v
end