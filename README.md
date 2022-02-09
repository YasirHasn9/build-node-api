# build-node-api

### Before jumping into building our api, we need to know what is api ?

Api is an Application Programming Interface that let computers/applications connect to each other, where one
application send a request to the server. Then if the request follows the api principles, the server will send back
information based on the client request.

The api follows standardized principles, properties, and constrains. To have the sever sending back resources to the
client, the client should use a http verbs with endpoints

### What is HTTP verbs ?

1. GET: read data
2. POST: send or create new data
3. PATCH: update data
4. DELETE: delete data

### What are endpoints?

You can think of endpoints as url(route) that we are requesting.
Since the api is entirely based on request/response, the client combined the http-verbs and urls
to have the server response to whatever we want.

1. the client uses the proper endpoint
2. the client uses a http-verb
3. make a request to the sever
4. the server sends back information formatting in `json`, `xml`, `html`, `images`, and many more.

The api is constrained by

1. Client-server architecture
   The client should request to the server with third-party interpretation

2. Statelessness
   The client can request a resource from the server in a complete isolation. The server and the client don't need
   to store information about each other

3. Cachability
   The response can be cashable. Caching the resource can improve the performance and scalability of an APi.

4. Layers
   Different layers of the API architecture should work together, creating a scalable system.

5. Uniform Interface
   The communication between the server and the client should follow the standardized language that independent of both.
   this improve the performance and the scalability

# ---------------------------------------------------------------------------------------------------

Now, let's build our api

1. install package.json
   `npm init -y`
   or
   `yarn init -y`

2. install `Express` library
   `npm install express`
   or
   `yarn add express`

3. create js file, name it whatever you want but the industry recommend to use `index.js` or `app.js`
   im going to choose `index.js`
   you can do either manually through or run in the terminal in the root directory `touch index.js`

4. Now, lets create our first request to the server by using the http-verbs and url

```js
server.HTTP-VERB('endpoint | url | route" , (req, res) => {
    this is a callback function that takes two argument i called them the homies (request and response)
    first one is the request, it's what we want from the server
    second one is the response, it's what the server sends back to us
    the cb handles the request and response
})
```

Imagine, we want to take a look at all the users in our database

### GET

get enables us to request a data from the server

```js
server.get("/users", (req, res) => {
  res.status(200).send([{ name: "Jon" }, { name: "Doe" }]);
});
```

status(#number)
we should pass numbers to the status function that indicates if our requests have been successful or
failed. You can check them [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status] "here"

### POST

post enables us to create or send a new data to the server
Before sending anything to the server, we need a way to parse JSON body.
So we are gonna use a middleware that would help with that.
to parse json body
`sever.use(express.json())`

### Node is all about using Middlewares, even the verb we are using are middleware

**_ Tip _**
It's tedious to stop and rerun our sever each time we are making a new request or when we update
our code. We need a way to let our sever update each time we are making a change to our code.
There is a library called `nodemon` that we can use it only in the production so we should add it
under the dev-dependency
run `npm install nodemon --save-dev` or `yarn add nodemon --save`

Now, I want create a static website where I can sever html, css, and js files form different
directory

Now, let's serve a static website

1. create a folder in the root called `public`
2. create `index.html` , `style.css`, and `script.js` inside `public`
3. link the files
4. include this code in your `index.js`

```js
// whatever the name your folder
server.use(express.static("public"));
```

**_ Tip _**
Now, if you go back to your GitHup repo, you'll find thousands or unnecessary files been uploaded.
Also, it's dangerous to let user's sensitive information been exposed to the public.
So, we should not upload these files and even when you work with other devs, its so easy for
them to for the repo and run `npm install` or `yarn install` to install all the dependencies
in the `package.json`
