import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Output,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

const MAX_COLS_NUMBER = 15;
const MAX_ROWS_NUMBER = 15;
const MIN_DISTANCE_PX = 70;

@Component({
    selector: 'tui-table-size-selector',
    templateUrl: './table-size-selector.template.html',
    styleUrls: ['./table-size-selector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableSizeSelectorComponent {
    @Output()
    readonly onSelectSize = new EventEmitter<{cols: number; rows: number}>();

    tableSize = {
        rows: 1,
        cols: 1,
    };

    constructor(@Inject(WINDOW) private readonly window: Window) {}

    get columnsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.cols + 1), MAX_COLS_NUMBER);
    }

    get rowsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.rows + 1), MAX_ROWS_NUMBER);
    }

    tableSelectHovered(x: number, y: number): boolean {
        return x < this.tableSize.rows && y < this.tableSize.cols;
    }

    updateCurrentSize(rows: number, cols: number, event: MouseEvent) {
        if (this.window.innerWidth - event.clientX < MIN_DISTANCE_PX) {
            return;
        }

        this.tableSize = {rows, cols};
    }

    onClick() {
        this.onSelectSize.emit(this.tableSize);
    }
}
