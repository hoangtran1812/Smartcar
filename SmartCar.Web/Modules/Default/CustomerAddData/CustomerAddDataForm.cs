
namespace SmartCar.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.CustomerAddData")]
    public class CustomerAddDataForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}