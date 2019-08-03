/**
 * <script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/underscore/underscore-min.js"></script>
<script src="../node_modules/backbone/backbone-min.js"></script> */
require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        underscore: '../../node_modules/underscore/underscore-min',
        backbone: '../../node_modules/backbone/backbone-min'
        
    }
})
define(['app'], function(App) {
    App.initialize();
});