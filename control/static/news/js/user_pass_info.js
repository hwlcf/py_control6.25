function getCookie(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : undefined;
}


$(function () {
    $(".pass_info").submit(function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault();

        var old_password = $('#old_password').val();
        var new_password = $('#new_password').val();
        var new_password2 = $('#new_password2').val();

        if (!old_password) {
            alert('原密码不能为空!');
            return;
        }

        if (!new_password) {
            alert('新密码不能为空!');
            return;
        }

        if (!new_password2) {
            alert('重复新密码不能为空!');
            return;
        }

        if (new_password != new_password2) {
            alert('两次密码不一致!');
            return;
        }

        // 组织参数
        var params = {
            "old_password": old_password,
            "new_password": new_password,
            "new_password2": new_password2
        };

        // TODO: 请求修改用户密码
        $.ajax({
            url:"/user/user_pass_info",
            method:"POST",
            contentType:"application/json",
            data:JSON.stringify(params),
            dataType:"json",
            headers:{
                "X-CSRFToken": getCookie("csrf_token"),
            },
            success:function(resp){
                if(resp.errno == 0){
                    alert("修改成功")
                    location.reload() // 刷新当前页面
                }else if(resp.errno == 4101){
                    $('.login_form_con').show();
                }else{
                    alert(resp.errmsg);
                }
            }
        })
    })
});