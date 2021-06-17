$(document).ready(function () {
  feather.replace();

  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });

  $('.slider-hero').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrow: false,
        }
      }
    ]
  });

  $('.slider-banner').slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrow: false,
          centerMode: true,
          centerPadding: "10px"
        }
      }
    ]
  });

  $('.slider-product').slick({
    arrows: true,
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: "0px",
          initialSlide: 1
        }
      }
    ]
  });

  $('.slider-articles').slick({
    arrows: false,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  $('.slider-filter').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  });

  $('.slider-forproduct').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-navproduct'
  });

  $('.slider-navproduct').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-forproduct',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

  $('#list').on("click", function(event){
    event.preventDefault();
    $('.mc-product .card-group').addClass('list-grid');
    $('#grid').removeClass('active');
    $('#list').addClass('active');
  });
  $('#grid').on("click", function(event){
    event.preventDefault();
    $('.mc-product .card-group').removeClass('list-grid');
    $('#grid').addClass('active');
    $('#list').removeClass('active');
  });
  $("#filterBtn").on('click', function(event) {
    document.getElementById("sidebar-widget").style.display="block";
    console.log('sadassa');
  });

  $("#sortingBtn").on('click', function(event) {
    document.getElementById("sorting-mobile").style.display="block";
  });

  $("#closeFilter").on('click', function(event) {
    document.getElementById("sidebar-widget").style.display="none";
  });

  $("#closeSorting").on('click', function(event) {
    document.getElementById("sorting-mobile").style.display="none";
  });

  $("#ex2").slider({});

  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });

});