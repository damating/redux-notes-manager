class NoteSerializer
  include FastJsonapi::ObjectSerializer
  set_type :note  # optional
  set_id :id
  attributes :text, :is_url
  belongs_to :user, record_type: :user

  attribute :user_name do |object|
    "#{object.user.name} #{object.user.surname}"
  end

  attribute :created_at do |object|
    object.created_at.strftime("%Y-%m-%d %H:%M")
  end
end
