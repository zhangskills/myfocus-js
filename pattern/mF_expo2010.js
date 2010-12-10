myFocus.extend({//*********************2010世博******************
	mF_expo2010:function(par){
		var box=this.$(par.id);//定义焦点图盒子
		this.addList(box,['txt-bg','txt','num']);//添加ul列表
		var pic=this.$li('pic',box),txt=this.$li('txt',box),num=this.$li('num',box),n=pic.length;//定义焦点图元素
		//CSS
		var H='default'?36:par.txtHeight+60;
		for(var i=0;i<n;i++){
			pic[i].style.display="none";
			txt[i].style.bottom=-H+'px';
		}
		//PLAY
		eval(this.switchMF(function(mf){
			mf.fadeOut(pic[index]);
			num[index].className='';
		},function(mf){
			mf.fadeIn(pic[next]);
			mf.slide(txt[prev],{bottom:-H},5,'easeIn',function(){mf.slide(txt[next],{bottom:0},40,'easeInOut')});
			num[next].className='current';
		}))
		eval(this.bind('num','par.trigger',par.delay));
	}
});