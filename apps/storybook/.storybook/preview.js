import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider, HtmlDirection } from 'lundium';
import { en_US } from '@lundium/locale';

import '@lundium/theme-basic/dist/index.css';
import sortStories from './util/sortStories';

addParameters({
	options: {
		storySort: sortStories({ Introduction: ['Welcome', 'Theming', 'Localisation'] }),
		showRoots: true,
	},
});

addDecorator(story => (
	<ThemeProvider theme={{ isRTL: boolean('isRTL', false), locale: en_US }}>
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<HtmlDirection />
			{story()}
		</div>
	</ThemeProvider>
));

addDecorator(withKnobs);
