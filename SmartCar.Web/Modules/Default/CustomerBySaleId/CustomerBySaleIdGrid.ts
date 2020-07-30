
namespace SmartCar.Default {

    import fld = StatusRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CustomerBySaleIdGrid extends Serenity.EntityGrid<CustomerBySaleIdRow, any> {
        protected getColumnsKey() { return 'Default.Customer'; }
        protected getDialogType() { return CustomerBySaleIdDialog; }
        protected getIdProperty() { return CustomerBySaleIdRow.idProperty; }
        protected getInsertPermission() { return CustomerBySaleIdRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerBySaleIdRow.localTextPrefix; }
        protected getService() { return CustomerBySaleIdService.baseUrl; }

        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);

            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }
            //console.log(SmartCar.Authorization.userDefinition.Username);
            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params as Serenity.ListRequest;

            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.

            request.Criteria = Serenity.Criteria.and(request.Criteria,                
                [['SaleUserUsername'], '=', SmartCar.Authorization.userDefinition.Username],
                [['IsLeaderSent'], '=', 'True'],
                [['StatusId'], '!=', '5']);

            // TypeScript doesn't support operator overloading
            // so we had to use array syntax above to build criteria.

            // Make sure you write
            // [['Field'], '>', 10] (which means field A is greater than 10)
            // not 
            // ['A', '>', 10] (which means string 'A' is greater than 10

            return true;
        }


        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push({
                title: 'Save Changes',
                cssClass: 'apply-changes-button disabled',
                onClick: e => this.saveClick(),
                separator: true
            });

            return buttons;
        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
            return super.onViewProcessData(response);
        }

        // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
        // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
        // custom widgets and validations are not possible, and as a bonus the code can become a mess.
        // 
        // This was just a sample how-to after much requests, and is not supported. 
        // This is all we can offer, please don't ask us to Guide you...

        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter(ctx) {
            var klass = 'edit numeric';
            var item = ctx.item as CustomerBySaleIdRow;
            var pending = this.pendingChanges[item.CustomerId];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
                //add 2/4
                this.saveClick();
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;
            var valueShow;
            if (value) {
                valueShow = value;
            }
            else {
                valueShow = 0;
            }
            return "<input type='text' class='" + klass +
                "' data-field='" + ctx.column.field +
                "' value='" + valueShow + "'/>";
            //    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
        }

        private stringInputFormatter(ctx) {
            var klass = 'edit string';
            var item = ctx.item as CustomerBySaleIdRow;
            var pending = this.pendingChanges[item.CustomerId];
            var column = ctx.column as Slick.Column;

            if (pending && pending[column.field] !== undefined) {
                klass += ' dirty';
                //add 2/4
                this.saveClick();
            }

            var value = this.getEffectiveValue(item, column.field) as string;

            return "<input type='text' class='" + klass +
                "' data-field='" + column.field +
                "' value='" + Q.attrEncode(value) +
                "' maxlength='" + column.sourceItem.maxLength + "'/>";
        }

        private datetimeInputFormatter(ctx) {
            var klass = 'edit datetime';
            var item = ctx.item as CustomerBySaleIdRow;
            var pending = this.pendingChanges[item.CustomerId];
            var column = ctx.column as Slick.Column;

            if (pending && pending[column.field] !== undefined) {
                klass += ' dirty';
                //add 2/4
                this.saveClick();
            }

            var value = this.getEffectiveValue(item, column.field) as string;

            return "<input type='text' class='" + klass +
                "' data-field='" + ctx.column.field +
                "' value='" + Q.formatDate(value,"MM/dd/yyyy") + "'/>";
        }

        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter(ctx: Slick.FormatterContext, idField: string, lookup: Q.Lookup<any>) {
            var klass = 'edit';
            var item = ctx.item as CustomerBySaleIdRow;
            var pending = this.pendingChanges[item.CustomerId];
            var column = ctx.column as Slick.Column;

            if (pending && pending[idField] !== undefined) {
                klass += ' dirty';
                //add 2/4
                this.saveClick();
            }

            var value = this.getEffectiveValue(item, idField);
            var markup = "<select class='" + klass +
                "' data-field='" + idField +
                "' style='width: 100%; max-width: 100%' >";
            for (var c of lookup.items) {
                let id = c[lookup.idField];
                markup += "<option value='" + Q.attrEncode(id) + "'"
                if (id == value) {
                    markup += " selected";
                }
                markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
            }
            return markup + "</select>";
        }

        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.CustomerId];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        protected getColumns() {
            var columns = super.getColumns();
            var num = ctx => this.numericInputFormatter(ctx);
            var str = ctx => this.stringInputFormatter(ctx);
            var dte = ctx => this.datetimeInputFormatter(ctx);

            Q.first(columns, x => x.field === 'SaleNote').format = str;
            Q.first(columns, x => x.field === 'SaleDate').format = dte;

            var category = Q.first(columns, x => x.field === fld.StatusName);
            category.referencedFields = [fld.StatusId];
            category.format = ctx => this.selectFormatter(ctx, fld.StatusId, StatusRow.getLookup());
            Q.first(columns, x => x.field === "Price").format = num;

            return columns;
        }

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field');
            var text = Q.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.CustomerId];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0.##');
            else
                oldText = effective as string;

            var value;
            if (field === 'UnitPrice') {
                value = Q.parseDecimal(text);
                if (value == null || isNaN(value)) {
                    Q.notifyError(Q.text('Validation.Decimal'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
            }
            else if (input.hasClass("numeric")) {
                var i = Q.parseInteger(text);
                if (isNaN(i) || i < 0) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
                value = i;
            }
            else
                value = text;

            if (!pending) {
                this.pendingChanges[item.CustomerId] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0.##');

            input.val(value).addClass('dirty');
            //add 2/4
            this.saveClick();
            this.setSaveButtonState();
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                Object.keys(this.pendingChanges).length === 0);
        }

        private saveClick() {
            if (Object.keys(this.pendingChanges).length === 0) {
                return;
            }

            // this calls save service for all modified rows, one by one
            // you could write a batch update service
            var keys = Object.keys(this.pendingChanges);
            var current = -1;
            var self = this;

            (function saveNext() {
                if (++current >= keys.length) {
                    self.refresh();
                    return;
                }

                var key = keys[current];
                var entity = Q.deepClone(self.pendingChanges[key]);
                entity.CustomerId = key;
                Q.serviceRequest('Default/CustomerBySaleId/Update', {
                    EntityId: key,
                    Entity: entity
                }, (response) => {
                    delete self.pendingChanges[key];
                    saveNext();
                });
            })();
        }

        protected getQuickFilters() {
            var flt = super.getQuickFilters();

            var q = Q.parseQueryString();
            if (q["cat"]) {
                var category = Q.tryFirst(flt, x => x.field == "CategoryID");
                category.init = e => {
                    e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                };
            }

            return flt;
        }
    }
}