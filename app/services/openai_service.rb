require 'httparty'
require 'openai'
require 'json'
require 'logger'
class OpenaiService
  include HTTParty
  # base_uri 'https://api.openai.com'

  def initialize
    @api_key = ENV['OPENAI_ACCESS_TOKEN']
    @assistant_id = 'asst_k9grcHI33lkJ35owpwjrMHya'
    @thread_id = 'thread_qlE7jgGhV8NCTKYErMO9TJo0'
  end

  # def get_response(user_message)
  #   create_message = HTTParty.post('https://api.openai.com/v1/threads/thread_qlE7jgGhV8NCTKYErMO9TJo0/messages', {
  #     headers: {
  #       'Content-Type' => 'application/json',
  #       'OpenAI-Beta' => 'assistants=v2',
  #       'Authorization' => "Bearer #{@api_key}"
  #     },
  #     body: {
  #       "role": "user",
  #       "content": user_message
  #     }.to_json
  #   })

  #   # p create_message

  #   run_program = HTTParty.post('https://api.openai.com/v1/threads/thread_qlE7jgGhV8NCTKYErMO9TJo0/runs', {
  #     headers: {
  #       'Content-Type' => 'application/json',
  #       'OpenAI-Beta' => 'assistants=v2',
  #       'Authorization' => "Bearer #{@api_key}"
  #     },
  #     body:
  #       {
  #         "assistant_id": "asst_pBgur0RkAPrwfLYxsc2AdGmw",
  #         "instructions": "Please address the user as Jane Doe. The user has a premium account."
  #       }.to_json
  #   })

  #   display_message = HTTParty.get('https://api.openai.com/v1/threads/thread_qlE7jgGhV8NCTKYErMO9TJo0/messages', {
  #     headers: {
  #       'Content-Type' => 'application/json',
  #       'OpenAI-Beta' => 'assistants=v2',
  #       'Authorization' => "Bearer #{@api_key}"
  #     }
  #   })
  #     p display_message.parsed_response['data']
  #   return display_message.parsed_response['data'].to_json
  #   end
end

