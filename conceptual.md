### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
they're an authentication token that can be used across multiple API's and hostnames, so a particular doesn't need multiple tokens created to be authenticated in multiple places. This is more API friendly.

- What is the signature portion of the JWT?  What does it do?
it contains all the information in the header and payload, but signed with a secret key, which is what allows the authentication.

- If a JWT is intercepted, can the attacker see what's inside the payload?
yes, it's encoded not encrypted

- How can you implement authentication with a JWT?  Describe how it works at a high level.
jwt.sign is used to create the token after setting the payload, secret key and any options. then jwt.decode and jwt.verify to read the token and verify the user or raise an error if they can't be verified.

- Compare and contrast unit, integration and end-to-end tests.
unit testing focuses on testing small things like classes. end-to-end tests cover the whole spectrum of a project, which is necessary but if it finds something wrong it can be hard to pinpoint the root issue. integration tests are in between those two. they test how different units interact together.

- What is a mock? What are some things you would mock?
it's a practice in testing where objects are replaced with mocks that simulate their behavior. one might do this if an object depends on other objects that aren't being tested (meaning this isn't done with end-to-end testing). 

- What is continuous integration?
it's the technique of merging small changes in the code continuously through development rather than one or two big changes all at once.

- What is an environment variable and what are they used for?
variables that set a value in your code from a different file than where that value setting is happening. for example an environmental variable might be declared and stored in a .env file but used in an app.js file.

- What is TDD? What are some benefits and drawbacks?
test driven development. you write tests first then write the code and testing it as you go, with expectation that it will fail at first. you get the knowledge that the individual pieces of your code are functional. the code should end up simple with nothing unneeded. but it's slow.

- What is the value of using JSONSchema for validation?
it's a very efficient manner of validating and saves you from having to write long drawn out code to do the validation from scratch. easy to change if changes to the requirements for the data come about.

- What are some ways to decide which code to test?
as I understood it, everything gets tested at some point, it's more a matter of deciding between unit testing, integration and end-to-end, and when to do them. if there was something not to test, I would think it's because it has no function or importance. 

- What does `RETURNING` do in SQL? When would you use it?
it immediately ends an SQL procedure and gives you some information from the call to work with, saving you from having to make another SQL call.

- What are some differences between Web Sockets and HTTP?
with websockets, updates are sent immediately when available, whereas with HTTP they have to be requested. so with realtime applications, websockets is necessary rather than using HTTP. websockets are much less demanding on servers.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I found flask to be a lot more intuitive, direct and efficient. it feels like you have to dance around more with express. though there's a couple things that might be clouding my opinion. one, it's possible I'm thinking about python vs node just as much as express vs flask without realizing it. and also, I had gotten used to flask and started to like it. that could have prejudiced me against express when we switched over.
