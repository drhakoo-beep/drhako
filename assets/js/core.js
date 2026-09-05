
document.getElementById('generateBtn').addEventListener('click', () => {
    const inputVal = document.getElementById('targetInput').value.trim();
    const errorDiv = document.getElementById('errorMsg');
    const resultsDiv = document.getElementById('resultsSection');
    
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
    
    if (!inputVal) {
        errorDiv.textContent = '[!] HATA: Lütfen geçerli bir hedef girin.';
        errorDiv.style.display = 'block';
        return;
    }
    
    let domain = inputVal;
    let url = inputVal;
    
    try {
        if (!inputVal.startsWith('http://') && !inputVal.startsWith('https://')) {
            url = 'https://' + inputVal;
            domain = inputVal.split('/')[0];
        } else {
            const parsedUrl = new URL(inputVal);
            domain = parsedUrl.hostname;
            url = parsedUrl.origin + parsedUrl.pathname;
        }
    } catch (e) {
        errorDiv.textContent = '[!] HATA: URL formatı doğrulanamadı.';
        errorDiv.style.display = 'block';
        return;
    }
    
    // Clear and show
    resultsDiv.innerHTML = '';
    resultsDiv.classList.remove('hidden');
    
    // Group Data
    const categorizedTools = {};
    toolsDB.forEach(tool => {
        if (!categorizedTools[tool.category]) {
            categorizedTools[tool.category] = [];
        }
        categorizedTools[tool.category].push(tool);
    });
    
    let delayCounter = 0;
    
    for (const category in categorizedTools) {
        // Kategori Başlığı
        const catHeader = document.createElement('div');
        catHeader.className = 'category-header card-enter';
        catHeader.style.animationDelay = `${delayCounter * 0.1}s`;
        
        let catIcon = "fa-folder";
        if(category.includes("1.")) catIcon = "fa-magnifying-glass";
        if(category.includes("2.")) catIcon = "fa-radar";
        if(category.includes("3.")) catIcon = "fa-folder-open";
        if(category.includes("4.")) catIcon = "fa-bug";
        if(category.includes("5.")) catIcon = "fa-skull-crossbones";
        
        catHeader.innerHTML = `<i class="fa-solid ${catIcon}"></i> ${category}`;
        resultsDiv.appendChild(catHeader);
        delayCounter++;
        
        // Kartlar Container
        const groupDiv = document.createElement('div');
        groupDiv.style.display = 'contents';
        
        categorizedTools[category].forEach(tool => {
            let command = tool.cmd.replace(/{domain}/g, domain).replace(/{url}/g, url);
            
            const card = document.createElement('div');
            card.className = 'tool-card card-enter';
            card.style.animationDelay = `${delayCounter * 0.05}s`;
            
            card.innerHTML = `
                <div class="tool-header">
                    <div class="tool-name"><i class="${tool.icon}" style="margin-right:8px; color:var(--text-muted)"></i>${tool.name}</div>
                </div>
                <div class="tool-desc">${tool.desc}</div>
                <div class="cmd-box" title="Kopyalamak için tıkla">
                    ${command}
                    <span class="copy-badge"><i class="fa-regular fa-copy"></i> Kopyala</span>
                </div>
            `;
            
            // Kopyalama Event'i
            const cmdBox = card.querySelector('.cmd-box');
            cmdBox.addEventListener('click', () => {
                navigator.clipboard.writeText(command).then(() => {
                    const badge = cmdBox.querySelector('.copy-badge');
                    badge.innerHTML = `<i class="fa-solid fa-check"></i> Alındı!`;
                    badge.style.color = "var(--primary)";
                    setTimeout(() => {
                        badge.innerHTML = `<i class="fa-regular fa-copy"></i> Kopyala`;
                        badge.style.color = "#fff";
                    }, 2000);
                });
            });
            
            groupDiv.appendChild(card);
            delayCounter++;
        });
        
        resultsDiv.appendChild(groupDiv);
    }
    
    // Kaydırma
    setTimeout(() => {
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
});
