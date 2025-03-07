import Prism from 'prismjs';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-handlebars.js';

/**
 * Custom helper to trim and highlight code examples
 *
 * Usage: `{{ rawInput | prismhighlight('html') }}`
 *
 * @param {string} code
 * @param {string} language
 */
export default function prismHighlight(code, language) {
	console.log('prismHighlight', language, code);

	if (language) {
		return Prism.highlight(code.trim(), Prism.languages[language], language);
	}

	return code;
}
