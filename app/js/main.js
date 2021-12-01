$(function () {


  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8,
    });
  }



  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="10 15"><path id="angle_left" class="cls-1" d="M973.64,3459.16a0.745,0.745,0,0,1,.178-0.49l3.741-4.28a0.548,0.548,0,0,1,.863,0,0.762,0.762,0,0,1,0,.98l-3.311,3.79,3.31,3.79a0.776,0.776,0,0,1,0,.99,0.56,0.56,0,0,1-.862,0l-3.741-4.28a0.772,0.772,0,0,1-.178-0.5h0Zm0,0" transform="translate(-973.625 -3454.19)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox=10 15"><path id="angle_right" class="cls-1" d="M1347,3459.18a0.816,0.816,0,0,0-.17-0.5l-3.77-4.29a0.556,0.556,0,0,0-.87,0,0.771,0.771,0,0,0,0,.99l3.33,3.8-3.33,3.8a0.771,0.771,0,0,0,0,.99,0.568,0.568,0,0,0,.87,0l3.77-4.3a0.715,0.715,0,0,0,.17-0.49h0Zm0,0" transform="translate(-1342 -3454.19)"/></svg></button>',
    infinite: false
  });

  $('.merchandise-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.merchandise-tabs__top-item').removeClass('merchandise-tabs__top-item--active');
    $(this).addClass('merchandise-tabs__top-item--active');

    $('.merchandise-tabs__content-item').removeClass('merchandise-tabs__content-item--active');
    $($(this).attr('href')).addClass('merchandise-tabs__content-item--active');
  });


  $('.merchandise-slide__thumb').slick({
    asNavFor: '.merchandise-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.merchandise-slide__big').slick({
    asNavFor: '.merchandise-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });


  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active')
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list')
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list')
  });


  $('.select-style, .merchandise__item-num').styler({

  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });


  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    rateFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height= "16px" viewBox = "0 0 18 16" version = "1.1" ><g id = "surface1" ><path d = "M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg > '
  });


  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);

});