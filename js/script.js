$(document).ready(function () {
  $("#comments-slider").owlCarousel({
    navigation: false,
    slideSpeed: 100,
    paginationSpeed: 800,
    singleItem: true,
    autoPlay: false,
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  padding: 0.1,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(document).ready(function () {
    $("#comments-slider2").owlCarousel({
      navigation: false,
      width: 300,
      slideSpeed: 100,
      paginationSpeed: 800,
      singleItem: true,
      autoPlay: false,
    });
  });


//   preloader

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

//   btn

let color = '#7872B9'; 
function change(identifier) {
 identifier.style.background = color;
}

let text = '#fff'; 
function changeText(identifier2) {
 identifier2.style.color = text;
}

// let dec = 'none'; 
// function changeText(identifier) {
//  identifier.style.text-decoration = dec;
// }

// let button = document.getElementById('button');
// let menu = document.getElementById('menu');
// let wrap = document.getElementById('wrap');
// let fixedBlock = document.getElementById('fixed-block');


// button.addEventListener('click', function() {
//   menu.classList.toggle("menuMoveLeft");
//   wrap.classList.toggle("wrapMoveLeft");
//   fixedBlock.classList.toggle("wrapMoveLeft");
// });

// 

const slideUp = (el, duration = 300) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(() => {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
    el.classList.remove("is-open");
  }, duration);
};

// 要素をスライドしながら表示する関数(jQueryのslideDownと同じ)
const slideDown = (el, duration = 300) => {
  el.classList.add("is-open");
  el.style.removeProperty("display");
  let display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// 要素をスライドしながら交互に表示/非表示にする関数(jQueryのslideToggleと同じ)
const slideToggle = (el, duration = 300) => {
  // Windows オブジェクトの getComputedStyle メソッドを使用して要素に設定されているスタイルを取得しdisplay: noneならtrue
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};


// アコーディオンを全て取得
const accordions = document.querySelectorAll(".js-accordion");
console.log(accordions);

accordions.forEach((accordion) => {
  // Triggerを全て取得
  const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
  // console.log(accordionTriggers);
  
  
  accordionTriggers.forEach((trigger) => {
    // Triggerにクリックイベントを付与
    // console.log(trigger);
    trigger.addEventListener("click", (e) => {
      // console.log(e.target)
      accordionTriggers.forEach((trigger) => {
        // クリックしたアコーディオン以外を全て閉じる
        if (trigger !== e.target.parentElement) {
          console.log(trigger);//クリックした以外のtriggerが出力される（確認用）
          
          // クリックしたTrigger以外の全てのTriggerに
          trigger.classList.remove("is-open");
          const openedContent = trigger.querySelector(".p-accordion__content");
          slideUp(openedContent);
        }
      });

      //通常版アコーディオン
      //  '.is-active'クラスを付与or削除
      trigger.classList.toggle("is-open");
      // 開閉させる要素を取得
      const content = trigger.querySelector(".p-accordion__content");
      // 要素を展開or閉じる
      slideToggle(content);
    });
  });
});