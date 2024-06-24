window.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // localstorage

    function localValue() {
        localStorage.setItem('card1', 'Подходит для теплых полов');
        localStorage.setItem('card2', 'Различные формы и размеры плитки');
        localStorage.setItem('card3', '100% водостойкость');
        localStorage.setItem('card4', 'Стойкий к истиранию материал');
        localStorage.setItem('card5', 'Не выделяет токсины и не имеет запаха');
        localStorage.setItem('card6', 'Покрытие, приятное на ощупь');
    }

    const sliderSlideBtn = document.querySelectorAll('.slider__slide-btn')

    const sliderSlideCardText = document.querySelectorAll('.slider__slide-card-text')

    sliderSlideCardText.forEach((item, i) => {
        item.innerHTML = localStorage.getItem(`card${i + 1}`)

        if(item.innerHTML == ''){
            localValue()
            item.innerHTML = localStorage.getItem(`card${i + 1}`)
        }
    })

    sliderSlideBtn.forEach(item => {
        item.addEventListener('click', () => {
            localValue()

            sliderSlideCardText.forEach((item, i) => {
                item.innerHTML = localStorage.getItem(`card${i + 1}`)
            })
        })
    })



    const sliderSlideFrInp = document.querySelectorAll('.slider__slide-fr-inp')
    const sliderSlideFrCardText = document.querySelectorAll('.slider__slide-fr .slider__slide-card-text')

    sliderSlideFrInp.forEach((item, i) => {
        item.addEventListener('input', () => {
            if (item.value !== '') {
                localStorage.setItem(`card${i + 1}`, item.value);

                sliderSlideFrCardText.forEach((item, i) => {
                    item.innerHTML = localStorage.getItem(`card${i + 1}`)
                })
            }
        })
    })

    const sliderSlideScInp = document.querySelectorAll('.slider__slide-sc-inp')
    const sliderSlideScCardText = document.querySelectorAll('.slider__slide-sc .slider__slide-card-text')

    sliderSlideScInp.forEach((item, i) => {
        item.addEventListener('input', () => {
            if (item.value !== '') {
                localStorage.setItem(`card${i + 1}`, item.value);

                sliderSlideScCardText.forEach((item, i) => {
                    item.innerHTML = localStorage.getItem(`card${i + 1}`)
                })
            }
        })
    })

})