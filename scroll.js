$.fn.moveIt = function(){
      var $window = $(window);
      var instances = [];

      $(this).each(function(){
        instances.push(new moveItItem($(this)));
      });

      window.onscroll = function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
          inst.update(scrollTop);
        });
      }
    }

    var moveItItem = function(el){
      this.el = $(el);
      this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function(scrollTop){
      this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
    };

    $(function(){
      $('[data-scroll-speed]').moveIt();
    });

function windowSize() {
  windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
  windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

}

//Init Function of init it wherever you like...
windowSize();

// For example, get window size on window resize
$(window).resize(function() {
  windowSize();
  console.log('width is :', windowWidth, 'Height is :', windowHeight);
  if (windowWidth < 660) {
        // Initialization
    $(function(){
      $('[data-scroll-speed]').moveIt().event.stopPropagation();
    });

  }
});


// rotate the fruit label
$(window).scroll(function() {
var theta = $(window).scrollTop() / 20 % Math.PI;
$('.spin').css({ transform: 'rotate(' + theta + 'rad)' });
$('.spin-reverse').css({ transform: 'rotate(-' + theta + 'rad)' });
});
