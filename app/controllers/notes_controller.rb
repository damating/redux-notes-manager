class NotesController < ApplicationController
  before_action :set_note, only: [:update, :destroy]

  # GET /notes
  def index
    @notes = NoteSerializer.new(
      Note.all.includes(:user).order(created_at: :desc)
    ).serializable_hash
  end

  # POST /notes
  def create
    @note = Note.new(note_params)
    if @note.save
      render json: NoteSerializer.new(@note).serializable_hash[:data], status: :created
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1
  def update
    if @note.update(note_params)
      render json: NoteSerializer.new(@note).serializable_hash[:data], status: :ok
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1
  def destroy
    if @note
      @note.destroy
      render json: {}, status: :ok
    else
      render json: { errors: 'Record not found.' }, status: 404
    end
  end

  private
    def set_note
      @note = Note.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:text, :is_url, :user_id)
    end
end
