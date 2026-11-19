(function () {
  // ---------- Quick question ----------
  var group = document.querySelector('[role="group"][aria-label="Answers"]');
  if (group) {
    var opts = [
      { key: 'A', right: false },
      { key: 'B', right: true },
      { key: 'C', right: false }
    ];
    var buttons = Array.prototype.slice.call(group.querySelectorAll('button'));
    var feedback = document.createElement('p');
    feedback.setAttribute('aria-live', 'polite');
    feedback.hidden = true;
    feedback.style.cssText = 'margin:0;padding:16px 18px;border-radius:16px;font-size:16px';
    group.parentNode.insertBefore(feedback, group.nextSibling);
    buttons.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var picked = opts[i];
        buttons.forEach(function (b, j) {
          var o = opts[j], chosen = j === i, showRight = o.right;
          var spans = b.children;
          b.setAttribute('aria-pressed', chosen ? 'true' : 'false');
          b.style.borderColor = showRight ? '#0E7A50' : (chosen ? '#B93A2E' : '#E3E7E1');
          b.style.background = showRight ? '#EAF7F0' : (chosen ? '#FCEDEA' : '#FFFFFF');
          spans[0].style.background = showRight ? '#0E7A50' : (chosen ? '#B93A2E' : '#F1F3EE');
          spans[0].style.color = (showRight || chosen) ? '#FFFFFF' : '#0B1410';
          spans[2].textContent = showRight ? 'Correct' : (chosen ? 'Not quite' : '');
          spans[2].style.color = showRight ? '#0E7A50' : '#B93A2E';
        });
        feedback.hidden = false;
        feedback.style.background = picked.right ? '#EAF7F0' : '#FCEDEA';
        feedback.style.color = picked.right ? '#0B3B2D' : '#7A2A20';
        feedback.textContent = picked.right
          ? 'Exactly. A share is a small piece of ownership in the company, so its value rises and falls with the business.'
          : 'Not quite. A share is a small piece of ownership in the company, not a loan or a savings account.';
      });
    });
  }

  // ---------- FAQ ----------
  var answers = [
    'Lynk is a Rwandan app for buying shares in companies on the Rwanda Stock Exchange from your phone, on your own or together with your ikimina.',
    'Lynk is opening soon. Join the waitlist and we will tell you the day accounts open.',
    'A licensed broker partner, inside Rwanda’s capital-markets rules. How your shares are held is confirmed with the broker before launch.',
    'With MTN Mobile Money, Airtel Money or a bank transfer. Lynk shows any fee and the arrival time before you pay.',
    'Our Circle brings your ikimina into Lynk. Your cash rotation stays as it is, and the group can choose to invest together in a separate pool, with every member’s share tracked on its own.',
    'Yes. Share prices go down as well as up, and you could get back less than you invest. Lynk shows the risk before every purchase.'
  ];
  var faq = document.getElementById('faq');
  if (faq) {
    var toggles = Array.prototype.slice.call(faq.querySelectorAll('button[aria-expanded]'));
    var open = 0;
    function render() {
      toggles.forEach(function (btn, i) {
        var row = btn.parentNode;
        var isOpen = open === i;
        var sign = btn.children[1];
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        sign.textContent = isOpen ? '−' : '+';
        sign.style.background = isOpen ? '#0B3B2D' : '#E9EEEA';
        sign.style.color = isOpen ? '#FFFFFF' : '#0B3B2D';
        var p = row.querySelector('p');
        if (isOpen && !p) {
          p = document.createElement('p');
          p.className = 'faq-a';
          p.style.cssText = 'margin:0;padding:0 60px 24px 4px;font-size:17px;color:#44524B';
          p.textContent = answers[i];
          row.appendChild(p);
        } else if (!isOpen && p) {
          p.remove();
        }
      });
    }
    toggles.forEach(function (btn, i) {
      btn.addEventListener('click', function () { open = open === i ? -1 : i; render(); });
    });
    render();
  }

  // ---------- Waitlist ----------
  var form = document.getElementById('waitForm');
  var msg = document.getElementById('formMsg');
  if (form && msg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = document.getElementById('site-email');
      var email = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.style.color = '#FFD3C9';
        msg.textContent = 'Enter a valid email address, like name@example.com.';
        input.focus();
        return;
      }
      msg.style.color = '#63F3B6';
      msg.textContent = 'Thanks for your interest. The waitlist opens soon, so check back here.';
      form.reset();
    });
  }
})();
