My take at the caesar coding challenge for solidabis.

Bit of training with new React features (hooks).

Start with 'npm install' && 'npm start' from the commandline after the install has been done.

App fetches the bullshit sentences from the API provided and automatically starts to loop through them.

There is custom dictionary implemented and if the decrypted sentence has 2 or more finnis words from there it will be returned.

If the sentence doesn't translate just return the ecnrypted version and add a bit of text to tell that none of the keys worked.

Also added a heroku proxy for the call, since there was CORS issues.