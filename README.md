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