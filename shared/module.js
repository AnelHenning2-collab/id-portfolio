// Shared interaction engine for all portfolio training modules.
// Reused across modules so each module.html only declares content + a small config object.

let totalScreens = document.querySelectorAll('.screen').length;

function goTo(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelector(`.screen[data-screen="${n}"]`).classList.add('active');
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = `${(n / totalScreens) * 100}%`;
  window.scrollTo(0, 0);
}

// Generic click-to-reveal card tracker. Enables a "next" button once minRequired cards are revealed.
function makeCardTracker(gridSelector, minRequired, nextBtnId, noteSelector, doneMessage) {
  let revealedCount = 0;
  const cards = document.querySelectorAll(`${gridSelector} .reveal-card`);
  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('revealed')) {
        card.classList.add('revealed');
        revealedCount++;
        if (revealedCount >= minRequired) {
          const btn = document.getElementById(nextBtnId);
          if (btn) btn.disabled = false;
          const note = document.querySelector(noteSelector);
          if (note) note.textContent = doneMessage;
        }
      }
    });
  });
}

// Generic single-select quiz. config = { correctIndex, correctFeedback, incorrectFeedback, feedbackId, nextBtnId }
function makeQuiz(optionsSelector, config) {
  const options = document.querySelectorAll(optionsSelector);
  options.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      options.forEach(b => b.disabled = true);
      const fb = document.getElementById(config.feedbackId);
      if (i === config.correctIndex) {
        btn.classList.add('correct');
        fb.innerHTML = config.correctFeedback;
      } else {
        btn.classList.add('incorrect');
        options[config.correctIndex].classList.add('correct');
        fb.innerHTML = config.incorrectFeedback;
      }
      fb.classList.add('show');
      const nextBtn = document.getElementById(config.nextBtnId);
      if (nextBtn) nextBtn.style.display = 'inline-block';
    });
  });
}

function showThankYou(portfolioNote) {
  document.querySelector('.module').innerHTML =
    `<div class="screen active" style="text-align:center; padding:60px 28px;">
      <div class="completion-icon">🙏</div>
      <h2>Thanks for your feedback</h2>
      <p class="lead">${portfolioNote}</p>
    </div>`;
}
