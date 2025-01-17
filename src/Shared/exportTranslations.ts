import { format } from 'date-fns';
import { DictionaryItem, translateDictionary } from './getTranslation';

function exportTranslations() {
	let content = `key\ten\tru\n`;

	Array.from(translateDictionary).map(
		([key, value]: [string, DictionaryItem]) => {
			content += `${key}\t${value.en}\t \n`;
			console.log(content);
		},
	);
	console.log(content);

	const element = document.createElement('a');
	const title = `alsushkaa_dev_${format(new Date(), 'dd.MM.yyyy')}`;
	const textFile = new Blob([content], {
		type: 'application/vnd.ms-excel',
	});

	element.href = URL.createObjectURL(textFile);
	element.download = `${title}.xls`;
	document.body.appendChild(element);
	element.click();
}

export default exportTranslations;
