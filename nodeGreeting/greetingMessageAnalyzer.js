module.exports = class GreetingMessageAnalyzer{
  constructor(event){
      this._event = event;
      this._morningCallback = (text) => {};
      this._noonCallback = (text) => {};
      this._eveningCallback = (text) => {};
      this._notGreetingCallback = (text) => {};
  }
  
  morning(callback){
      this._morningCallback = callback;
      return this;
  }
  
  noon(callback){
      this._noonCallback = callback;
      return this;
  }
  
  evening(callback){
      this._eveningCallback = callback;
      return this;
  }
  
  notGreeting(callback){
      this._notGreetingCallback = callback;
      return this;
  }
  
  analyze(){
      if(this._isText()){
          if(this._isMorning()){
              this._morningCallback(this._event.message.text);
          }else if(this._isNoon()){
              this._noonCallback(this._event.message.text);
          }else if(this._isEvening()){
              this._eveningCallback(this._event.message.text);
          }else{
              this._notGreetingCallback(this._event.message.text);
          }
      }else{
          this._notGreetingCallback("");
      }
  }
  
  _isText(){
      return this._event.message.type === "text";
  }
  
  _isMorning(){
      return this._event.message.text === "おはよう";
  }
  
  _isNoon(){
      return this._event.message.text === "こんにちは";
  }
  
  _isEvening(){
      return this._event.message.text === "こんばんは";
  }
};