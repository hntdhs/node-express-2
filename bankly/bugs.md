found 4 bugs, fixed 3. 

in auth.js (in routes not middleware), the 'let user' statement in the /login route needed an await added to it for authorization to work properly. without it the function was proceeding on to grant a token whether or not the login information was good or not.
test("should reject the attempt of an unregistered user to log in", async function() {
    const response = await request(app)
      .post("/auth/login")
      .send({
        username: "not-a-user",
        password: "pwd1"
      });
    expect(response.statusCode).toBe(401);
})

in users.js, the get route for information on a particular user returns an empty object instead of an error when you request info on a non-existent user. added a throw new express error with a message and code 404.
test("should respond with 404 error to request for information on non-existent user", async function() {
    const response = await request(app)
      .get("/users/not-a-user")
      .send({
          _token: tokens.u1
      });
    expect(response.statusCode).toBe(404);
})

in users.js, the PATCH route for updating a user didn't work because of the requireAdmin middleware being required. that meant that a user who isn't an admin couldn't edit themselves. and it's unnecessary because an admin would still be able to edit a user without requireAdmin because of the if statement on line 75 with !req.curr_admin && req.curr_username !== req.params.username. 
test - can a non-admin user edit themselves? can an admin?
test("should allow a non-admin to edit their own user information", async function() {
    const response = await request(app)
      .patch("/users/u1")
      .send({
           _token: tokens.u1,
          first_name: "new name",
          last_name: "new name",
          phone: "987",
          email: "new@email.com"
      });
    expect(response.statusCode).toBe(200);
})

there is also an issue with the delete route, because I was able to delete a user while logged in as a non-admin.