address2url
===========

This is a jquery plugin that takes a address and creates the appropriate native map apps link

##Basic Usage

This requires jquery to be loaded before it gets called in the page!

```
<span id='address'></span>
<script src='addr2url.js'></script>
<script>$('#address').addr2url("Address To Convert")
```
#####Produces
```

```

##Advanced Usage

The plugin accepts 4 parameters, only 1 of which is required.

1. The Address in which to create directions for.
2. A boolean (true or false), if it is true it will always put a Google Maps link no matter whic operating system.
3. The class(s) to apple to the Apple maps link (if none is provided it defaults to 'btn btn-primary' from Bootstrap)
4. The class(s) to apple to the Google maps link (if none is provided it defaults to 'btn btn-success' from Bootstrap)

####Example

```
<span id='address'></span>
<script src='addr2url.js'></script>
<script>$('#address').addr2url("Address To Convert",true,"btn btn-danger","btn btn-warning")
```

#####Produces
```

```
