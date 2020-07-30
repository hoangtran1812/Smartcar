/// <reference path="../Customer/CustomerGrid.ts" />
/// <reference path="SendBulkAction.ts" />
namespace SmartCar.Default {
    @Serenity.Decorators.registerClass()
    export class CustomerSendDataGrid extends Default.CustomerGrid {
        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getButtons() {
            return [{
                title: 'Chia dữ liệu',
                cssClass: 'send-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new CustomerSendDataDialog(this.rowSelection.getSelectedKeys());
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            }];
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected getViewOptions() {
            var opt = super.getViewOptions();
            opt.rowsPerPage = 50;
            return opt;
        }

        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }
            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params as Serenity.ListRequest;

            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['IsLeaderSent'], '!=', 'true'], [['StatusId'], '=', '5']);

            // TypeScript doesn't support operator overloading
            // so we had to use array syntax above to build criteria.

            // Make sure you write
            // [['Field'], '>', 10] (which means field A is greater than 10)
            // not 
            // ['A', '>', 10] (which means string 'A' is greater than 10

            return true;
        }
    }
}