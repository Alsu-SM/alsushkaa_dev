import { useRef } from 'react';

function useContact() {
	const copyPhoneRef = useRef<HTMLDivElement>(null);
	const copyEmailRef = useRef<HTMLDivElement>(null);

	const handleCopyPhone = () => {
		try {
			navigator.clipboard.writeText('+79030423797').then(() => {
				const innerText = copyPhoneRef.current?.innerText || '';
				if (copyPhoneRef.current) {
					copyPhoneRef.current.innerText = 'Phone number copied';
					copyPhoneRef.current.style.opacity = '0.7';
				}
				setTimeout(() => {
					if (copyPhoneRef.current) {
						copyPhoneRef.current.innerText = innerText;
						copyPhoneRef.current.style.opacity = '1';
					}
				}, 700);
			});
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	const handleCopyEmail = () => {
		try {
			navigator.clipboard.writeText('alsu1shareeva@gmail.com').then(() => {
				const innerText = copyEmailRef.current?.innerText || '';
				if (copyEmailRef.current) {
					copyEmailRef.current.innerText = 'Email address copied';
					copyEmailRef.current.style.opacity = '0.7';
				}
				setTimeout(() => {
					if (copyEmailRef.current) {
						copyEmailRef.current.innerText = innerText;
						copyEmailRef.current.style.opacity = '1';
					}
				}, 700);
			});
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	return { handleCopyPhone, handleCopyEmail, copyPhoneRef, copyEmailRef };
}

export default useContact;
