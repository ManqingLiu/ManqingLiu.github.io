window.MathJax = {
  tex: {
    tags: "ams",
    packages: {'[+]': ['amsthm']},
    macros: {
      theorem: ['\\begin{theorem}#1\\end{theorem}', 1],
      proof: ['\\begin{proof}#1\\end{proof}', 1]
    }
  },
  startup: {
    pageReady: () => {
      return MathJax.startup.defaultPageReady().then(() => {
        document.querySelectorAll('.theorem').forEach(el => {
          el.style.fontStyle = 'italic';
          el.style.display = 'block';
          el.style.marginTop = '1em';
          el.style.marginBottom = '1em';
        });
        document.querySelectorAll('.proof').forEach(el => {
          el.style.display = 'block';
          el.style.marginTop = '1em';
          el.style.marginBottom = '1em';
        });
        document.querySelectorAll('.proof').forEach(el => {
          const box = document.createElement('span');
          box.innerHTML = '&#9632;';
          box.style.float = 'right';
          el.appendChild(box);
        });
      });
    }
  }
};