import {ElementRef, Provider} from '@angular/core';
import {TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor/tokens';
import {TIPTAP_EDITOR} from '@taiga-ui/addon-editor/tokens';
import {Editor, Extension} from '@tiptap/core';

export const TIPTAP_EDITOR_PROVIDERS: Provider[] = [
    {
        provide: TIPTAP_EDITOR,
        deps: [ElementRef, TUI_EDITOR_EXTENSIONS],
        useFactory: editorFactory,
    },
];

export function editorFactory(
    {nativeElement}: ElementRef,
    extensions: Promise<Extension>[],
): Promise<Editor> {
    return Promise.all(extensions).then(extensions => {
        return new Editor({
            element: nativeElement,
            extensions: extensions,
        });
    });
}
