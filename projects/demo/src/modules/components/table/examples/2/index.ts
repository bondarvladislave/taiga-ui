import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {TuiAutoColorPipe, TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiChipDirective} from '@taiga-ui/kit';

interface User {
    readonly email: string;
    readonly name: string;
    readonly status: 'alive' | 'deceased';
    readonly tags: readonly string[];
}

@Component({
    standalone: true,
    selector: 'tui-table-example-2',
    imports: [
        TuiTable,
        TuiChipDirective,
        NgForOf,
        TuiAutoColorPipe,
        TuiLinkDirective,
        NgIf,
        TuiButtonDirective,
        TuiLetDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly columns = ['name', 'email', 'status', 'tags', 'actions'];

    protected users: readonly User[] = [
        {
            name: 'Michael Palin',
            email: 'm.palin@montypython.com',
            status: 'alive',
            tags: ['Funny'],
        },
        {
            name: 'Eric Idle',
            email: 'e.idle@montypython.com',
            status: 'alive',
            tags: ['Funny', 'Music'],
        },
        {
            name: 'John Cleese',
            email: 'j.cleese@montypython.com',
            status: 'alive',
            tags: ['Funny', 'Tall', 'Actor'],
        },
        {
            name: 'Terry Jones',
            email: '',
            status: 'deceased',
            tags: ['Funny', 'Director'],
        },
        {
            name: 'Terry Gilliam',
            email: 't.gilliam@montypython.com',
            status: 'alive',
            tags: ['Funny', 'Director'],
        },
        {
            name: 'Graham Chapman',
            email: '',
            status: 'deceased',
            tags: ['Funny', 'King Arthur'],
        },
    ];

    protected remove(item: User): void {
        this.users = this.users.filter(user => user !== item);
    }
}
