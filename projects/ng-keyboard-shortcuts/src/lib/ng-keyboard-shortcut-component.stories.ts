import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';


import { NgKeyboardShortcutsComponent } from './ng-keyboard-shortcuts.component';

storiesOf('Keyboard Shortcuts Component', module)
    .add('clicking alt + t', () => ({
        component: NgKeyboardShortcutsComponent,
        props: {
            shortcuts: [{
                key: "alt + t",
                command: action('alt + t')
            }],
        },
    }));

