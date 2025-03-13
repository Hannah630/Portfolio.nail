$(document).ready(function() {

    // ✅ 點擊 `.dropdown` 展開對應的 `.dropdown-open`
    $(".dropdown").click(function(event) {
        event.preventDefault(); // 防止跳轉
  
        let $dropdown = $(this); // 確保只影響被點擊的 `.dropdown`
        let $dropdownMenu = $dropdown.next(".dropdown-open"); // 取得對應的 `.dropdown-open`
  
        $dropdown.toggleClass("active"); // 切換 `active` 類別
        $dropdownMenu.slideToggle(); // 使用 `.slideToggle()` 來展開/收起
    });

    $('.portfolio-content').children().each(function(i){
        $(this).delay(500 * i).animate({ opacity: 1 }, 600);
      });
  });
  