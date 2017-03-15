# Create, Test, and Deploy an Http Server in Node.js

This is the solution used to tackle a 3 part blog series on creating, testing and deploying a Http Server with Node.js.

This isn't meant to be a simple Hello World example but rather a solid working example of something you might use to ship to production. In a future post we will build upon this example exploring why frameworks like Express and Hapi play such a big role in our ecosystem.

This series is broken down into three parts:

* [Part 1](https://blog.hellotangible.com/create-test-and-deploy-an-http-server-in-node-js-part-1-6c6d024e53fd#.2iwgunua3): To kick off this series we’re going to create a simple http server, then add what’s called a dispatcher to help redirect a request to their appropriate endpoints.
* Part 2: We will then introduce some automated testing, refactoring the base we’ve built and see some green balls.
* Part 3: Lastly in part 3, we will leverage some hidden powers of npm, automating tasks, and finally deploy our bits to Xervo.
