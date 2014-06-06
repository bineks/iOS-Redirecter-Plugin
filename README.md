iOS-Redirecter-Plugin
=====================
Usage example:
```
<script src="iOS-Redirecter-Plugin.min.js"></script>
<script type="text/javascript">
    window.onload=function(){
        try{
            iOSRedirect({redirectTo:'http://www.google.com',iPhone:false,iPad:true});
        }
        catch(error){
            console.log(error);
        }
    }
</script>
```
iOS Redirecter Plugin
