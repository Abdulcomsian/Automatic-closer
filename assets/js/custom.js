
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentMonth, currentYear, currentDate, month;
    var date = new Date();
    currentMonthIndex= date.getMonth();
    currentMonth= date.getMonth();
    month=currentMonth;
    month=month+2;
    currentMonth=months[currentMonth]
    currentYear=date.getFullYear();
    currentDate=date.getDate();
    $(document).ready(function () {
        $('#table_id').DataTable({
            language: {
                oPaginate: {
                    sNext: '<i class="fa fa-angle-right"></i>',
                    sPrevious: '<i class="fa fa-angle-left"></i>',
                },
                searchPlaceholder: "Search",
                search: '<i class="fa fa-search"></i>'
            }
        });
        $("table tr th").removeClass("sorting");
        $("table tr th").removeClass("sorting_asc");
    });
    $('#datePicker').change(function(){
        var dt = new Date( $(this).val());
        currentMonth=dt.getMonth();
        var year = dt.getFullYear();
        currentYear= year;
        $(".textSpan span").html(months[dt.getMonth()] + " "+year )
        $("#datePicker").val(months[dt.getMonth()] + " "+currentYear)
    })
    $(".arrowRight").click(function(){
        if(currentMonthIndex){
            console.log("here "+currentYear + "-" +"0"+month + "-"+ currentDate)
            currentMonth=currentMonthIndex+1;
            $(".textSpan span").html(months[currentMonth] + " "+currentYear )
            currentMonthIndex++;
           $("#datePicker").val(currentYear + "-" +"0"+month + "-"+ currentDate)
           month=month+1;
        } else{
            console.log("here 2")
            currentMonth=currentMonth+1;
            $(".textSpan span").html(months[currentMonth] + " "+currentYear )
            $("#datePicker").val(currentYear + "-" +"0"+currentMonth + "-"+ currentDate)
        }
        
    })
    $(".arrowLeft").click(function(){
        currentMonth=currentMonth-1;
        $(".textSpan span").html(months[currentMonth] + " "+currentYear )
        $("#datePicker").val(currentYear + "-" +"0"+currentMonth + "-"+ currentDate)
    })
    $(".menuBtn").click(function(){
        $(".sideBar").css("left", "0px");
        $(".contentDiv").css("filter", "blur(4px)")
    })
    $(".closeMenu").click(function(){
        $(".sideBar").css("left", "-350px");
        $(".contentDiv").css("filter", "blur(0px)")
    })
    $('#datepicker').datepicker({
        todayHighlight: true
    });
    $(".openDropDownMenu a").click(function(){
        if($(".dropDownMenu").css("opacity")==0){
            $(".dropDownMenu").css("opacity","1")
            $(".datePicker").css("z-index", "0")
        } else{
            $(".dropDownMenu").css("opacity","0")
            $(".datePicker").css("z-index", "9999999999999999")
        }
    })
    $(document).one('ready', function(){
        $(".dataTables_wrapper .dataTables_paginate .paginate_button.current").removeAttr( 'style' );;
    });
   



    document.addEventListener("DOMContentLoaded", function(){
        document.querySelectorAll('.menuDiv .submenu').forEach(function(element){
          
          element.addEventListener('click', function (e) {
      
            let nextEl = element.nextElementSibling;
            let parentEl  = element.parentElement;	
      
              if(nextEl) {
                  e.preventDefault();	
                  let mycollapse = new bootstrap.Collapse(nextEl);
                  
                  if(nextEl.classList.contains('show')){
                    mycollapse.hide();
                  } else {
                      mycollapse.show();
                      // find other submenus with class=show
                      var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                      // if it exists, then close all of them
                      if(opened_submenu){
                        new bootstrap.Collapse(opened_submenu);
                      }
                  }
              }
          }); // addEventListener
        }) // forEach
      }); 
      // DOMContentLoaded  end
      
