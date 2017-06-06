!function ($) {

     function checkWX() {
                var ua = navigator.userAgent.toLowerCase();
                var isWeixin = ua.indexOf('micromessenger') != -1;
                var isAndroid = ua.indexOf('android') != -1;
                var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
                if (!isWeixin) {
                    document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css">';
                    document.body.innerHTML = '<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在微信客户端打开链接</h4></div></div>';
                    return ;
                }
            };
     checkWX()
        var html= '';
         data.forEach(function(element) {
              html += '<div class="'+element.name+' m-cell"><h1>'+element.title+'</h1>';
                            if(element.type != 'textarea'){   
                                    element.checkItem.forEach(function(ele,index) {
                                            html += '<label class="cell-item">\
                                                        <span class="cell-left">'+ele+'</span>\
                                                        <label class="cell-right">\
                                                            <input type="'+element.type+'" name="'+element.name+'" value="'+String.fromCharCode(index+65)+'"/>\
                                                            <i class="cell-'+element.type+'-icon"></i>\
                                                        </label>\
                                                    </label>';
                                    }, this);   
                                }
                            if(element.type == 'textarea'){
                                         html += '<div class="m-celltitle"></div>\
                                                    <div class="m-cell">\
                                                        <div class="cell-item">\
                                                            <div class="cell-right">\
                                                                <textarea class="cell-textarea" placeholder="说出你的想法吧！" name="a30"></textarea>\
                                                            </div>\
                                                        </div>\
                                                    </div>';
                                    }
            html += '</div>';
         }, this); 
         $('.add').append(html).find('.a26').append('<div class="m-celltitle"></div>\
                                                    <div class="m-cell">\
                                                        <div class="cell-item">\
                                                            <div class="cell-right">\
                                                                <textarea class="cell-textarea" placeholder="" name="a26"></textarea>\
                                                            </div>\
                                                        </div>\
                                                    </div>');
         setTimeout(function(){
             $('#pageLoading').fadeOut(500);
         },1000)
         function check_frm()
        {
            if (getRadioVal(form1.a1) == "")
            {
                YDUI.dialog.alert("第1题请作答！");
                return;
            }

            if (getRadioVal(form1.a2) == "")
            {
                YDUI.dialog.alert("第2题请作答！");
                return;
            }
            if (getRadioVal(form1.a3) == "")
            {
                YDUI.dialog.alert("第3题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a4) == "")
            {
                YDUI.dialog.alert("第4题请作答！");
                return;
            }
            if (getRadioVal(form1.a5) == "")
            {
                YDUI.dialog.alert("第5题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a6) == "")
            {
                YDUI.dialog.alert("第6题请作答！");
                return;
            }
            if (getRadioVal(form1.a7) == "")
            {
                YDUI.dialog.alert("第7题请作答！");
                return;
            }
            if (getRadioVal(form1.a8) == "")
            {
                YDUI.dialog.alert("第8题请作答！");
                return;
            }
            if (getRadioVal(form1.a9) == "")
            {
                YDUI.dialog.alert("第9题请作答！");
                return;
            }
            if (getRadioVal(form1.a10) == "")
            {
                YDUI.dialog.alert("第10题请作答！");
                return;
            }
            if (getRadioVal(form1.a11) == "")
            {
                YDUI.dialog.alert("第11题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a12) == "")
            {
                YDUI.dialog.alert("第12题请作答！");
                return;
            }
            if (getRadioVal(form1.a13) == "")
            {
                YDUI.dialog.alert("第13题请作答！");
                return;
            }
            if (getRadioVal(form1.a14) == "")
            {
                YDUI.dialog.alert("第14题请作答！");
                return;
            }
            if (getRadioVal(form1.a15) == "")
            {
                YDUI.dialog.alert("第15题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a16) == "")
            {
                YDUI.dialog.alert("第16题请作答！");
                return;
            }
            if (getRadioVal(form1.a17) == "")
            {
                YDUI.dialog.alert("第17题请作答！");
                return;
            }
            if (getRadioVal(form1.a18) == "")
            {
                YDUI.dialog.alert("第18题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a19) == "")
            {
                YDUI.dialog.alert("第19题请作答！");
                return;
            }
            if (getRadioVal(form1.a20) == "")
            {
                YDUI.dialog.alert("第20题请作答！");
                return;
            }
            if (getRadioVal(form1.a21) == "")
            {
                YDUI.dialog.alert("第21题请作答！");
                return;
            }
            if (getRadioVal(form1.a22) == "")
            {
                YDUI.dialog.alert("第22题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a23) == "")
            {
                YDUI.dialog.alert("第23题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a24) == "")
            {
                YDUI.dialog.alert("第24题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a25) == "")
            {
                YDUI.dialog.alert("第25题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a26) == "" && form1.a26[4].value == "")
            {
                YDUI.dialog.alert("第26题请作答！");
                return;
            } 
            if (getRadioVal(form1.a27) == "")
            {
                YDUI.dialog.alert("第27题请作答！");
                return;
            }
            if (getCheckboxVal(form1.a28) == "")
            {
                YDUI.dialog.alert("第28题请作答！");
                return;
            }
            if (getRadioVal(form1.a29) == "")
            {
                YDUI.dialog.alert("第29题请作答！");
                return;
            }
                YDUI.dialog.loading.open('提交中...');
                console.log(form1.a26[3].value,form1.a26[4].value); 
            var sUrl = 
                    "a1="+getRadioVal(form1.a1)+"&a2="+getRadioVal(form1.a2)+"&a3="+getRadioVal(form1.a3)+"&a4="+getCheckboxVal(form1.a4)+"&a5="+getRadioVal(form1.a5)
                    +"&a6="+getCheckboxVal(form1.a6)+"&a7="+getRadioVal(form1.a7)+"&a8="+getRadioVal(form1.a8)+"&a9="+getRadioVal(form1.a9)+"&a10="+getRadioVal(form1.a10)
                    +"&a11="+getRadioVal(form1.a11)+"&a12="+getCheckboxVal(form1.a12)+"&a13="+getRadioVal(form1.a13)+"&a14="+getRadioVal(form1.a14)+"&a15="+getRadioVal(form1.a15)
                    +"&a16="+getCheckboxVal(form1.a16)+"&a17="+getRadioVal(form1.a17)+"&a18="+getRadioVal(form1.a18)+"&a19="+getCheckboxVal(form1.a19)+"&a20="+getRadioVal(form1.a20)
                    +"&a21="+getRadioVal(form1.a21)+"&a22="+getRadioVal(form1.a22)+"&a23="+getCheckboxVal(form1.a23)+"&a24="+getCheckboxVal(form1.a24)+"&a25="+getCheckboxVal(form1.a25)
                    +"&a26="+getCheckboxVal(form1.a26)+form1.a26[4].value+"&a27="+getRadioVal(form1.a27)+"&a28="+getCheckboxVal(form1.a28)+"&a29="+getRadioVal(form1.a29)+"&a30="+form1.a30.value;
        // $.ajax({
        //     url:'',
        //     data:'',
        //     dataType:'',
        //     complete:function () {
        //             YDUI.dialog.loading.close();
        //             YDUI.dialog.alert("提交成功！",function(){
        //             /* 关闭后调用 */
        //             WeixinJSBridge.invoke('closeWindow', {}, function(res) {});
        //         });
        //     }
        //     }).fail(function(res){
        //             YDUI.dialog.alert("网络错误！");
        //     })
        setTimeout(function(){
            YDUI.dialog.loading.close();
                YDUI.dialog.alert("提交成功！",function(){
                    /* 关闭后调用 */
                    WeixinJSBridge.invoke('closeWindow', {}, function(res) {});
                });
        },2000)
        }
        function getRadioVal(obj){
            var len = obj.length;
            var val = "";
            for (var i=0; i<len; i++)
            {
                if(obj[i].checked)
                    val=obj[i].value;
            }
            return val;
        }
        function getCheckboxVal(obj){
            var len = obj.length;
            var val = "";
            for (var i=0; i<len; i++)
            {
                if(obj[i].checked)
                    val+=obj[i].value+",";
            }
            return val;
        }
        $('#J_Btn').on('click', function () {
            check_frm();
        });
    }(jQuery);