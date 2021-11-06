ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.770208, 37.636814],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([55.769327, 37.640039], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/contacts/1.jpg',
        iconImageSize: [12, 12],
    });

    myMap.geoObjects.add(myPlacemark);
};
document.querySelectorAll('.projects__button').forEach(function (steps) {
    steps.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.projects__cards-wrapper').forEach(function (stepContent) {
            stepContent.classList.remove('projects__cards-wrapper--active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('projects__cards-wrapper--active')

        document.querySelectorAll('.projects__button').forEach(function (stepContent) {
            stepContent.classList.remove('projects__button--active')
            stepContent.classList.add('projects__button--disactive')
        })
        event.currentTarget.classList.add('projects__button--active')
        event.currentTarget.classList.remove('projects__button--disactive')
    })
});
document.querySelectorAll('.services__button').forEach(function (steps) {
    steps.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.services__card-wrapper').forEach(function (stepContent) {
            stepContent.classList.remove('services__card-wrapper--active')
        })
        document.querySelector(`[data-service="${path}"]`).classList.add('services__card-wrapper--active')

        document.querySelectorAll('.services-right__works').forEach(function (stepContent) {
            stepContent.classList.remove('services-right__works--active')
        })
        document.querySelector(`[data-works="${path}"]`).classList.add('services-right__works--active')

        document.querySelectorAll('.services__button').forEach(function (stepContent) {
            stepContent.classList.remove('services__button--active')
            stepContent.classList.add('services__button--disactive')
        })
        event.currentTarget.classList.add('services__button--active')
        event.currentTarget.classList.remove('services__button--disactive')
    })
});
document.querySelector('.form-search__button').addEventListener('click', function(event) {
  event.preventDefault();
})

document.querySelector('.form-search__close-button').addEventListener('click', function(event) {
  event.preventDefault();
})


if (window.innerWidth  < 1024) {
  document.querySelector('.form-search__button').addEventListener('click', function(event) {
    document.querySelector('.form-search__input').classList.add('search--active')
    document.querySelector('.form-search__close-button').classList.add('search--active')
    document.querySelector('.form-search__button').classList.add('search--disactive');
  })

  document.querySelector('.form-search__close-button').addEventListener('click', function(event) {
    document.querySelector('.form-search__input').classList.remove('search--active')
    document.querySelector('.form-search__close-button').classList.remove('search--active')
    document.querySelector('.form-search__button').classList.remove('search--disactive');
  })
};
document.querySelector('.header__burger').addEventListener('click', function(event) {
  event.preventDefault();
})

document.querySelector('.burger__close-button').addEventListener('click', function(event) {
  event.preventDefault();
})


if (window.innerWidth  < 768) {
  document.querySelector('.header__burger').addEventListener('click', function(event) {
    document.querySelector('.header__menu').classList.add('burger--active');
  })

  document.querySelector('.burger__close-button').addEventListener('click', function(event) {
    document.querySelector('.header__menu').classList.remove('burger--active')
    // document.querySelector('.form-search__close-button').classList.remove('burger--active')
    // document.querySelector('.form-search__button').classList.remove('burger--disactive');
  })
};
document.querySelector('.request-form__button').addEventListener('click', (event) => {
  event.preventDefault();
  if (!name_validation()) {
    document.querySelector('#contacts__name-input').querySelector('.validation-error')
      .classList.add('validation-error--active')
  } else {
    document.querySelector('#contacts__name-input').querySelector('.validation-error')
      .classList.remove('validation-error--active')
  }

  if (!validateEmail('#contacts__email-input', '.request-form__input')) {
    document.querySelector('#contacts__email-input').querySelector('.validation-error')
      .classList.add('validation-error--active')
  } else {
    document.querySelector('#contacts__email-input').querySelector('.validation-error')
      .classList.remove('validation-error--active')
  }
})

document.querySelector('.subscribe-form__button').addEventListener('click', (event) => {
  event.preventDefault();
  if (!validateEmail('#about__email-input', '.subscribe-form__input')) {
    document.querySelector('#about__email-input').querySelector('.validation-error')
      .classList.add('validation-error--active')
  } else {
    document.querySelector('#about__email-input').querySelector('.validation-error')
      .classList.remove('validation-error--active')
  }
})

function name_validation() {
  let stroke = document.querySelector('#contacts__name-input').querySelector('.request-form__input').value
  return (/^[A-Za-zА-Яа-я\s]+$/.test(stroke) && stroke.length >= 5)
}

function validateEmail(selector1, selector2) {
  var x = document.querySelector(selector1).querySelector(selector2).value
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  return !(atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length )
};