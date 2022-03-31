DEMO <br />
https://kalecew.github.io/portfolio-bc

# portfolio-bc
Сайт портфолио - блок с работами которые можно динамически подгружать и фильтровать, окно со слайдером работ, в котором есть слайдер для изображений отдельно для каждой работы, слайдер с отзывами, блок с превьюхами на три последние статьи из блога, окно обратной связи, окно с резюме и кнопками "Download PDF"  и "Print"

Предварительные действия<br />
		1.	Установить nodejs (проверка npm -v)
		2.	npm install less –g (проверка lessc -v)
			> Ошибка lessc : Невозможно загрузить файл C:\Users\Admin\AppData\Roaming\npm\lessc.ps1, так как выполнение сценариев отключено в этой системе.
				> Set-ExecutionPolicy unrestricted
		3. npm install -g less-plugin-clean-css
		4. npm install -g less-plugin-autoprefix
		5. В SublimeText установить плагин LESS2CSS
		6. Изменить настройки для плагина 
		{
		  "autoCompile": true,
		  "createCssSourceMaps": false,
		  "ignorePrefixedFiles": false,
		  "lessBaseDir": "less/",
		  "lesscCommand": false,
		  "main_file": "style.less",
		  "minify": true,
		  "minName": false,
		  "outputDir": "css/",
		  "outputFile": "style.css", //[example.css] if left blank uses same name of .less file
		  "showErrorWithWindow": true,
		  "autoprefix": true,
		  "disableVerbose":false,
		  "silent":false
		}
			▪ CreateCssSourceMaps конфликтует с autoprefix
		7. Сделать изменения в файле style.less и сохранить, файл style.css создастся автоматически
