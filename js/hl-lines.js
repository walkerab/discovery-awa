$(function(){
	var multiline_highlight = false;
	function highlightLine(line) {
		var index;
		if ((index = line.indexOf('// &lt;')) != -1) {
			return '<span class="hl-line">'+
				line.substr(0,index)+
				line.substr(index+7)+
			'</span>';
		} else
		if ((index = line.indexOf('&lt;!-- &lt; --&gt;')) != -1) {
			return '<span class="hl-line">'+
				line.substr(0,index)+
				line.substr(index+19)+
			'</span>';
		} else
		if ((index = line.indexOf('&lt;!-- * --&gt;')) != -1) {
			multiline_highlight = !multiline_highlight;
			return '';
		} else
		if (multiline_highlight) {
			return '<span class="hl-line">'+line+'</span>';
		}
		return line+'\n';
	}

	$('.highlight code').each(function(){
		var lines = this.innerHTML.split(/\n/);
		lines = lines.map(highlightLine);
		this.innerHTML = lines.join('').trim();
	});
});