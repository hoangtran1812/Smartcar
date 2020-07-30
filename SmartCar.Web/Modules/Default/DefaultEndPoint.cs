using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Web.Mvc;
using MyRow = SmartCar.Default.Entities.CustomerRow;

namespace SmartCar.Default
{
    [ServiceAuthorize, RoutePrefix("Services/Default/Default"), Route("{action}")]
    [ConnectionKey(typeof(Default.Entities.CustomerRow))]
    public class DefaultController : ServiceEndpoint
    {
        public ServiceResponse SendBulkAction(IUnitOfWork uow, SendBulkActionRequest request)
        {
            List<int> CustomerIds = request.CustomerIds;
            var p = Entities.CustomerRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            for (var row = 0; row < CustomerIds.Count; row++)
            {
                try
                {
                    var customerId = CustomerIds[row];

                    var customer = uow.Connection.TryFirst<Entities.CustomerRow>(q => q
                        .Select(p.CustomerId)
                        .Where(p.CustomerId == customerId));

                    if (customer != null)
                    {
                        // avoid assignment errors
                        customer.TrackWithChecks = false;
                    }
                    
                    customer.SaleUserId = request.SaleId;
                    customer.IsLeaderSent = true;

                    if (customer.CustomerId == null)
                    {
                        new Repositories.CustomerRepository().Create(uow, new SaveRequest<MyRow>
                        {
                            Entity = customer
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new Repositories.CustomerRepository().Update(uow, new SaveRequest<MyRow>
                        {
                            Entity = customer,
                            EntityId = customer.CustomerId.Value
                        });

                        response.Updated = response.Updated + 1;
                    }
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }
    }
}