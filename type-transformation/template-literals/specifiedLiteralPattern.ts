type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

// Should not cause error 

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// Should error:

// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("http://facebook.com");
