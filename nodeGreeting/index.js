const GreetingMessageAnalyzer = require("./greetingMessageAnalyzer");

exports.handler = (event, context, callback) => {
    const analyzer = new GreetingMessageAnalyzer(event);
    
    analyzer
        .morning((text) => {
            callback(null,"おはよう！");
        })
        .noon((text) => {
            callback(null,"こんにちは!");
        })
        .evening((text) => {
            callback(null,"こんばんは！");  
        })
        .notGreeting((text) => {
            callback();
        })
        .analyze();
};