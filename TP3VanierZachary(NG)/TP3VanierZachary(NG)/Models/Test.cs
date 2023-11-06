using System.ComponentModel.DataAnnotations;

namespace TP3VanierZachary_NG_.Models
{
    public class Test
    {
        [Key]
        public int TestId { get; set; }

        public string Name { get; set; }
    }
}
