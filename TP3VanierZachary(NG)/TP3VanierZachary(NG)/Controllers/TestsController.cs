using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TP3VanierZachary_NG_.Data;
using TP3VanierZachary_NG_.Models;

namespace TP3VanierZachary_NG_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {
        private readonly TP3VanierZachary_NG_Context _context;

        public TestsController(TP3VanierZachary_NG_Context context)
        {
            _context = context;
        }

        // GET: api/Tests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Test>>> GetTest()
        {
          if (_context.Test == null)
          {
              return NotFound();
          }
            return await _context.Test.ToListAsync();
        }

        // GET: api/Tests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Test>> GetTest(int id)
        {
          if (_context.Test == null)
          {
              return NotFound();
          }
            var test = await _context.Test.FindAsync(id);

            if (test == null)
            {
                return NotFound();
            }

            return test;
        }

        // PUT: api/Tests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTest(int id, Test test)
        {
            if (id != test.TestId)
            {
                return BadRequest();
            }

            _context.Entry(test).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TestExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Test>> PostTest(Test test)
        {
          if (_context.Test == null)
          {
              return Problem("Entity set 'TP3VanierZachary_NG_Context.Test'  is null.");
          }
            _context.Test.Add(test);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTest", new { id = test.TestId }, test);
        }

        // DELETE: api/Tests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTest(int id)
        {
            if (_context.Test == null)
            {
                return NotFound();
            }
            var test = await _context.Test.FindAsync(id);
            if (test == null)
            {
                return NotFound();
            }

            _context.Test.Remove(test);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TestExists(int id)
        {
            return (_context.Test?.Any(e => e.TestId == id)).GetValueOrDefault();
        }
    }
}
