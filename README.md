# url-redirector
JavaScript/Apache-based URL redirector

This project is a custom configuration for the Apache Docker container. 

This project assumes you already have Nginx Proxy Manager up and running in an existing container with a dedicated network for it.

To install:
-----------

Edit docker-compose.yaml to suit your needs. Feel free to change container_name and networks/name according to your existing setup. You can 
also uncomment ipv4_address and adjust it to fit the subnet of your nginx-pm network. Once the docker-compose file is set accordingly, simply run:

$ docker-compose up -d

-----------------------

Once installed, configuration of URLs is simple. Simply edit redirects.js to suit your redirect links. You can see sample links in the pathMap array.

const pathMap = {
    '/site1': 'https://www.google.com',
    '/site2': 'https://www.youtube.com',
    '/site3': 'https://www.netflix.com',
    // Add more paths above, using syntax: 
    // '/[path]': '[URL to redirect to]',
    // DEFAULT REDIRECT BELOW
    '*': 'https://www.google.com'
    };
    
The links are built as follows:

'/[path]': '[URL]',

So, if your domain is mydomain.com and you wanted to have mydomain.com/test redirect to google.com, you would use

'/test': 'https://google.com',


The default redirect is always on the bottom, indicated by '*' in the path field. If you remove this line, you will only redirect specified paths and will 
not have a 'catchall' for any path that doesn't match. If you keep the default and would like to change the URL, you may do so (but do not change the path from '*').

If you decide to remove the default for any reason, be sure to remove the trailing comma from the last link in your array.

-----------------------

This project relies on Apache2 with mod_rewrite and mod_headers. We use these 2 modules to rewrite the URL string internally and disable browser caching so that 
any link updates are immediate.

-----------------------

Any questions, comments, or suggestions may be sent to whill@mu-world.net.

