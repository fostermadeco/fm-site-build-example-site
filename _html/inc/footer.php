    <footer>
    </footer>
        
    <!-- local dev -->
    <script src="/assets/dev/modernizr.js"></script>
    <script src="/assets/dev/main.js"></script>
    <!-- production files -->
    <!--
    <script src="/assets/dist/modernizr-min-3dfc54f5db.js"></script>
    <script src="/assets/dist/main-min-cd5e83c2be.js"></script>
    <noscript id="deferred-styles"><link rel="stylesheet" href="/assets/dist/main-min-1b5dfee136.css"></noscript>
    <script>
        var loadDeferredStyles = function() {
            var addStylesNode = document.getElementById("deferred-styles");
            var replacement = document.createElement("div");
            replacement.innerHTML = addStylesNode.textContent;
            document.body.appendChild(replacement)
            addStylesNode.parentElement.removeChild(addStylesNode);
        };
        var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
        if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
        else window.addEventListener('load', loadDeferredStyles);
    </script>
    -->

    </body>
</html>