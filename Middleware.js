// // Middleware to check if the user is authenticated
// function isAuthenticated(req, res, next) {
//   if (req.user) {
//     // Check if the user session exists
//     return next(); // User is authenticated, proceed to the cart page
//   } else {
//     // User is not authenticated, redirect them to the login page
//     res.redirect("/");
//   }
// }

// // Apply the isAuthenticated middleware to the cart page route
// app.get("/cart", isAuthenticated, function (req, res) {
//   // Render the cart page
//   res.render("cart");
// });
