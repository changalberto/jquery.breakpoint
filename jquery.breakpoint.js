'use strict';

(function($){
  // Custom Breakpoint Event
  $.event.special['resize:breakpoint'] = {
    setup: function(){
    },
    teardown: function(){
      $.event.remove(window, 'breakpoint', this.handler);
    },
    add: function(handleObj){
      var self = this;
          this.handler = function(e){
            e.target = self;
            e.breakpoint = window.breakpoint;
            handleObj.handler.apply(self, arguments);
          };
      $.event.add(window, 'breakpoint', this.handler);
    }
  };
})(jQuery);
