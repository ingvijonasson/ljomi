---
title: Debug mode in Kirby
summary: How to setup debug mode only for local enviroment
published: true
---
If the file `config.php` does not exist in `site/config` directory then create one and set debug to `true`

```php
<?php
return [
    'debug' => true,
];
``` 

This will log out any error with a useful message in your browser when something is not right.

You probably don't want to log this error in production. Therefore you can create a second config file for working locally. So let's set the already created `config.php` file debug property to `false`. And create another config file for development only. Next to config.php create `config.localhost.php` and set the debug propery to `true`. This way debug mode will only be set to true when domain is localhost.  