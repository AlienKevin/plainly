# Plainly

<p>
	This web app converts all characters in a file to English letters, digits, and punctuations.
	It can handle most characters in the Unicode standard.<br><br>
	In more technical terms, we take a UTF-8 encoded file and convert all
	characters in it to some ASCII characters. We guarantee that all ASCII
	characters in the input file remain <i>unchanged</i>.
	Here are some example conversions:
</p>
<ul>
	<li>Æneid => AEneid</li>
	<li>étude => etude</li>
	<li>Geschäft => Geschaft</li>
	<li>ᔕᓇᓇ => shanana</li>
	<li>北京 => Bei Jing</li>
	<li>げんまい茶 => genmaiCha</li>
</ul>
<h2>Principles of Conversion</h2>
<p>
	Note that we do not detect the language of the text and apply language-specific
	transliterations. For latin alphabets, we simply strip away all accent marks (é to e)
	and split ligatures like Æ into their components A and E.
</p>
<h2>Handling of Chinese Characters</h2>
<p>We convert all Chinese characters to their Chinese pronunciations in Hanyu Pinyin.
	For Japanese and Korean speakers, the Chinese characters (Kanji in Japanese, Hanja in Korean)
	have different pronunciations. However, since detecting the language of the text is out of the scope
	of this project, all Chinese characters are converted to their most common Chinese
	pronunciation.</p>

# Dependencies
[node-unidecode](https://github.com/FGRibreau/node-unidecode)

# License
MIT
