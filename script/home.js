
                //상단 모달 이벤트
                const earthModal = document.querySelector('.earthModal');
                const earthB = document.querySelector('.earthB');

                earthB.addEventListener('click', () => {
                    earthModal.style.display = 'block';

                    earthModal.classList.toggle('show');
                    document.body.style.overflow = 'hidden';
                });

                function ModalX(){
                    $(".earthModal").hide();
                }
                
                
                // 모달 닫기 이벤트 (외부영역 클릭시)
                earthModal.addEventListener("click", e => {
                    const evTarget = e.target
                    if(evTarget.classList.contains("earthModal")){
                        earthModal.style.display = "none"
                        document.body.style.overflow = 'auto';
                    }
                });

                
                //달력 이벤트

                

                const makeCalendar = (date) => {
                const currentYear = new Date(date).getFullYear();
                const currentMonth = new Date(date).getMonth() + 1;
                

                const firstDay = new Date(date.setDate(1)).getDay();
                const lastDay = new Date(currentYear, currentMonth, 0).getDate();

                const limitDay = firstDay + lastDay;
                const nextDay = Math.ceil(limitDay / 7) * 7;

                let htmlDummy = '';

                for (let i = 0; i < firstDay; i++) {
                    htmlDummy += `<div class="noColor"></div>`;
                }

                for (let i = 1; i <= lastDay; i++) {    
                    htmlDummy += `<div>${i}</div>`;
                }

                for (let i = limitDay; i < nextDay; i++) {
                    htmlDummy += `<div class="noColor"></div>`;
                }


                document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
                document.querySelector(`.dateTitle`).innerText = `${currentMonth}월`;

   
                //오늘 날짜 표시
                // const today = new Date(date);
                // if(currentMonth === today.getMonth() && currentYear === today.getFullYear()){
                //     for ( let date of document.querySelectorAll('')){
                //         if(+dateBoard.innerText === today.getDate()){
                //             date.classList.add('today');
                //             break;
                //         }
                //     }
                // }


                }


                const date = new Date();

                makeCalendar(date);



                 //달력 이벤트2

                 const makeCalendar2 = (date2) => {
                const currentYear2 = new Date(date2).getFullYear();
                const currentMonth2 = new Date(date2).getMonth() + 2;
                const currentDay2 = new Date(date2).getDay();

                const firstDay2 = new Date(date2.setDate(1)).getDay();
                const lastDay2 = new Date(currentYear2, currentMonth2, 0).getDate();

                const limitDay2 = firstDay2 + lastDay2;
                const nextDay2 = Math.ceil(limitDay2 / 7) * 7;

                let htmlDummy = '';

                for (let i = 0; i < firstDay2; i++) {
                    htmlDummy += `<div class="noColor"></div>`;
                }

                for (let i = 1; i <= lastDay2; i++) {    
                    htmlDummy += `<div>${i}</div>`;
                }

                for (let i = limitDay2; i < nextDay2; i++) {
                    htmlDummy += `<div class="noColor"></div>`;
                }

                document.querySelector(`.dateBoard2`).innerHTML = htmlDummy;
                document.querySelector(`.dateTitle2`).innerText = `${currentMonth2}월`;


                }


                const date2 = new Date();

                makeCalendar2(date2);



                // // 이전달 이동
                // document.querySelector(`.prevDay`).onclick = () => {
                // makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
                // }

                // // 다음달 이동
                // document.querySelector(`.nextDay`).onclick = () => {
                // makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
                // }

                

                //메뉴 클릭 이벤트
                const ASBTMB = $('.ASBTMB');
                const ASBTM = $('.ASBTM');
                    ASBTMB.on('click', function(){
                        if ($(this).hasClass('on')){
                            $(this).removeClass('on');
                            ASBTM.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            ASBTM.slideDown();
                        }
                    })
           

                const flagB = $('.flagB');
                const flagM = $('.flagM');
                    flagB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            flagM.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            flagM.slideDown();
                        }
                    })

            //상단 세뷰 메뉴 클릭 이벤트

                    const HBTMB = $('.HBTMB');
                    const HBTM = $('.HBTM');
                        HBTMB.on('click', function(){
                            if($(this).hasClass('on')){
                                $(this).removeClass('on');
                                HBTM.show();
                            }
                            else{
                                $(this).addClass('on');
                                HBTM.hide();
                            }

                        //외부 영역 클릭시 닫기 이벤트
                        $(document).mouseup(function (e){
                            if($(".HBTM").has(e.target).length === 0){
                                $(".HBTM").hide();
                            }
                        })
                        })

            // 도착지 클릭 이벤트
            $("#inputsubA").click(function(){
                $(".IPSL").show();
            })

            // 어디든지 버튼 클릭시 input 창에 멘트 적용 + x버튼 생성 이벤트
            function inputB(){
                document.getElementById("inputID").value = '어디든지';
                $(".inputXB").show();
                $(".inputsublist").hide();
            }
            
            
            // x버튼 클릭 이벤트
            $(".inputXB").click(function(){
                document.getElementById("inputID").value = '';
                $(".inputXB").hide();
                $(".inputsublist").show();
            })

            // 외부영역 클릭시 닫기 이벤트
            $(document).mouseup(function (e){
                if($(".IPSL").has(e.target).length === 0){
                    $(".IPSL").hide();
                }
                else{
                    $(".IPSL").hide();
                }
            })

        

            //상단 가는,오는 편 클릭 이벤트

                            // A $( document ).ready() block.
                            $( document ).ready(function() {
                                document.getElementById("DateLB").click();
                                // $(".calender").hide();
                                // $(".choiceMonthT").show();
                            });



                            $(".inputsub2").click(function(){
                                $(".DateK").show();
                            })
                            

                            //외부 영역 클릭시 닫기 이벤트
                            $(document).mouseup(function (e){
                                if($(".DateK").has(e.target).length === 0){
                                    $(".DateK").hide();
                                }
                            })
            
            // 특정 날짜 , 한 달 전체 클릭시 이벤트 + 버튼 색깔

                            $(".DateRB").click(function(){
                                
                                $(".calender").hide();
                                $(".choiceMonthT").show();
                            })

                            $(".DateLB").click(function(){
                                $(".choiceMonthT").hide();
                                $(".calender").show();
                            })

                        var DateRB = document.querySelector(".DateRB");
                        var DateLB = document.querySelector(".DateLB");

                        var changeColor = function (e){
                            if (e.target === DateRB){
                                DateRB.style.background = "#05203c";
                                DateRB.style.color = "#fff";
                                DateLB.style.background = "#fff";
                                DateLB.style.color = "black";
                            }
                            if (e.target === DateLB){
                                DateLB.style.background = "#05203c";
                                DateLB.style.color = "#fff";
                                DateRB.style.background = "#fff";
                                DateRB.style.color = "black";
                            }
                        };

                        DateRB.addEventListener('click', changeColor, false);
                        DateLB.addEventListener('click', changeColor, false);
                    
            
            //상단 여행자 및 좌석 등급 메뉴 클릭 이벤트
                        
                    const inputsub3 = $('.inputsub3');
                    const rank = $('.rank');
                        inputsub3.on('click', function(){
                            if($(this).hasClass('on')){
                                $(this).removeClass('on');
                                rank.show();
                            }
                            else{
                                $(this).addClass('on');
                                rank.hide()
                            }

                            //외부 영역 클릭시 닫기 이벤트
                            $(document).mouseup(function (e){
                                if($(".rank").has(e.target).length === 0){
                                    $(".rank").hide();
                                }
                            })
                        })
            

            //하단 메뉴 클릭 이벤트

            const searchB = $('.searchB');
            const search = $('.search');
                    searchB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            search.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            search.slideDown();
                        }
                    })
            
            const companyB = $('.companyB');
            const company = $('.company');
                    companyB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            company.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            company.slideDown();
                        }
                    })
            
            const partnerB = $('.partnerB');
            const partner = $('.partner');
                    partnerB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            partner.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            partner.slideDown();
                        }
                    })

            const planB = $('.planB');
            const plan = $('.plan');
                    planB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            plan.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            plan.slideDown();
                        }
                    })

            const worldrentB = $('.worldrentB');
            const worldrent = $('.worldrent');
                    worldrentB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            worldrent.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            worldrent.slideDown();
                        }
                    })

            const cityB = $('.cityB');
            const city = $('.city');
                    cityB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            city.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            city.slideDown();
                        }
                    })

            const nationB = $('.nationB');
            const nation = $('.nation');
                    nationB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            nation.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            nation.slideDown();
                        }
                    })

        //하단 상세 메뉴속에 메뉴

            const ticketB = $('.ticketB');
            const ticket = $('.ticket');
                    ticketB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            ticket.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            ticket.slideDown();
                        }
                    })

            const HotelB = $('.HotelB');
            const Hotel = $('.Hotel');
                    HotelB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            Hotel.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            Hotel.slideDown();
                        }
                    })

            const RentB = $('.RentB');
            const Rent = $('.Rent');
                    RentB.on('click', function(){
                        if($(this).hasClass('on')){
                            $(this).removeClass('on');
                            Rent.slideUp();
                        }
                        else{
                            $(this).addClass('on');
                            Rent.slideDown();
                        }
                    })


            // 성인 - , + 버튼 이벤트
            var num = 1;


            function minus1(){
                if(num==1){
                    return;
                }

                num--;
                if(num==1){
                    var rankTM1 = document.querySelector(".rankTM1");
                    rankTM1.disabled = true;
                }
                else{
                    var rankTM1 = document.querySelector(".rankTM1");
                    rankTM1.disabled = false;

                    var rankTP1 = document.querySelector(".rankTP1");
                    rankTP1.disabled = false;   

                }

                var rankinput1 = document.querySelector(".rankinput1");
                rankinput1.value = num;

            }
            function plus1(){
                if(num==8){
                    return;
                }

                num++;
                if(num==8){
                    var rankTP1 = document.querySelector(".rankTP1");
                    rankTP1.disabled = true;
                }
                else{
                    var rankTM1 = document.querySelector(".rankTM1");
                    rankTM1.disabled = false;

                    var rankTP1 = document.querySelector(".rankTP1");
                    rankTP1.disabled = false;


                }

                var rankinput1 = document.querySelector(".rankinput1");
                rankinput1.value = num;

            }

            // 유/소아 -,+ 버튼 이벤트
            var num2 = 0;
            var i = 1;

            function minus2(){
                if(num2==0){
                    return
                }

                num2--;
                if(num2==0){
                    var rankTM2 = document.querySelector(".rankTM2");
                    rankTM2.disabled = true;
                }
                else{
                    var rankTM2 = document.querySelector(".rankTM2");
                    rankTM2.disabled = false;

                    var rankTP2 = document.querySelector(".rankTP2");
                    rankTP2.disabled = false;
                }

                var rankinput2 = document.querySelector(".rankinput2");
                rankinput2.value = num2;

                $(".acAppend:last-child").remove();
                
                i--;
            }


            function plus2(){
                if(num2==8){
                    return;
                }

                num2++;
                if(num2==8){
                    var rankTP2 = document.querySelector(".rankTP2");
                    rankTP2.disabled = true;
                }
                else{
                    var rankTM2 = document.querySelector(".rankTM2");
                    rankTM2.disabled = false;

                    var rankTP2 = document.querySelector(".rankTP2");
                    rankTP2.disabled = false;

                }

                var rankinput2 = document.querySelector(".rankinput2");
                rankinput2.value = num2;
                
                // 유/소아 + 버튼 클릭시 이벤트

                $(".addchild").show();

                $(".addchild").append('<div class="acAppend">'+'<span class="acSpan">'+i+'번째 유/소아 나이</span>'+
                '<select class="acSelect">'+
                    '<option checked>나이를 선택하세요.</option>'+
                    '<option>1</option>'+
                    '<option>2</option>'+
                    '<option>3</option>'+
                    '<option>4</option>'+
                    '<option>5</option>'+
                    '<option>6</option>'+
                    '<option>7</option>'+
                    '<option>8</option>'+
                    '<option>9</option>'+
                    '<option>10</option>'+
                    '<option>11</option>'+
                    '<option>12</option>'+
                    '<option>13</option>'+
                    '<option>14</option>'+
                    '<option>15</option>'+
                    '</select>'+'</div>');
                
                
                i++;
              
                
            }

            

            
