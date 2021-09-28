
  /*  Javascrip xử lý hiệu ứng khi cick vào ảnh sản phẩm */
  /* Jquery định dạng cho thanh số lượng sản phẩm */
  $(document).ready(function(){
    var $this = $("input.input-qty");
    qty = $this.parent().find(".is-form");
    min = Number($this.attr('min'));
    max = Number($this.attr('max'));
    var d = min;
    $this.attr('value',d).val(d);
    $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
         if (d > min) d += -1
    } else if ($(this).hasClass('plus')) {
          var x = Number($this.val()) + 1
          if (x <= max) d += 1
    }
    $this.attr('value',d).val(d);
    })
})      
       /* Jquery định dạng cho phần đánh giá và mô tả sản phẩm */
       
        $(document).ready(function(){
           $(".alls-bottom > div:not(:first-child)").hide()
          
           $("ul.tap a").click(function(){
            event.preventDefault()
            //xử lý biên
            $("ul.tap a").removeClass("add-boder")
                $(this).addClass("add-boder")
             // xử lý tap
            $("ul.tap a").removeClass("addcolor")
                $(this).addClass("addcolor")
    
                 // xử lý content
            var tap = $(this).attr("href")
            $(".alls-bottom > div").hide()
            $(tap).show()
            })
    
        }) 
     
       /* jquery định dạng khi cick vào ngôi sao bình chọn */
       $(document).on('click',".starsl,label.fas",function(){
           $(".starsl,label.fas").css({
               "color":"#dddddd"
           })
           $("label.fas",this).css({
               "color":"yellow"
           })
       })
       /* Jquery định dạng cho phần hiện thị thanh đăng nhập */
    $(document).ready(function(){
        /*thanh đăng nhập ẩn trước khi click */
        $("#dangnhap,a.exit").hide()
        /*khi click thì dùng id over làm mờ trang và hiện hộp thoại ra */
        $(".dang-nhap").click(function(){
            $("body").append('<div id="over">');
            $("#dangnhap,a.exit").fadeIn(500)
            $("body").addClass("diem-dung")
        })
        /* khi click đóng hộp thoại */
        $(document).on('click',"a.exit,#over",function(){
            $("#over,#dangnhap,a.exit").fadeOut(300,function(){
                $("#over").remove();
                $("body").removeClass("diem-dung")
            })
          
        })
    
      })
      /* jquety cho nút gototop */
      $(document).ready(function() {
        $("#gototop").hide()
        $(window).scroll(function() {
          if ($(this).scrollTop() >= 500)
            $("#gototop").slideDown("3000")
          else
            $("#gototop").slideUp("3000")
        })
        $("#gototop").click(function() {
            $("html, body").animate({
              scrollTop: 0
            },1000);
        })
      })
    
      /* jquery cho thanh kem các loại */
      $(document).ready(function(){
          /* ban đầu thanh chọn ở trạng thái ẩn */
          $(".list").hide()
          /* khi rê chuột vào ô kem các loại */
          $(".last").mouseenter(function(){
            $(".list").removeClass("sliceinbottom")
            $(".list").show().addClass("sliceintop");
          })
          /* khi rời chuột khỏi ô kem các loại */
          $(".last").mouseleave(function(){
            $(".list").fadeOut(300).addClass(" sliceinbottom ");
          })
      })

      
    