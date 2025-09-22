#!/bin/env node
//  OpenShift sample Node application
var auth            = require('http-auth');
var express         = require('express');
var app             = express();
var http            = require('http').Server(app);
var fs              = require('fs');
var path            = require('path');
var mysql           = require('mysql');
var bodyParser      = require('body-parser');
var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var session         = require('express-session');
//var bcrypt          = require('bcrypt');

var basic = auth.basic({
  realm: "Shirt Club",
  file: __dirname + "/users.htpasswd"
});

var env = process.argv[2];

var basicOuth = auth.connect(basic);


/*
 * Database Connection
 */
var db_user = 'root';
//var db_password = env == 'dev' ? 'root' : 'je8F6r;rR*9U11';
var db_password = env == 'dev' ? 'root' : 'DBpass123#4';
var db_host = env == 'dev' ? '127.0.0.1' : 'localhost';

var connection = mysql.createConnection({
    host:       db_host,
    port:       3306,
    user:       db_user,
    password:   db_password,
    database:   'shirtclub'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});



/*
 * Authentication
 */
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new LocalStrategy(
  function(username, password, done) {

    // asynchronous verification, for effect...
    process.nextTick(function () {

      // Find the user by username.  If there is no user with the given
      // username, or the password is not correct, set the user to `false` to
      // indicate failure and set a flash message.  Otherwise, return the
      // authenticated `user`.
      username = [username, username];

      connection.query('SELECT * FROM `user` WHERE `member_id` = ? OR `email` = ?', username, function(err, results, fields){

        if(err || results[0] === undefined){
          console.log(err);
          return done(null, false, { message: 'invalid username' });
        }

        /*
        bcrypt.compare(password, results[0].password, function(err, res){

          if(err || !res || res === undefined){
            return done(null, false, { message: 'invalid password' });
          }
          else{
            return done(null, results[0]);
          }
        });
        */

        if(password === results[0].password){
          return done(null, results[0]);
        }
        else{
          return done(null, false, { message: 'invalid password' });
        }
      });
    });
  }
));



/**
 *  Define the sample application.
 */
var delCoin = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.

        //
        //
        // Change 80 to 1050 to debug on LOCAL
        //  mysql -u root -p shirtclub (connect to mysql)
        //  ssh -i ~/.ssh/id_rsa root@45.55.241.100 (local to DO remote)

        self.port = env == 'dev' ? 3080 : 5000;
    };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.setupTerminationHandlers();
    };


};   /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new delCoin();

zapp.initialize();

app.set('trust proxy', 1);
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/client', express.static(path.join(__dirname, 'public/client')));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app, connection, passport, basicOuth);
require('./restApi')(app, connection, passport);

app.get('/privacy',(req, res) => {
  res.render('privacy');
});

http.listen(zapp.port, function(){
});



