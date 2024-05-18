<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="D">
    <xsl:output method="html" encoding="UTF-8" />

    <xsl:template match="/list">
        <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>

        <html>
            <head>
                <title>Dwight Studio's Repository</title>
                <script src="https://kit.fontawesome.com/55eb9c16a8.js"></script>
                <style>
                    body { background-image: linear-gradient(135deg, #4BAE6F, #155C79); color: white; font-family: Helvetica, sans-serif; width: 100vw; height: 100vh; overflow: hidden; }
                    #wrapper { display: flex; flex-direction: column; justify-content: center; justify-items: center; align-items: center; margin: 10vh 10vw; }
                    #title { font-size: 4em; margin-bottom: 40px; text-align: center; }

                    .subtitle { font-size: 2em; margin-bottom: 20px; text-align: center }
                    .block { padding: 20px; display: flex; flex-direction: column; background-color: rgba(255, 255, 255, 0.5); border-radius: 10px; }

                    #code-wrapper { display: flex; flex-direction: column; margin-bottom: 40px; }
                    #code { color: #155C79 font-family: source-code-pro, monospace; font-size: 1.5vw; }
                    #comment { font-size: 1vw; font-style: italic; align-self: end; text-align: left; }

                    /* Originated from Nginx-Autoindex, Copyright (c) 2019 Kuba Pilecki (MIT License) */

                    table#contents td a { text-decoration: none; display: block; padding: 10px 30px 10px 30px; pointer: default; }
                    table#contents { width: 50%; margin-left: auto; margin-right: auto; border-collapse: collapse; border-width: 0px; }
                    table#contents td { padding: 0px; word-wrap: none; white-space: nowrap; }
                    table#contents td.icon, table td.size, table td.mtime, table td.actions { width: 1px; white-space: nowrap; }
                    table#contents td.icon a { padding-left: 0px; padding-right: 5px; }
                    table#contents td.name a { padding-left: 5px; }
                    table#contents td.size a { color: #2b633f }
                    table#contents td.mtime a { padding-right: 0px; color: #2b633f }
                    table#contents tr * { color: #155C79; }
                    table#contents tr:hover * { color: #2e2e2e !important; }
                    table#contents tr.directory td.icon i { color: #FBDD7C !important; }
                    table#contents tr.directory.go-up td.icon i { color: #BF8EF3 !important; }
                    table#contents tr.separator td { padding: 10px 30px 10px 30px }
                    table#contents tr.separator td hr { display: none; }
                    table#contents tr td.actions ul { list-style-type: none; margin: 0px; padding: 0px; visibility: hidden; }
                    table#contents tr td.actions ul li { float: left; }
                    table#contents tr:hover td.actions ul { visibility: visible; }

                    nav#breadcrumbs { margin-bottom: 30px; display: flex; justify-content: center; align-items: center; }
                    nav#breadcrumbs ul { list-style: none; display: inline-block; margin: 0px; padding: 0px; }
                    nav#breadcrumbs ul .icon { font-size: 14px; }
                    nav#breadcrumbs ul li { float: left; }
                    nav#breadcrumbs ul li a { color: #FFF; display: block; background: #4BAE6F; text-decoration: none; position: relative; height: 40px; line-height: 40px; padding: 0 10px 0 5px; text-align: center; margin-right: 23px; }
                    nav#breadcrumbs ul li:nth-child(even) a { background-color: #4BAE6F; }
                    nav#breadcrumbs ul li:nth-child(even) a:before { border-color: #4BAE6F; border-left-color: transparent; }
                    nav#breadcrumbs ul li:nth-child(even) a:after { border-left-color: #4BAE6F; }
                    nav#breadcrumbs ul li:first-child a { padding-left: 15px; -moz-border-radius: 4px 0 0 4px; -webkit-border-radius: 4px; border-radius: 4px 0 0 4px; }
                    nav#breadcrumbs ul li:first-child a:before { border: none; }
                    nav#breadcrumbs ul li:last-child a { padding-right: 15px; -moz-border-radius: 0 4px 4px 0; -webkit-border-radius: 0; border-radius: 0 4px 4px 0; }
                    nav#breadcrumbs ul li:last-child a:after { border: none; }
                    nav#breadcrumbs ul li a:before, nav#breadcrumbs ul li a:after { content: ""; position: absolute; top: 0; border: 0 solid #4BAE6F; border-width: 20px 10px; width: 0; height: 0; }
                    nav#breadcrumbs ul li a:before { left: -20px; border-left-color: transparent; }
                    nav#breadcrumbs ul li a:after { left: 100%; border-color: transparent; border-left-color: #4BAE6F; }
                    nav#breadcrumbs ul li a:hover { background-color: #155C79; }
                    nav#breadcrumbs ul li a:hover:before { border-color: #155C79; border-left-color: transparent; }
                    nav#breadcrumbs ul li a:hover:after { border-left-color: #155C79; }
                    nav#breadcrumbs ul li a:active { background-color: #155C79; }
                    nav#breadcrumbs ul li a:active:before { border-color: #155C79; border-left-color: transparent; }
                    nav#breadcrumbs ul li a:active:after { border-left-color: #155C79; }
                </style>
                <script type="text/javascript"><![CDATA[
                    document.addEventListener('DOMContentLoaded', function(){

                        function calculateSize(size)
                        {
                        var sufixes = ['B', 'KB', 'MB', 'GB', 'TB'];
                        var output = size;
                        var q = 0;

                        while (size / 1024 > 1)
                        {
                            size = size / 1024;
                            q++;
                        }

                        return (Math.round(size * 100) / 100) + ' ' + sufixes[q];
                        }

                        if (window.location.pathname == '/')
                        {
                            document.querySelector('.directory.go-up').style.display = 'none';
                        }

                                var path = window.location.pathname.split('/');
                                var nav = document.querySelector("nav#breadcrumbs ul");
                                var pathSoFar = '';

                                for (var i=1; i<path.length-1; i++)
                                {
                        pathSoFar += '/' + decodeURI(path[i]);
                                    nav.innerHTML += '<li><a href="' + encodeURI(pathSoFar)  + '">' + decodeURI(path[i]) + '</a></li>';
                                }

                        var mtimes = document.querySelectorAll("table#contents td.mtime a");

                        for (var i=0; i<mtimes.length; i++)
                        {
                            var mtime = mtimes[i].textContent;
                            if (mtime)
                            {
                                var d = new Date(mtime);
                                mtimes[i].textContent = d.toLocaleString();
                            }
                        }

                        var sizes = document.querySelectorAll("table#contents td.size a");

                        for (var i=0; i<sizes.length; i++)
                        {
                            var size = sizes[i].textContent;
                            if (size)
                            {
                                sizes[i].textContent = calculateSize(parseInt(size));
                            }
                        }

                    }, false);
                ]]></script>
            </head>
            <body>
                <div id="wrapper">
                    <div id="title">The Dwight Studio's APT Repository</div>
                    <div class="subtitle">Installation</div>
                    <div id="code-wrapper">
                        <div id="code" class="block">
                            <div>$ sudo wget -O - https://deb.dwightstudio.fr/install-repository.sh | sudo bash</div>
                            <div id="install"></div>
                        </div>
                        <div id="comment">Enter this command in your favorite shell to install it.</div>
                    </div>
                    <div class="subtitle">Repository content</div>
                    <div class="block">
                        <nav id="breadcrumbs"><ul><li><a href="/"><i class="fa fa-home"></i></a></li></ul></nav>
                        <table id="contents">
                            <tbody>
                                <tr class="directory go-up">
                                    <td class="icon"><a href="../"><i class="fa fa-arrow-up"></i></a></td>
                                    <td class="name"><a href="../">..</a></td>
                                    <td class="size"><a href="../"></a></td>
                                    <td class="mtime"><a href="../"></a></td>
                                </tr>

                                <xsl:if test="count(directory) != 0">
                                    <tr class="separator directories">
                                        <td colspan="4"><hr/></td>
                                    </tr>
                                </xsl:if>

                                <xsl:for-each select="directory">
                                    <tr class="directory">
                                        <td class="icon"><a href="{.}/"><i class="fa fa-folder"></i></a></td>
                                        <td class="name"><a href="{.}/"><xsl:value-of select="." /></a></td>
                                        <td class="size"><a href="{.}/"></a></td>
                                        <td class="mtime"><a href="{.}/"><xsl:value-of select="./@mtime" /></a></td>
                                    </tr>
                                </xsl:for-each>

                                <xsl:if test="count(file) != 0">
                                    <tr class="separator files">
                                        <td colspan="4"><hr/></td>
                                    </tr>
                                </xsl:if>

                                <xsl:for-each select="file">
                                    <tr class="file">
                                        <td class="icon"><a href="{.}" download="{.}"><i class="fa fa-file"></i></a></td>
                                        <td class="name"><a href="{.}" download="{.}"><xsl:value-of select="." /></a></td>
                                        <td class="size"><a href="{.}" download="{.}"><xsl:value-of select="./@size" /></a></td>
                                        <td class="mtime"><a href="{.}" download="{.}"><xsl:value-of select="./@mtime" /></a></td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                </div>

                <script>
                    const queryString = window.location.search;
                    const urlParams = new URLSearchParams(queryString);
                    const install = urlParams.get('install');

                    if (install != null) document.getElementById("install").innerHTML = "$ sudo apt update &amp;&amp; sudo apt install " + install;
                </script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>