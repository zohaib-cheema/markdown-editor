const textarea = document.getElementById('markdown');
const rendered = document.getElementById('rendered');

textarea.addEventListener('input', () => {
    rendered.innerHTML = marked.parse(textarea.value);
});

document.getElementById('copy').addEventListener('click', () => {
    navigator.clipboard.writeText(rendered.innerHTML);
});

document.getElementById('export').addEventListener('click', () => {
    const opt = {
        margin: 0.5,
        filename: 'markdown.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(rendered).set(opt).save();
});
