// Function for loading plugins
function cfLoadPlugin(plugin) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'plugins/' + plugin + '/' + plugin + '.js'; //innerHTML = '<script src="' + plugin + '/' + plugin + '.js"></script>';
    document.head.appendChild(script);
}