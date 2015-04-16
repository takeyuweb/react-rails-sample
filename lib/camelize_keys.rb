# https://gist.github.com/yasaichi/afd58a8fb9cb8e81f23b#file-camelize_keys-rb

require 'active_support/core_ext'

class Hash
  unless method_defined?(:camelize_keys)
    def camelize_keys(first_letter = :upper)
      transform_keys { |key| key.camelize(first_letter) rescue key }
    end
  end

  unless method_defined?(:camelize_keys!)
    def camelize_keys!(first_letter = :upper)
      transform_keys! { |key| key.camelize(first_letter) rescue key }
    end
  end
end
