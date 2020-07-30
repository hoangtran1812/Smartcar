using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartCar.Default
{
    public class SendBulkActionRequest : ServiceRequest
    {
        public List<int> CustomerIds { get; set; }
        public int SaleId { get; set; }
    }
}