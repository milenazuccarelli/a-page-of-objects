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


//unrelated but... 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104287201-2', 'auto');
ga('send', 'pageview');

