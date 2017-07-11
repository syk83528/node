window.onload = function () {

	//顶部滚动颜色变化
	search();

	//倒计时
    cutTime();

    //banner轮播
    banner();
}
//通栏搜索颜色改变
function search() {
    var jd_header = document.querySelector('.jd_header');
    jd_header.style.backgroundColor = "rgba(255,0,0,0)";
	var scrollH;
	//顶部到导航栏底部的距离
	var navDom = document.querySelector('.jd_nav');
	var maxScrollH = navDom.offsetTop + navDom.offsetHeight;


	window.onscroll = function () {
	    var scrollDistance = window.document.body.scrollTop;
        // console.log(scrollDistance);
        var percent = scrollDistance / maxScrollH;
        console.log(percent);
        if (percent > 1) {
            percent = 1;
        }
        //
        jd_header.style.backgroundColor = "rgba(255,0,0,"+percent+")";

    }
}
//倒计时
function cutTime() {
    var totalOur = 3;
    var totalSec = totalOur * 3600;

    var liArr = document.querySelectorAll(".jd_first_content .content_top li");
    console.log(liArr);

    var timer = setInterval(function () {
        //判断小于0
        if (totalSec <= 0 ) {
            clearInterval(timer);
            console.log('倒计时结束了');
            return;
        }
        
        totalSec--;
        var hour = Math.floor(totalSec / 3600);
        var min = Math.floor(totalSec % 3600 / 60);
        var sec = Math.floor(totalSec % 60);

        // console.log(hour +':'+ min+':'+sec);
        liArr[0].innerHTML = Math.floor(hour / 10);
        liArr[1].innerHTML = Math.floor(hour % 10);

        liArr[3].innerHTML = Math.floor(min / 10);
        liArr[4].innerHTML = Math.floor(min % 10);

        liArr[6].innerHTML = Math.floor(sec / 10);
        liArr[7].innerHTML = Math.floor(sec % 10);
    },1000);

}
//banner轮播
function banner() {
    /*
        获取ul,屏幕宽度

        定时器:
            1.设置index
            index++,判断有无越界
            移动transform=index*offwidth
     */
    var jd_banner_images = document.querySelector('.jd_banner_images');
    var jd_banner_index = document.querySelectorAll('.jd_banner_index li');
    jd_banner_images.style.transition  = 'all .3s';
    var screenWidth = document.body.offsetWidth;
    var index = 1;
    var timer = setInterval(function () {

        index++;
        jd_banner_images.style.transition  = 'all .3s';
        jd_banner_images.style.transform = 'translateX('+ screenWidth * index * -1 +'px)';
    },1000);

    jd_banner_images.addEventListener('webkitTransitionEnd',function () {
        // console.log('过度结束');
        //这里判断过界的逻辑
        if (index >= 9) {
            index = 1;

            //关闭过度
            jd_banner_images.style.transition = '';
            jd_banner_images.style.transform = 'translateX('+ screenWidth * index * -1 +'px)';
        }

        //这里显示
        for (var i = 0; i < jd_banner_index.length;i++) {
            jd_banner_index[i].className = '';
        }
        jd_banner_index[index-1].className = 'current';
    })

}