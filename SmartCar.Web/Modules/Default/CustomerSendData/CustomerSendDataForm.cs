
namespace SmartCar.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Default.CustomerSendData")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerSendDataForm
    {        
        [LookupEditor(typeof(Administration.Entities.UserRow))]
        [DisplayName("Sale User")]
        public Int32 SaleUserId { get; set; }

        //public Int32 SaleUserId { get; set; }
    }
}