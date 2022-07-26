<!DOCTYPE html>
<html>
    <head>
        <title>JS program To Get Website URL</title>



    </head>
<body>
    <p>Click the button to display Website URL</p>
    <button on click="getURL()">Get URL</button>
    <p id="url"></p>
    <script type="text/javascript">
        function getURL() {
            var WebsiteUrl = document.URL;
            document.getElementaryById("url").innerHTML = "the website url is:"+ Websiteurl;
            
        }
    </script>
</body>