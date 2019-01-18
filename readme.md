### Stopwatch

## Notes
# Summary
I tried to go a simple approach in creating the stopwatch functionality. I'm sure there are improvements that can be made and I would love feedback. I opted to use es6 class declarations as they are simply a syntactical sugar over Javascript's existing prototype-based inheritance. In other words, easier to read. 

I found this take home rather interesting and fun. I haven't coded in vanilla javascript and html for a long time so this is a good refresher. I loved experiencing the differences in React and html/javascript. I took React's HOC feature, jsx, and one way data-binding for granted. I see the benefit in leveraging a library such as React. 

# Setbacks?
There was a setback I faced after completing the basic stopwatch functionality. I was trying to figure out how to dynamically declare new Stopwatch class and have it available somewhere in the app for the click events to have access to. I tried to work around a solution based on the stopwatch class I created. I defined a variable to hold an object to store new instances for class declarations. I'm sure there are other methods to this solution. 

My mind is very used to thinking in terms of React. That caused some delay in progress, but got it done none the less.

# Design
As for design, I went for simple and clean. If there is one thing I wanted to add is the flip animation when number values change. I would have leveraged an existing library to get this done but I tried work on the css portion on my own. I could have added extra features to this takehome. Things like lap times could have been easily created as I already had a working solution. I decided to invest in css as I tend to spend more time there.

As for css, I'm very used to using SASS, leveraging it's inheritance, mix-ins, partials, and variables. I love using BEM styling along with SASS nesting feature. I used css here but just wanted to let you know my style in css.