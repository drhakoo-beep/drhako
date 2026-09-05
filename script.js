const toolsData = [
{ name: "WHOIS", category: "1. Pasif Keşif (Reconnaissance)", desc: "Alan adı tescil bilgilerini ve iletişim adreslerini getirir.", cmd: "whois {domain}" },
{ name: "Dig", category: "1. Pasif Keşif (Reconnaissance)", desc: "DNS kayıtlarını (A, MX, TXT, NS) sorgular.", cmd: "dig {domain} ANY +noall +answer" },
{ name: "Nslookup", category: "1. Pasif Keşif (Reconnaissance)", desc: "IP adresi veya alan adı arka plan çözümlemesi yapar.", cmd: "nslookup -type=any {domain}" },
{ name: "TheHarvester", category: "1. Pasif Keşif (Reconnaissance)", desc: "Arama motorlarını kullanarak e-posta, alt alan adı ve IP toplar.", cmd: "theHarvester -d {domain} -b all" },
{ name: "Sublist3r", category: "1. Pasif Keşif (Reconnaissance)", desc: "Çoklu kaynakları tarayarak alt alan adlarını (subdomain) bulur.", cmd: "sublist3r -d {domain}" },
{ name: "Assetfinder", category: "1. Pasif Keşif (Reconnaissance)", desc: "Hedefe ait domain ve subdomain varlıklarını keşfeder.", cmd: "assetfinder --subs-only {domain}" },
{ name: "Amass", category: "1. Pasif Keşif (Reconnaissance)", desc: "Kapsamlı ağ haritalaması ve dış varlık keşfi yapar.", cmd: "amass enum -d {domain}" },
{ name: "Subfinder", category: "1. Pasif Keşif (Reconnaissance)", desc: "Hızlı ve pasif alt alan adı bulma aracıdır.", cmd: "subfinder -d {domain} -all" },
{ name: "Findomain", category: "1. Pasif Keşif (Reconnaissance)", desc: "Sertifika şeffaflığı loglarını kullanarak hızlı subdomain bulur.", cmd: "findomain -t {domain}" },
{ name: "Dnsrecon", category: "1. Pasif Keşif (Reconnaissance)", desc: "Gelişmiş DNS numaralandırma ve zone transfer kontrolü yapar.", cmd: "dnsrecon -d {domain} -t std" },
{ name: "Dnsenum", category: "1. Pasif Keşif (Reconnaissance)", desc: "Domain hakkında DNS bilgisi toplar ve brute force ile alt alan adı arar.", cmd: "dnsenum {domain}" },
{ name: "Fierce", category: "1. Pasif Keşif (Reconnaissance)", desc: "DNS zone transfer zafiyetini dener ve subdomain taraması yapar.", cmd: "fierce --domain {domain}" },
{ name: "Knockpy", category: "1. Pasif Keşif (Reconnaissance)", desc: "Kelime listesi ile alt alan adlarını tarar ve DNS kayıtlarını alır.", cmd: "knockpy {domain}" },
{ name: "Dmitry", category: "1. Pasif Keşif (Reconnaissance)", desc: "Derinlemesine bilgi toplama (whois, uptime, port, e-mail) aracıdır.", cmd: "dmitry -winse {domain}" },
{ name: "WafW00f", category: "1. Pasif Keşif (Reconnaissance)", desc: "Web uygulamasının arkasında Web Application Firewall (WAF) olup olmadığını tespit eder.", cmd: "wafw00f {url}" },
{ name: "WhatWeb", category: "1. Pasif Keşif (Reconnaissance)", desc: "Web sitesinin kullandığı teknolojileri, CMS'i ve sunucu sürümünü tanımlar.", cmd: "whatweb -v {url}" },
{ name: "LBD (Load Balancing Detector)", category: "1. Pasif Keşif (Reconnaissance)", desc: "Hedefin yük dengeleme kullanıp kullanmadığını kontrol eder.", cmd: "lbd {domain}" },
{ name: "Nmap (Standart)", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Açık portları ve temel servisleri hızlıca tarar.", cmd: "nmap -T4 -F {domain}" },
{ name: "Nmap (Versiyon & İşletim Sistemi)", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Portlarda çalışan servislerin versiyonlarını ve işletim sistemini tahmin eder.", cmd: "nmap -sV -O -T4 {domain}" },
{ name: "Nmap (Tam Kapsamlı)", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Tüm portları agresif modda tarar ve varsayılan nmap scriptlerini çalıştırır.", cmd: "nmap -p- -A -T4 {domain}" },
{ name: "Masscan", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Büyük ağları saniyeler içinde tarayabilen asenkron port tarayıcısıdır.", cmd: "masscan -p1-65535 {domain} --rate=1000" },
{ name: "RustScan", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Nmap'ten daha hızlı açık port bulur ve sonucu nmap'e aktarır.", cmd: "rustscan -a {domain} -- -sV" },
{ name: "Naabu", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Güvenilir ve hızlı asenkron port tarayıcısıdır.", cmd: "naabu -host {domain} -top-ports 1000" },
{ name: "Httprobe", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Subdomain listesinden hangilerinde çalışan web sunucusu (http/https) olduğunu bulur.", cmd: "echo {domain} | httprobe" },
{ name: "Httpx", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Çok amaçlı HTTP toolkit aracı. Çalışan web sunucularını ve title bilgilerini getirir.", cmd: "echo {domain} | httpx -title -status-code" },
{ name: "Waybackurls", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Archive.org üzerinden hedefe ait eski ve gizli URL uç noktalarını getirir.", cmd: "waybackurls {domain}" },
{ name: "Gau (Get All Urls)", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Farklı kaynaklardan (AlienVault, Wayback) tüm bilinen URL'leri çeker.", cmd: "gau {domain}" },
{ name: "Hakrawler", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Web uygulamasını crawl ederek URL'leri, formları ve JavaScript dosyalarını bulur.", cmd: "echo {url} | hakrawler" },
{ name: "Katana", category: "2. Aktif Tarama (Scanning & Enum)", desc: "Yeni nesil, çok hızlı bir web crawling ve örümcek aracıdır.", cmd: "katana -u {url}" },
{ name: "Dirb", category: "3. Dizin ve Dosya Taraması (Fuzzing)", desc: "Web sunucusundaki gizli dizinleri ve dosyaları kelime listesi ile tarar.", cmd: "dirb {url}" },
{ name: "Dirbuster (CLI Mode)", category: "3. Dizin ve Dosya Taraması (Fuzzing)", desc: "Java tabanlı dizin brute-force aracının terminal komutudur.", cmd: "dirbuster -u {url} -H -l /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt" },
{ name: "Gobuster", category: "3. Dizin ve Dosya Taraması (Fuzzing)", desc: "Go diliyle yazılmış çok hızlı dizin, dosya ve DNS brute-force aracıdır.", cmd: "gobuster dir -u {url} -w /usr/share/wordlists/dirb/common.txt" },
{ name: "Wfuzz", category: "3. Dizin ve Dosya Taraması (Fuzzing)", desc: "Parametreleri, başlıkları veya dizinleri fuzzing yöntemiyle test eder.", cmd: "wfuzz -c -z file,/usr/share/wordlists/dirb/common.txt --hc 404 {url}/FUZZ" },
{ name: "Ffuf", category: "3. Dizin ve Dosya Taraması (Fuzzing)", desc: "Hızlı web fuzzer aracıdır. Dizin veya parametre keşfi için çok etkilidir.", cmd: "ffuf -w /usr/share/wordlists/dirb/common.txt -u {url}/FUZZ" },
{ name: "Feroxbuster", category: "3. Dizin ve Dosya Taraması (Fuzzing)", desc: "Rust ile yazılmış, özyinelemeli (recursive) ve çok hızlı içerik keşif aracıdır.", cmd: "feroxbuster -u {url}" },
{ name: "Nikto", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "Web sunucusunu bilinen tehlikeli dosyalar, eski sürümler ve zafiyetler için tarar.", cmd: "nikto -h {url}" },
{ name: "Nmap (Vuln Script)", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "Nmap'in nse script motorunu kullanarak CVE açıklarını tarar.", cmd: "nmap -sV --script vuln {domain}" },
{ name: "Nuclei", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "Topluluk tabanlı şablonlarla web uygulamalarında bilinen zafiyetleri hızlıca bulur.", cmd: "nuclei -u {url}" },
{ name: "Wapiti", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "Web uygulamalarını otomatik crawl ederek güvenlik açıkları (XSS, SQLi, LFI) arar.", cmd: "wapiti -u {url}" },
{ name: "Arachni", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "Kapsamlı ve yüksek performanslı açık kaynaklı web zafiyet tarayıcısı (CLI kullanımı).", cmd: "arachni {url}" },
{ name: "Joomscan", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "Joomla CMS altyapısındaki zafiyetleri ve versiyon açıklarını tespit eder.", cmd: "joomscan -u {url}" },
{ name: "WPScan", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "WordPress sitelerindeki zafiyetli eklentileri, temaları ve kullanıcıları tarar.", cmd: "wpscan --url {url} --enumerate u,vp,vt" },
{ name: "CMSeek", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "Hedefin hangi CMS'i (WordPress, Joomla, Drupal vb.) kullandığını ve açıklarını bulur.", cmd: "cmseek -u {url}" },
{ name: "Droopescan", category: "4. Zafiyet Analizi (Vuln Assessment)", desc: "Drupal, SilverStripe gibi CMS sistemleri için plugin tabanlı zafiyet tarayıcı.", cmd: "droopescan scan drupal -u {url}" },
{ name: "SQLMap", category: "5. İleri Seviye Sömürü (Exploitation)", desc: "SQL Injection açıklarını otomatik tespit eder ve veritabanını ele geçirir.", cmd: "sqlmap -u \"{url}/page.php?id=1\" --dbs --batch" },
{ name: "Dalfox", category: "5. İleri Seviye Sömürü (Exploitation)", desc: "Gelişmiş ve çok hızlı XSS (Cross-Site Scripting) zafiyet tarayıcı ve sömürücü.", cmd: "dalfox url {url}" },
{ name: "XSStrike", category: "5. İleri Seviye Sömürü (Exploitation)", desc: "Akıllı payload'lar üreterek XSS açıklarını bulur ve filtreleri bypass eder.", cmd: "xsstrike -u \"{url}\"" },
{ name: "ParamSpider", category: "5. İleri Seviye Sömürü (Exploitation)", desc: "Hedef URL'ye ait web arşivlerinden gizli parametreleri (SQLi/XSS için) toplar.", cmd: "paramspider -d {domain}" },
{ name: "Arjun", category: "5. İleri Seviye Sömürü (Exploitation)", desc: "Web endpoint'lerinde gizli HTTP GET/POST parametrelerini brute-force ile bulur.", cmd: "arjun -u {url}" },
{ name: "Commix", category: "5. İleri Seviye Sömürü (Exploitation)", desc: "Otomatik Command Injection (Komut Enjeksiyonu) zafiyet tespiti ve sömürü aracı.", cmd: "commix --url=\"{url}\"" },
{ name: "SSLScan", category: "6. Diğer Analizler", desc: "Sunucunun desteklediği SSL/TLS şifreleme algoritmalarını ve sertifika açıklarını test eder.", cmd: "sslscan {domain}" },
{ name: "TestSSL.sh", category: "6. Diğer Analizler", desc: "Sunucu servislerindeki SSL/TLS yapılandırma hatalarını (Heartbleed, Poodle) kontrol eder.", cmd: "testssl.sh {domain}" },
{ name: "Hydra", category: "6. Diğer Analizler", desc: "SSH, FTP, HTTP gibi protokollere online brute-force (kaba kuvvet) saldırısı yapar.", cmd: "hydra -L users.txt -P passwords.txt {domain} ssh" },
{ name: "Medusa", category: "6. Diğer Analizler", desc: "Hydra benzeri modüler, paralel ve hızlı ağ login kaba kuvvet aracıdır.", cmd: "medusa -h {domain} -U users.txt -P passwords.txt -M ssh" }
];
document.getElementById('generateBtn').addEventListener('click', () => {
const inputVal = document.getElementById('targetInput').value.trim();
const errorDiv = document.getElementById('errorMsg');
const resultsDiv = document.getElementById('results');
errorDiv.textContent = '';
resultsDiv.innerHTML = '';
if (!inputVal) {
errorDiv.textContent = 'Lütfen bir URL veya Domain girin!';
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
errorDiv.textContent = 'Geçersiz format! Lütfen düzgün bir URL veya domain girin.';
return;
}
const categorizedTools = {};
toolsData.forEach(tool => {
if (!categorizedTools[tool.category]) {
categorizedTools[tool.category] = [];
}
categorizedTools[tool.category].push(tool);
});
for (const category in categorizedTools) {
const catBlock = document.createElement('div');
catBlock.className = 'category-block';
const catTitle = document.createElement('h2');
catTitle.className = 'category-title';
catTitle.textContent = category;
catBlock.appendChild(catTitle);
resultsDiv.appendChild(catBlock);
categorizedTools[category].forEach(tool => {
let command = tool.cmd.replace(/{domain}/g, domain).replace(/{url}/g, url);
const card = document.createElement('div');
card.className = 'tool-card';
const tName = document.createElement('div');
tName.className = 'tool-name';
tName.textContent = tool.name;
const tDesc = document.createElement('div');
tDesc.className = 'tool-desc';
tDesc.textContent = tool.desc;
const cmdBox = document.createElement('div');
cmdBox.className = 'command-box';
cmdBox.textContent = command;
const copyHint = document.createElement('span');
copyHint.className = 'copy-hint';
copyHint.textContent = 'Tıkla Kopyala';
cmdBox.appendChild(copyHint);
cmdBox.addEventListener('click', () => {
navigator.clipboard.writeText(command).then(() => {
copyHint.textContent = 'Kopyalandı!';
setTimeout(() => {
copyHint.textContent = 'Tıkla Kopyala';
}, 2000);
});
});
card.appendChild(tName);
card.appendChild(tDesc);
card.appendChild(cmdBox);
resultsDiv.appendChild(card);
});
}
});