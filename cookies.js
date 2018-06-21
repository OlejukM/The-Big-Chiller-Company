function setCookie( name, value, expires, path, domain, secure ) {
	document.cookie = name + "=" + escape(value) +
		((expires)  ?  "; expires=" + expires.toGMTString():   "") + 
		((path)  ?  "; path=" + path   :   "")   + 
		((domain)  ?  "; domain="   +  domain :   "")   + 
		((secure)  ?  ";   secure"  :   "");
}

setCookie( 'option', id_option, new Date( (new Date()).getTime() + ( 60 * 60 * 24*24  ) ), '/' );