# README

## Bug reproduction for hotwire spark

```bash
git clone https://github.com/KonnorRogers/hotwire-spark-test
cd hotwire-spark-test
bundle install
be rails s
```

go to `localhost:3000`, and then open the console, there should be a number of console.log()'s running.

Delete the `app/javascript/controllers/hello_controller.js`, the controller should disconnect and the logs should stop. But currently, they do not.


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
