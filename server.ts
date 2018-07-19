import App from "./app";

let port = process.env.PORT || '3000';

App.listen(port, function() {
    console.log(`server running in" + ${port}`);
});