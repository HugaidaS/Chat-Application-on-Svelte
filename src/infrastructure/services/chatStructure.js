const messages = [
	{
		userId: '123',
		userName: 'Vrandel Jhonson',
		time: new Date('2021-10-16'),
		message: {
			type: 'text',
			content: 'Hi Cody, any progress on the project?'
		},
		isImagesAttached: []
	},
	{
		userId: '321',
		userName: 'Cody Plots',
		time: new Date('2021-10-17'),
		message: {
			type: 'text',
			content: "Hi Jane! Yes. I just finished developing the 'Chat' template."
		},
		isImagesAttached: [ {}, {}, {}, {}, {}, {} ]
	},
	{
		userId: '123',
		userName: 'Vrandel Jhonson',
		time: new Date('2021-10-17'),
		message: {
			type: 'text',
			content: 'It looks amazing.The customer will be very satisfied.'
		},
		isImagesAttached: []
	},
	{
		userId: '321',
		userName: 'Cody Plots',
		time: new Date('2021-10-18'),
		message: {
			type: 'text',
			content: 'Thank you, glad you liked it. Send me Styles Guide.'
		},
		isImagesAttached: []
	},
	{
		userId: '123',
		userName: 'Vrandel Jhonson',
		time: new Date('2021-10-18'),
		message: {
			type: 'file',
			content: {
				fileName: 'Brand Styles Guide.pdf',
				fileSize: '487 KB'
			}
		},
		isImagesAttached: []
	}
];

export default messages;
