/**
 * Created by naeioi on 2015/4/3.
 */
/*
 controller:
 controller仅有一个实例，不需要写成类
 载入文件及提示进度
 功能：
 监听事件load,progress和complete，事件event = {file: ""//载入文件名}
 载入模板文件、字体文件，以对象的方式传递给model
 接口：
 load_demo(src)
 载入src指向的main.json文件，将数据存储在object中，传递给model.init()
 imageLoaer(textline)
 传入TextLine的实例，ajax请求图片数据，添加到实例中
onload(e), onprogress(e), oncomplete(e)
监听载入事件并提示进度。事件是createjs的Event类的实例
output_origin()
渲染origin并自动下载
 */

define(['createjs', 'jquery'], function(createjs, $) {
    var controller = {};
    var p = controller.prototype;

    p.imageLoader(t)
    {
        var onsucess = function(data){
            var img = document.createElement('img');
            img.src = data;
            return img;
        }

        $.ajax({
            url: 'pcs.php?'
                +'text=' + t.text
                +'&dir=' + t.dir
                +'&letterSpacing=' + t.letterSpacing
                +'&fontFamily=' + t.fontFamily
                +'&fontSize=' + t.fontSize
                +'&color=' + t.color,
            sucess: onsucess
        })
    }
})