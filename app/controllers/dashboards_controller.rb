class DashboardsController < ApplicationController
  include Secured

  def show
    # session[:userinfo] was saved earlier on Auth0Controller#callback
    @user = session[:userinfo]
    if @message.present?
      @response = gpt_call(@message)['choices'][0]['message']['content']
    end
  end

  def chat_post
    if params[:message]
      @message = params[:message]


      response = gpt_call(@message)['choices'][0]['message']['content']

      # Redirect to the show action with the response
      redirect_to dashboards_show_path(response), notice: @response
    end
  end

  def gpt_post
    @message = params[:message]
    client = OpenAI::Client.new
    gpt_response = client.chat(parameters: {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: params[:message] }]
    })

    response_text = gpt_response['choices'][0]['message']['content']

    render json: { response: response_text }
    # # api_key = ENV['OPENAI_API_KEY']


    # # openai_service = OpenaiService.new(api_key)
    # # response = openai_service.get_response


    # client = OpenAI::Client.new
    # gpt_response = client.chat(parameters: {
    #   model: "gpt-3.5-turbo",
    #   messages: [{ role: "user", content: params[:message] }]
    # })

    # @response = gpt_response
    # # respond_to do |format|
    # #   format.json { render json: { response: @response } }
    # # end
  end

  private

  def gpt_call(message)
    client = OpenAI::Client.new
    chaptgpt_response = client.chat(parameters: {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    })
    @response = chaptgpt_response
  end

  def ask_openai()

  end

end
