iOS-Redirecter-Plugin
=====================

Plugin allows site administrators to easily redirect iPhone/iPad users to specific location.
Simply include plugin on page and call ```js  iOSRedirecter.initialize({redirectTo: url}).redirect(); ```

Usage example:
```xhtml
  <script type="text/javascript" src="iOS-Redirecter-Plugin.js"></script>

  <script type="text/javascript">
    var console = console || { error: function(message) { alert(message); } };

    try { iOSRedirecter.initialize({redirectTo: 'http://stackoverflow.com/'}).redirect(); }
    catch (e) { console.error(e.getMessage()); }
  </script>
```

See included index.html for example.
