var Panel = window['Panel'] = function(params){
	var self = this;
	var className = params[S.CLASS_NAME];
	var classNames = params[S.CLASS_NAMES];
	var propertyNameVisible = params[S.PROPERTY_NAME_VISIBLE];
	var model = params[S.MODEL];
	var element = E.DIV();
	element.classList.add('panel');
	
	var propertyBindingVisible;
	if(propertyNameVisible){
		propertyBindingVisible = PropertyBinding[S.STANDARD](this, model, propertyNameVisible, visibleChanged);
	}
	if (className)
		element.classList.add(className);
	if (classNames)
		each(classNames, function (className) {
			element.classList.add(className);
		});
	this[S.GET_ELEMENT]=function(){
		return element;
	};
	function visibleChanged(value){
		if(value)element.classList.add('visible');
		else element.classList.remove('visible');
	}
};